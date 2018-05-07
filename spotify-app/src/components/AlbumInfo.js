import React, { Component } from 'react'
import logic from '../logic'

class AlbumInfo extends Component {
    constructor() {
        super()

        this.state = {
            key: '',
            data: []
        }
    }

    getAlbumInfo = (id) => {
        this.props.onGetAlbumInfo(this.state.id)
        this.setState({id})
    }

    componentDidMount() {
        logic.getAlbumInfo(this.state.key)
        .then(data => this.setState({data}))
    }

    render() {
        
        return (
            <div>
                <h1>{this.state.data.name} </h1>
                <h3>{this.state.data.release_date}</h3>
            </div>)
    }
}

export default AlbumInfo