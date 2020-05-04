import React from 'react'
import './search-bar.css'

export class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchSelector: "artist",
        }
        this.selectors = {
            'Artist': 'artist',
            'Album': 'album',
            'Playlist': 'playlist'
        }

        this.handleSearch = this.handleSearch.bind(this)
        this.handleSelectorChange = this.handleSelectorChange.bind(this)
    }

    handleSelectorChange(selector) {
        this.setState({
            searchSelector: selector
        })
        console.log(selector)
    }

    handleSearch(e) {
        if (e.target.value) {
            this.props.runSearch(e.target.value, this.state.searchSelector)
        }
    }

    getSelectorClass(selector) {
        if (this.state.searchSelector === selector) {
            return 'active'
        } else {
            return ''
        }
    }

    renderSelectorOptions() {
        return Object.values(this.selectors).map(selector => {
            const selectorValue = selector;
            return <li
                onClick={this.handleSelectorChange.bind(this, selectorValue)}
                className={this.getSelectorClass(selectorValue)}
                key={selectorValue}>{selector}</li>
        })
    }

    render() {
        return (
            <div className='search-bar'>
                <input onChange={this.handleSearch} type='text' placeholder='Artist, album, playlist...'></input>
                <label>Search for:</label>
                <div className='button-container'>
                    <ul>{this.renderSelectorOptions()}</ul>
                </div>
            </div>
        )
    }
}
