import React from 'react'
import './search-bar.css'

export class SearchBar extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            query: null
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    handleSearch(e) {
        this.props.getSearchTerms(e.target.value)
    }
    render () {
        return (
            <div className='search-bar'>
                <input onChange={this.handleSearch} type='text' placeholder='Artist, album, playlist...'></input>
            </div>
        )
    }
}
