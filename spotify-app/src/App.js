import React, { Component } from 'react';
import logic from './logic'
import  './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      albums: [],
      query: ''
    }
  }

  _handleSearchAlbum = (e) => {

    e.preventDefault()

    logic.searchAlbum(this.state.query)
        .then(albums => this.setState({albums}), )
  }

  _handleQuery = (e) => {
    this.setState(
      {query: e.target.value}
    )
  }

  render() {
    return (
      <div className="App">

        <form onSubmit={this._handleSearchAlbum}>

          <input type="search" onChange={this._handleQuery} value={this.state.query}
          placeholder="type an album here." />
          <input type="submit"> Search! </input>

        </form>

      </div>
    );
  }
}

export default App;
