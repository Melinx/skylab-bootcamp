import React, { Component } from 'react';
import './App.css';
import logic from './logic'
import AlbumInfo from './components/AlbumInfo'

class App extends Component {

  constructor() {
    super()

    this.state = {
      albums: [],
      query: '',
      id: ''
    }
  }

  _handleSearchAlbum = (e) => {

    e.preventDefault()

    logic.token =
      'BQC8uZpotSJd1gZ7j7qz7Muz5RDyyy83KsRuYir9rshpkhXIS-3_KQgqeFjFgBdpX6EYADyfjD_WNb13Y36p1oppw8ykh3JQRsInY9VjGDzfeQqwjQmjWqxIqb6icabaQT8-CXWH14K3zVgLIaEvrPrF'

    logic.searchAlbum(this.state.query)
      .then(albums => { this.setState({ albums, query: '' }) })
  }

  _handleQuery = (e) => {
    this.setState(
      { query: e.target.value }
    )
  }

  _handleGetAlbumInfo = (e) => {
    logic.getAlbumInfo(this.state.id) 
      .then(id => { this.setState({ albums, query, id})})
  }


  render() {
    return (
      <div className="App">

        <form onSubmit={this._handleSearchAlbum}>
          <input type="text" onChange={this._handleQuery} value={this.state.query} placeholder="search your albums here." />
          <input type="submit" value='GO! ->' />
        </form>

        {this.state.id ?
           <section>
           <ul>
             < AlbumInfo onGetAlbumInfo={this.getAlbumInfo} />
           </ul>
         </section>  
          :
          <section>
            <ul>
              {this.state.albums.map(album => { return <li key={album.id} onClick={this._handleGetAlbumInfo}> {album.name} </li> })}
            </ul>
          </section> 
        }
      </div>
    )
  }
}


export default App;
