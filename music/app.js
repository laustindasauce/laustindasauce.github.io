require("isomorphic-unfetch");

const song_div = document.getElementById('songDisplay')
const artist_div = document.getElementById('artistDisplay')
const album_div = document.getElementById('albumDisplay')

const song_btn = document.getElementById('songbtn')
const artist_btn = document.getElementById('artistbtn')
const album_btn = document.getElementById('albumbtn')

const ablum_value = document.getElementById('album')
const artist_value = document.getElementById('artist')
const song_value = document.getElementById('songs')

const API_ROOT = "http://ws.audioscrobbler.com/2.0/"

const API_KEY = "2ce7ea55e2b2d8313f00e8d1160a334c"

// const USER_URL = `${API_ROOT}?method=user.getinfo&user=${USER}&api_key=${API_KEY}&format=json`

let username_val = document.getElementById("username")


const get = async (url) => {
    const r = await fetch(url);
    return await r.json();
}

async function show_all_time_song(USER) {
    const ALL_TIME_TRACK_URL = `${API_ROOT}?method=user.gettoptracks&user=${USER}&limit=10&api_key=${API_KEY}&format=json`

    songJSON = await get(ALL_TIME_TRACK_URL)
    songJSON = songJSON.toptracks.track
    for (let i = 0; i < 10; i++) {
        songTrack = songJSON[i]
        const artist = songTrack.artist.name
        const song = songTrack.name
        const count = songTrack.playcount
        let body = i+1 + ': ' + " [" + count + "] " + 'Song: ' + song + " Artist: " + artist
        var id = "song" + i
        bodyLocal = document.getElementById(id).innerHTML = body
    }
}


async function show_weekly_song(USER) {
    const WEEKLY_TRACK_URL = `${API_ROOT}?method=user.getweeklytrackchart&user=${USER}&limit=10&api_key=${API_KEY}&format=json`

    songJSON = await get(WEEKLY_TRACK_URL)
    songJSON = songJSON.weeklytrackchart.track
    for (let i = 0; i < 10; i++) {
        songTrack = songJSON[i]
        const artist = songTrack.artist['#text']
        const song = songTrack.name
        const count = songTrack.playcount
        let body = i+1 + ': ' + " [" + count + "] " + 'Song: ' + song + " Artist: " + artist
        var id = "song" + i
        bodyLocal = document.getElementById(id).innerHTML = body
    }
}


async function show_all_time_artist(USER) {
    const ALL_TIME_ARTIST_URL = `${API_ROOT}?method=user.gettopartists&user=${USER}&limit=10&api_key=${API_KEY}&format=json`

    songJSON = await get(ALL_TIME_ARTIST_URL)
    songJSON = songJSON.topartists.artist
    for (let i = 0; i < 10; i++) {
        artistObj = songJSON[i]
        const artist = artistObj.name
        const count = artistObj.playcount
        var id = "artist" + i
        let body = i+1 + ': ' + " [" + count + "] " + artist
        bodyLocal = document.getElementById(id).innerHTML = body
    }
}


async function show_weekly_artist(USER) {
    const WEEKLY_ARTIST_URL = `${API_ROOT}?method=user.getweeklyartistchart&user=${USER}&limit=10&api_key=${API_KEY}&format=json`

    songJSON = await get(WEEKLY_ARTIST_URL)
    songJSON = songJSON.weeklyartistchart.artist
    for (let i = 0; i < 10; i++) {
        artistObj = songJSON[i]
        const artist = artistObj.name
        const count = artistObj.playcount
        var id = "artist" + i
        let body = i+1 + ': ' + " [" + count + "] " + artist
        bodyLocal = document.getElementById(id).innerHTML = body
    }
}


async function show_all_time_album(USER) {
    const ALL_TIME_ALBUM_URL = `${API_ROOT}?method=user.gettopalbums&user=${USER}&limit=10&api_key=${API_KEY}&format=json`

    songJSON = await get(ALL_TIME_ALBUM_URL)
    songJSON = songJSON.topalbums.album
    for (let i = 0; i < 10; i++) {
        artistObj = songJSON[i]
        const artist = artistObj.name
        const count = artistObj.playcount
        var id = "album" + i
        let body = i+1 + ': ' + " [" + count + "] " + artist
        bodyLocal = document.getElementById(id).innerHTML = body
    }
}


async function show_weekly_album(USER) {
    const WEEKLY_ALBUM_URL = `${API_ROOT}?method=user.getweeklyalbumchart&user=${USER}&limit=10&api_key=${API_KEY}&format=json`

    songJSON = await get(WEEKLY_ALBUM_URL)
    songJSON = songJSON.weeklyalbumchart.album
    for (let i = 0; i < 10; i++) {
        artistObj = songJSON[i]
        const artist = artistObj.name
        const count = artistObj.playcount
        var id = "album" + i
        let body = i+1 + ': ' + " [" + count + "] " + artist
        bodyLocal = document.getElementById(id).innerHTML = body
    }
}

async function isUser(USER) {
    const USER_URL = `${API_ROOT}?method=user.getinfo&user=${USER}&api_key=${API_KEY}&format=json`
    
    get(USER_URL).then((res) => {
        console.log(res)
        if (res) return true
        return false
    })
    .catch(error => {
        console.log(error)
        return false
    });
}

// This is to set up our leaders on each load of site
async function main() {
    song_btn.addEventListener('click', function () {
        let USER = ''
        if (username_val.value) {
            if (isUser()) {
                USER = username_val.value
            }
        } else {
            USER = "Abspen1"
        }
        var num = song_value.value
        if (num == 0) return alert('Please select Weekly or All-Time from the dropdown!')
        if (num == 1) return show_weekly_song(USER)
        if (num == 2) return show_all_time_song(USER)
    })
    artist_btn.addEventListener('click', function () {
        let USER = ''
        if (username_val.value) {
            USER = username_val.value
        } else {
            USER = "Abspen1"
        }
        var num = artist_value.value
        if (num == 0) return alert('Please select Weekly or All-Time from the dropdown!')
        if (num == 1) return show_weekly_artist(USER)
        if (num == 2) return show_all_time_artist(USER)
    })
    album_btn.addEventListener('click', function () {
        let USER = ''
        if (username_val.value) {
            console.log("username")
            USER = username_val.value
        } else {
            USER = "Abspen1"
        }
        var num = ablum_value.value
        if (num == 0) return alert('Please select Weekly or All-Time from the dropdown!')
        if (num == 1) return show_weekly_album(USER)
        if (num == 2) return show_all_time_album(USER)
    })
}

main()