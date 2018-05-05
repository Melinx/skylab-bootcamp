
const logic = {
    url: 'https://api.spotify.com/v1',
    token: '',
    
    headers = () => {
        headers: { Authorization: `Bearer ${token}`}
    },

    searchAlbum = (album) => {
        return (
        fetch(`${this.url}/search?q=${album}&type=album`)

        .then(data => data.json())
        .then(data => data.items)
        )
    },

}

export default 'logic'

