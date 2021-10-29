import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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

export default new Vuex.Store({
  state: {
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
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
    links: [
      {
        title: "email",
        icon: "mdi-email-outline",
        url: "mailto:me@austinbspencer.com",
      },
      {
        title: "github",
        icon: "mdi-github",
        url: "https://github.com/austinbspencer",
      },
      {
        title: "linkedIn",
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/in/austinbspencer",
      },
      {
        title: "facebook",
        icon: "mdi-facebook",
        url: "https://www.facebook.com/austin.spencer.129/",
      },
      {
        title: "instagram",
        icon: "mdi-instagram",
        url: "https://www.instagram.com/austinspencer/",
      },
      {
        title: "twitter",
        icon: "mdi-twitter",
        url: "https://twitter.com/austinbspencer",
      },
    ],
    work: [
      {
        company: "USAA",
        title: "Data Engineer Intern",
        roles: [
          "Learn cloud using Snowflake and AWS as well as SQL and Informatica",
          "Work closely with business engagement using agile to run our projects",
          "Join daily stand ups and be given stories for a specific delivery",
        ],
        color: "#0A3C61",
        url: "https://www.usaa.com/",
        image: "usaa.jpeg",
        dates: "May 2021 - Aug 2021",
      },
      {
        company: "Salt River Project",
        title: "Solutions Center Intern",
        roles: [
          "Provide phone/chat assistance to internal SRP clients with varying degrees of technical knowledge",
          "Provide excellent customer service demonstrating patience while effectively dealing with client problems",
          "Perform problem-solving over the phone or through chat and determine appropriate course of problem escalation as required, while ensuring detailed written documentation",
        ],
        color: "#004886",
        url: "https://www.srpnet.com/",
        image: "srp.png",
        dates: "Nov 2020 - Apr 2021",
      },
    ],
  },
  getters: {
    currentItems(state) {
      return state.items;
    },
    projects(state) {
      return state.projects;
    },
    projectInfo(state) {
      return state.projectInfo;
    },
    currentProject(state) {
      return state.currProject;
    },
    links(state) {
      return state.links;
    },
    work(state) {
      return state.work;
    },
    colors(state) {
      return state.colors;
    },
  },
  mutations: {
    projectInfo(state, name) {
      state.currProject = state.projectInfo.find((proj) => {
        return proj.name === name;
      });
    },
  },
  actions: {},
  modules: {},
});
