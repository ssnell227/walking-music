import React from 'react';
import './App.css';
import { SearchBar } from './components/search-bar/search-bar'
import { SearchDisplay } from './components/search-display/search-display'
import { WalkableDisplay } from './components/walkable-display/walkable-display'

const returnedList = []

class ReturnedItem {
  constructor(id) {
    this.id = id
    this.primary = 'Primary Title'
    this.secondary = 'Secondary Title'
    this.tertiary = 'Tertiary Title'
    this.coverImageURL = '../testAlbumImage.png'
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
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <SearchDisplay returnedList={this.state.returnedList} />
        <WalkableDisplay />
      </div>
    );
  }
}

export default App;
