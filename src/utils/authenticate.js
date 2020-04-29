//one function to grab an access token, another to return the access token to the main app if successful   

export function authenticate () {
    let token = window.location.hash.substr(1)
    if (token) {
        const o = Object.fromEntries(new URLSearchParams(token))
        return o.access_token
    } else {
        redirect();
    }
}

function redirect () {
    const authEndpoint = 'https://accounts.spotify.com/authorize'
    const clientId = '436c58a7aef14f739331d3b0985e8828'
    const redirectUri = `${window.location.protocol}//${window.location.host}/`
    let query = `client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`
    window.location = `${authEndpoint}?${query}`
}

