//must include function to fetch GET via search parameters for a list of responses and return an object
//also must include GET requests for album, artist, or playlist
import {authenticate} from './authenticate'

import testAlbumImage from '../testAlbumImage.png'

const token = authenticate();

//temporary dev
const returnedList = []


class ReturnedItem {
  constructor(id) {
    this.id = id
    this.primary = 'Returned'
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

//temporary dev
//my search endpoint is coming up with no results, so I've hard-coded what the results should look like
//spotify.search() IS working-- it's passing the object all the way down to the unit-display

export const spotify = {
    search (terms) {
    let endpoint = `https://api.spotify.com/v1/search?q=${terms.split(' ').join('+')}&type=album,artist,playlist`
    console.log(endpoint)
        return fetch(
            endpoint, {
            headers: {Authorization: 'Bearer ' + token},
        })
        .then(response => response.json())
        .then(jsonResponse => {
            console.log(jsonResponse)
            return returnedList
        })
    }
}