import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from "axios";

import allProjects from "./json/all-projects.json";
import twitterBot from "./json/projects/twitter-bot.json";
import abspen1 from "./json/projects/abspen1.json";
import alpacaPython from "./json/projects/alpaca-python.json";
import attendanceGui from "./json/projects/attendance-gui.json";
import bots from "./json/projects/battle-of-the-states.json";
import bdayEmail from "./json/projects/bday-email.json";
import capTrack from "./json/projects/capital-tracker.json";
import coffee from "./json/projects/coffee-shop.json";
import discord from "./json/projects/discord-bot.json";
import eav2 from "./json/projects/eav2.json";
import encodeDecode from "./json/projects/encode-decode.json";
import goBackend from "./json/projects/go-backend.json";
import goEncode from "./json/projects/go-encode.json";
import goTrading from "./json/projects/go-trading-algo.json";
import lexical from "./json/projects/lexical-analyzer.json";
import rps from "./json/projects/rps-js.json";
import pacman from "./json/projects/PacMan-PyGame.json";
import v3 from "./json/projects/v3.json";
import socialLinks from "./json/social-links.json";
import workHistory from "./json/work-history.json";

import spotifyActions from "./json/spotify-urls.json";

const BASE_URL = "http://localhost:8558";
// const BASE_URL = "https://austinbspencer.com";
const OATH_PATH = "/go-api/spotify/get-oath-url";
const GET_PATH = "/go-api/spotify/user/get";

