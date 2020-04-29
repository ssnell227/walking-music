import React from 'react';
import './App.css';
import { SearchBar } from './components/search-bar/search-bar'
import { SearchDisplay } from './components/search-display/search-display'
import { WalkableDisplay } from './components/walkable-display/walkable-display'
import {authenticate} from './utils/authenticate'
import {spotify} from './utils/spotify.js'

import testAlbumImage from './testAlbumImage.png'

authenticate() //get auth token from Spotify via implicit grant

const returnedList = []


class ReturnedItem {
  constructor(id) {
    this.id = id
    this.primary = 'Primary Title'
    this.secondary = 'Secondary Title'
    this.tertiary = 'Tertiary Title'
    this.coverImageSRC = testAlbumImage
  }
}

function populateList() {
  for (let i = 0; i < 7; i++) {
    returnedList.push(new ReturnedItem(i))
  }
}

populateList()



class App extends React.Component {
  constructor(props) {
    super(props)
    //hard coded example state.  Will be info from returned Spotify
    this.state = {
      returnedList: returnedList,
    }
    this.getSearchTerms = this.getSearchTerms.bind(this)
    this.runSearch = this.runSearch.bind(this)
  }
  getSearchTerms (searchTerms) {
    let searchArray = searchTerms.split(' ')
    console.log(searchArray)
    this.setState({
      searchTerms: searchArray
    })
  }
  runSearch (searchArray) {
    spotify.search(searchArray).then(response => {
      this.setState ({
        returnedList: response,
      })
    })
  }
  render() {
    return (
      <div className="App">
        <SearchBar runSearch={this.runSearch}/>
        <SearchDisplay returnedList={this.state.returnedList} />
        <WalkableDisplay />
      </div>
    );
  }
}

export default App;
