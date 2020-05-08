//must include function to fetch GET via search parameters for a list of responses and return an object
//also must include GET requests for album, artist, or playlist
import { authenticate } from './authenticate'

const token = authenticate();


export const spotify = {
  search(query, selector) {
    let endpoint = `https://api.spotify.com/v1/search?q=${query.split(' ').join('+')}&type=${selector}`
    return fetch(
      endpoint, {
      headers: { Authorization: 'Bearer ' + token },
    })
      .then(response => response.json())
      .then(jsonResponse => {

        if (selector === 'artist') {
          let cleanResponse = jsonResponse['artists']['items'].filter(element => element['images'].length > 0)
          return cleanResponse.map(element => (
            {
              id: element['id'],
              primary: element['name'],
              secondary: null,
              tertiary: null,
              coverImageSRC: element['images'][0]['url'],
              type: selector,
            }))
        } else if (selector === 'album') {
          let cleanResponse = jsonResponse['artists']['items'].filter(element => element['images'].length > 0)
          return cleanResponse['albums']['items'].map(element => ({
            id: element['id'],
            primary: element['name'],
            secondary: element["artists"]['name'],
            tertiary: null,
            coverImageSRC: element['images'][0]['url'],
            type: selector
          }))
        } else if (selector === 'playlist') {
          let cleanResponse = jsonResponse['artists']['items'].filter(element => element['images'].length > 0)
          return cleanResponse['playlists']['items'].map(element => ({
            id: element['id'],
            primary: element['name'],
            secondary: null,
            tertiary: null,
            coverImageSRC: element['images'][0]['url'],
            type: selector,
          }))
        } else {
          return {
            id: '000',
            primary: 'Unavailable',
            secondary: null,
            tertiary: null,
            coverImageSRC: 'http://claw.wdfiles.com/local--files/music-ui/albumart.jpg',
            type: selector,
          }
        }
      })
  },
  //still endpoint from above
  walkingSongs(id, selector) {
    if (selector === 'artist') {
      let endpoint = `https://api.spotify.com/v1/artists/${id}/top-tracks`
      return fetch(
        endpoint, {
        headers: { Authorization: 'Bearer ' + token },
      })
        .then(response => response.json())
        .then(jsonResponse => {
          return jsonResponse['tracks'].map(item => {
             ({
              id = item['id'],
              primary = item['name'],
              secondary = item['artists'][0]['name'],
              tertiary = item['album']['name'],
            })
          })
        })
    }
  }
}