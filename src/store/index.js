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

// const BASE_URL = "http://localhost:8558";
const BASE_URL = "https://austinbspencer.com";
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
    audioAnalysis: null,
    topTracksLong: null,
    topTracks: null,
    topTracksShort: null,
    topArtistsLong: null,
    topArtists: null,
    topArtistsShort: null,
    spotifyArtist: null,
    spotifyTrack: null,
    recentTracks: null,
    recentTracksConv: null,
    totalPlaylists: null,
    recommendedTracks: null,
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
    audioAnalysis: (state) => state.audioAnalysis,
    topTracksLong: (state) => state.topTracksLong,
    topTracks: (state) => state.topTracks,
    topTracksShort: (state) => state.topTracksShort,
    topArtistsLong: (state) => state.topArtistsLong,
    topArtists: (state) => state.topArtists,
    topArtistsShort: (state) => state.topArtistsShort,
    spotifyArtist: (state) => state.spotifyArtist,
    spotifyTrack: (state) => state.spotifyTrack,
    recentTracks: (state) => state.recentTracks,
    recentTracksConv: (state) => state.recentTracksConv,
    totalPlaylists: (state) => state.totalPlaylists,
    recommendedTracks: (state) => state.recommendedTracks,
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
    SET_AUDIO_ANALYSIS: (state, audioAnalysis) =>
      (state.audioAnalysis = audioAnalysis),
    SET_TOP_TRACKS_LONG: (state, tracks) => (state.topTracksLong = tracks),
    SET_TOP_TRACKS: (state, tracks) => (state.topTracks = tracks),
    SET_TOP_TRACKS_SHORT: (state, tracks) => (state.topTracksShort = tracks),
    SET_TOP_ARTISTS_LONG: (state, artists) => (state.topArtistsLong = artists),
    SET_TOP_ARTISTS: (state, artists) => (state.topArtists = artists),
    SET_TOP_ARTISTS_SHORT: (state, artists) =>
      (state.topArtistsShort = artists),
    SET_SPOTIFY_ARTIST: (state, artist) => (state.spotifyArtist = artist),
    SET_SPOTIFY_TRACK: (state, track) => (state.spotifyTrack = track),
    SET_RECENT_TRACKS: (state, tracks) => (state.recentTracks = tracks),
    SET_RECENT_TRACKS_CONV: (state, tracks) =>
      (state.recentTracksConv = tracks),
    SET_TOTAL_PLAYLISTS: (state, total) => (state.totalPlaylists = total),
    SET_RECOMMENDED_TRACKS: (state, tracks) =>
      (state.recommendedTracks = tracks),
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
        commit("SET_TOTAL_PLAYLISTS", res.data.total);
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
    getAudioAnalysis({ commit, getters }, { id }) {
      let params = new Object();

      params.ID = getters.spotifyId;
      params.Method = "GetAudioAnalysis";
      params.TrackId = id;

      let jsonData = JSON.stringify(params);

      axios({
        url: `${BASE_URL}${GET_PATH}`,
        method: "post",
        data: jsonData,
      }).then((res) => {
        console.log(res.data);
        commit("SET_AUDIO_ANALYSIS", res.data.audioAnalysis);
      });
    },
    getTopItems({ commit, getters }, { type, range, limit }) {
      if (type === "tracks") {
        if (range === null || range === undefined || range === "medium_term") {
          if (getters.topTracks !== null) {
            console.log("top tracks already set!");
            return;
          }
        } else if (range === "long_term") {
          if (getters.topTracksLong !== null) {
            console.log("top tracks long already set!");
            return;
          }
        } else {
          if (getters.topTracksShort !== null) {
            console.log("top tracks short already set!");
            return;
          }
        }
      } else {
        if (range === null || range === undefined || range === "medium_term") {
          if (getters.topArtists !== null) {
            console.log("top artists already set!");
            return;
          }
        } else if (range === "long_term") {
          if (getters.topArtistsLong !== null) {
            console.log("top artists long already set!");
            return;
          }
        } else {
          if (getters.topArtistsShort !== null) {
            console.log("top artists short already set!");
            return;
          }
        }
      }
      let params = new Object();

      params.ID = getters.spotifyId;
      params.Method = "GetTopItems";
      params.Args = {
        Type: type,
        Timerange: range || "medium_term",
        Limit: limit || 50,
      };

      let jsonData = JSON.stringify(params);

      axios({
        url: `${BASE_URL}${GET_PATH}`,
        method: "post",
        data: jsonData,
      }).then((res) => {
        console.log(res.data);

        if (res.data.range === "long_term") {
          if (res.data.type === "tracks") {
            commit("SET_TOP_TRACKS_LONG", res.data.tracks);
          } else if (res.data.type === "artists") {
            commit("SET_TOP_ARTISTS_LONG", res.data.artists);
          }
        } else if (res.data.range === "medium_term") {
          if (res.data.type === "tracks") {
            commit("SET_TOP_TRACKS", res.data.tracks);
          } else if (res.data.type === "artists") {
            commit("SET_TOP_ARTISTS", res.data.artists);
          }
        } else {
          if (res.data.type === "tracks") {
            commit("SET_TOP_TRACKS_SHORT", res.data.tracks);
          } else if (res.data.type === "artists") {
            commit("SET_TOP_ARTISTS_SHORT", res.data.artists);
          }
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
    getTracks({ commit, getters }, { ids, type }) {
      if (getters.recentTracksConv !== null) {
        console.log("Already have recent tracks converted!");
        return;
      }
      let params = new Object();

      params.ID = getters.spotifyId;
      params.Method = "GetTracks";
      params.TrackIds = ids;

      let jsonData = JSON.stringify(params);

      axios({
        url: `${BASE_URL}${GET_PATH}`,
        method: "post",
        data: jsonData,
      }).then((res) => {
        console.log(res.data);
        if (type === "conv") {
          commit("SET_RECENT_TRACKS_CONV", res.data.tracks);
        } else if (type === "recommendations") {
          commit("SET_RECOMMENDED_TRACKS", res.data.tracks);
        }
      });
    },
    getRecommendedTracks({ commit, getters, dispatch }, { ids }) {
      let params = new Object();

      params.ID = getters.spotifyId;
      params.Method = "GetRecommendations";
      params.Args = {
        TrackSeeds: ids,
      };

      let jsonData = JSON.stringify(params);

      axios({
        url: `${BASE_URL}${GET_PATH}`,
        method: "post",
        data: jsonData,
      }).then((res) => {
        console.log(res.data);
        if (res.data.response === "SUCCESS") {
          let newIds = [];
          for (var i = 0; i < res.data.recommendations.tracks.length; i++) {
            newIds.push(res.data.recommendations.tracks[i].id);
          }
          dispatch("getTracks", { ids: newIds, type: "recommendations" });
          // commit("SET_RECOMMENDED_TRACKS", res.data.recommendations);
        }
      });
    },
  },
  modules: {},
});
