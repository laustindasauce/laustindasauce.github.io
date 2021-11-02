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
// const BASE_URL = "https://austinbspencer.com"
const OATH_PATH = "/go-api/spotify/get-oath-url";
const AWAIT_PATH = "/go-api/spotify/await";
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
    allPlaylistsTracks: null,
    currentPlaylistTracks: null,
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
    spotifyUserPlaylists: (state) => state.spotifyUserPlaylists,
    allPlaylistsWithTracks: (state) => state.allPlaylistsWithTracks,
    currentPlaylistTracks: (state) => state.currentPlaylistTracks,
  },
  mutations: {
    projectInfo(state, name) {
      state.currProject = state.projectInfo.find((proj) => {
        return proj.name === name;
      });
    },
    SET_OATH_URL: (state, url) => (state.oathUrl = url),
    SET_SPOTIFY_ID: (state, id) => (state.spotifyId = id),
    SET_SPOTIFY_USER_PLAYLISTS: (state, playlists) =>
      (state.spotifyUserPlaylists = playlists),
    SET_CURRENT_PLAYLIST_TRACKS: (state, tracks) =>
      (state.currentPlaylistTracks = tracks),
    APPEND_PLAYLIST_IDS: (state, id) => state.allPlaylistsWithTracks.push(id),
    SET_PLAYLIST_WITH_TRACKS: (state, id, info) =>
      (state.allPlaylistsTracks[id] = info),
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
    spotifyAwait({ commit }) {
      console.log("Waiting on login");
      axios.get(`${BASE_URL}${AWAIT_PATH}`).then((res) => {
        // console.log(res.data);
        commit("SET_SPOTIFY_ID", res.data.id);
      });
    },
    getUserPlaylists({ commit, getters }, { limit }) {
      console.log("Getting user playlists");
      let params = new Object();

      params.ID = getters.spotifyId;
      params.Method = "GetPlaylistsForUser";
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
        commit("SET_CURRENT_PLAYLIST_TRACKS", getters.allPlaylistsTracks[id]);
      } else {
        console.log("Getting user playlists");
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
            info: res.data.playlist,
          });
        });
      }
    },
  },
  modules: {},
});