export default new Vuex.Store({
  state: {
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "Spotify", icon: "mdi-spotify", to: "/spotify" },
      // { title: 'Contact', icon: 'mdi-information-outline', to: '/contact' },
    ],
    projects: [allProjects],
    projectInfo: [
      twitterBot,
      abspen1,
      alpacaPython,
      attendanceGui,
      bots,
      bdayEmail,
      capTrack,
      coffee,
      discord,
      eav2,
      encodeDecode,
      goBackend,
      goEncode,
      goTrading,
      lexical,
      rps,
      pacman,
      v3,
    ],
    currProject: {},
    links: socialLinks,
    work: workHistory,
    spotifyActions: spotifyActions,
    oathUrl: null,
    spotifyId: null,
    spotifyUser: null,
    spotifyUserPlaylists: [],
    allPlaylistsWithTracks: [],
    allPlaylistsTracks: new Object(),
    currentPlaylistTracks: null,
    audioFeatures: null,
    topTracks: null,
    topArtists: null,
    spotifyArtist: null,
    spotifyTrack: null,
    recentTracks: null,
  },
  getters: {
    currentItems: (state) => state.items,
    projects: (state) => state.projects,
    projectInfo: (state) => state.projectInfo,
    currentProject: (state) => state.currProject,
    links: (state) => state.links,
    work: (state) => state.work,
    spotifyActions: (state) => state.spotifyActions,
    oathUrl: (state) => state.oathUrl,
    spotifyId: (state) => state.spotifyId,
    spotifyUser: (state) => state.spotifyUser,
    spotifyUserPlaylists: (state) => state.spotifyUserPlaylists,
    allPlaylistsWithTracks: (state) => state.allPlaylistsWithTracks,
    allPlaylistsTracks: (state) => state.allPlaylistsTracks,
    currentPlaylistTracks: (state) => state.currentPlaylistTracks,
    audioFeatures: (state) => state.audioFeatures,
    topTracks: (state) => state.topTracks,
    topArtists: (state) => state.topArtists,
    spotifyArtist: (state) => state.spotifyArtist,
    spotifyTrack: (state) => state.spotifyTrack,
    recentTracks: (state) => state.recentTracks,
  },
  mutations: {
    projectInfo(state, name) {
      state.currProject = state.projectInfo.find((proj) => {
        return proj.name === name;
      });
    },
    SET_OATH_URL: (state, url) => (state.oathUrl = url),
    SET_SPOTIFY_ID: (state, id) => (state.spotifyId = id),
    SET_SPOTIFY_USER: (state, profile) => (state.spotifyUser = profile),
    SET_SPOTIFY_USER_PLAYLISTS: (state, playlists) =>
      (state.spotifyUserPlaylists = playlists),
    SET_CURRENT_PLAYLIST_TRACKS: (state, tracks) =>
      (state.currentPlaylistTracks = tracks),
    APPEND_PLAYLIST_IDS: (state, id) => state.allPlaylistsWithTracks.push(id),
    SET_PLAYLIST_WITH_TRACKS: (state, payload) =>
      (state.allPlaylistsTracks[payload.id] = payload.playlist),
    SET_AUDIO_FEATURES: (state, audioFeatures) =>
      (state.audioFeatures = audioFeatures),
    SET_TOP_TRACKS: (state, tracks) => (state.topTracks = tracks),
    SET_TOP_ARTISTS: (state, artists) => (state.topArtists = artists),
    SET_SPOTIFY_ARTIST: (state, artist) => (state.spotifyArtist = artist),
    SET_SPOTIFY_TRACK: (state, track) => (state.spotifyTrack = track),
    SET_RECENT_TRACKS: (state, tracks) => (state.recentTracks = tracks),
  },
  actions: {
    spotifyOathLogin({ commit }) {
      axios.get(`${BASE_URL}${OATH_PATH}`).then((resp) => {
        if (resp.data.response === "SUCCESS") {
          // console.log(resp.data);
          commit("SET_OATH_URL", resp.data.url);
        }
      });
    },
    getProfile({ commit, getters }) {
      if (getters.spotifyUser !== null) {
        console.log("User already set!");
        return;
      }

      let params = new Object();

      params.ID = getters.spotifyId;
      params.Method = "GetProfile";

      let jsonData = JSON.stringify(params);

      axios({
        url: `${BASE_URL}${GET_PATH}`,
        method: "post",
        data: jsonData,
      }).then((res) => {
        console.log(res.data);
        commit("SET_SPOTIFY_USER", res.data);
      });
    },
    getUserPlaylists({ commit, getters }, { limit }) {
      if (getters.spotifyUserPlaylists.length > 0) {
        console.log("Playlists already set!");
        return;
      }
      let params = new Object();

      params.ID = getters.spotifyId;
      params.Method = "GetPlaylists";
      params.Args = {
        Limit: limit,
      };

      let jsonData = JSON.stringify(params);

      axios({
        url: `${BASE_URL}${GET_PATH}`,
        method: "post",
        data: jsonData,
      }).then((res) => {
        console.log(res.data);
        commit("SET_SPOTIFY_USER_PLAYLISTS", res.data.playlists);
      });
    },
    getPlaylistTracks({ commit, getters }, { id }) {
      if (getters.allPlaylistsWithTracks.includes(id)) {
        console.log("We have this playlist already!");
        commit("SET_CURRENT_PLAYLIST_TRACKS", getters.allPlaylistsTracks[id]);
      } else {
        let params = new Object();

        params.ID = getters.spotifyId;
        params.Method = "GetPlaylist";
        params.PlaylistId = id;
        params.Args = {
          Limit: 0,
        };

        let jsonData = JSON.stringify(params);

        axios({
          url: `${BASE_URL}${GET_PATH}`,
          method: "post",
          data: jsonData,
        }).then((res) => {
          console.log(res.data);
          commit("SET_CURRENT_PLAYLIST_TRACKS", res.data.playlist);
          commit("APPEND_PLAYLIST_IDS", id);
          commit("SET_PLAYLIST_WITH_TRACKS", {
            id: id,
            playlist: res.data.playlist,
          });
        });
      }
    },
    getAudioFeatures({ commit, getters }, { ids }) {
      let params = new Object();

      params.ID = getters.spotifyId;
      params.Method = "GetAudioFeatures";
      params.Args = {
        AudioFeatureIds: ids,
      };

      let jsonData = JSON.stringify(params);

      axios({
        url: `${BASE_URL}${GET_PATH}`,
        method: "post",
        data: jsonData,
      }).then((res) => {
        console.log(res.data);
        commit("SET_AUDIO_FEATURES", res.data.audioFeatures);
      });
    },
    getTopItems({ commit, getters }, { type }) {
      if (type === "tracks") {
        if (getters.topTracks !== null) {
          console.log("top tracks already set!");
          return;
        }
      } else {
        if (getters.topArtists !== null) {
          console.log("top artists already set!");
          return;
        }
      }
      let params = new Object();

      params.ID = getters.spotifyId;
      params.Method = "GetTopItems";
      params.Args = {
        Type: type,
      };

      let jsonData = JSON.stringify(params);

      axios({
        url: `${BASE_URL}${GET_PATH}`,
        method: "post",
        data: jsonData,
      }).then((res) => {
        console.log(res.data);
        if (res.data.type === "tracks") {
          commit("SET_TOP_TRACKS", res.data.tracks);
        } else if (res.data.type === "artists") {
          commit("SET_TOP_ARTISTS", res.data.artists);
        }
      });
    },
    getArtist({ commit, getters }, { id }) {
      let params = new Object();

      params.ID = getters.spotifyId;
      params.Method = "GetArtist";
      params.ArtistId = id;

      let jsonData = JSON.stringify(params);

      axios({
        url: `${BASE_URL}${GET_PATH}`,
        method: "post",
        data: jsonData,
      }).then((res) => {
        console.log(res.data);
        commit("SET_SPOTIFY_ARTIST", res.data.artist);
      });
    },
    getTrack({ commit, getters }, { id }) {
      let params = new Object();

      params.ID = getters.spotifyId;
      params.Method = "GetTrack";
      params.TrackId = id;

      let jsonData = JSON.stringify(params);

      axios({
        url: `${BASE_URL}${GET_PATH}`,
        method: "post",
        data: jsonData,
      }).then((res) => {
        console.log(res.data);
        commit("SET_SPOTIFY_TRACK", res.data.track);
      });
    },
    getRecentTracks({ commit, getters }) {
      if (getters.recentTracks !== null) {
        console.log("Already have recent tracks!");
        return;
      }

      let params = new Object();

      params.ID = getters.spotifyId;
      params.Method = "GetRecent";

      let jsonData = JSON.stringify(params);

      axios({
        url: `${BASE_URL}${GET_PATH}`,
        method: "post",
        data: jsonData,
      }).then((res) => {
        console.log(res.data);
        commit("SET_RECENT_TRACKS", res.data.tracks);
      });
    },
  },
  modules: {},
});
