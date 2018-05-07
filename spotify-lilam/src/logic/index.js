const logic = {
    url: 'https://api.spotify.com/v1',
    token: 'BQDT0AMR5trTVNl3InRWXkMgS1CIghoZt0dP3qeIApgsy6nDGqi0nx_3y_YDIZwEcF8X2BklKKipLtWdH1ONmEPu6OnOpOwWvZwDQCptLRbfjYPtylvY66990iUsnERDt4GBV399Stu_y4-NdaN8ia-v',

    headers() {
        return { 
            headers: { 
                Authorization: `Bearer ${this.token}`
            }
        }
    },

    searchAlbums(album){
        return fetch(`${this.url}/search?q=${album}&type=album`, this.headers())
            .then(resp => resp.json())
            .then(data => data.albums.items)
    },

    getAlbumInfo(id){
        return fetch(`${this.url}/albums/${id}`, this.headers())
            .then(resp => resp.json())
            .then(data => data)
    }
}

export default logic