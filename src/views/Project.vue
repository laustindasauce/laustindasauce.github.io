<template>
  <div>
    <v-container>
      <v-row
        v-if="projInfo === null || projInfo === undefined"
        align-content="center"
        justify="center"
        class="pt-5 fill-height"
      >
        <v-col cols="6">
          <v-progress-linear
            indeterminate
            color="yellow darken-2"
          ></v-progress-linear>
        </v-col>
        {{ getProject() }}
      </v-row>
      <v-row v-else-if="projInfo.name !== name">
        {{ getProject() }}
      </v-row>
      <v-row
        justify="center"
        v-else-if="projInfo.links.private"
      >
        <v-col
          sm="10"
          md="6"
        >
          <h1 style="text-align: center">{{ projInfo.title }}</h1>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        v-if="projInfo !== null && projInfo !== undefined && projInfo.name === name && !projInfo.links.private"
        class="pa-6"
      >
        <v-col
          sm="10"
          md="6"
        >
          <v-card>
            <v-img :src="`${loadRepoStats(projInfo.links.repoShort, projInfo.links.user || 'austinbspencer')}`">

            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col
          sm="10"
          md="8"
        >
          <v-card class="pa-6">

            <div v-if="name === 'abspen-1'">
              <abspen1 />
            </div>
            <div v-if="name === 'go-trading-algo'">
              <alpaca-go />
            </div>
            <div v-if="name === 'alpaca-python'">
              <alpaca-python />
            </div>
            <div v-if="name === 'attendance-gui'">
              <attendance />
            </div>
            <div v-if="name === 'bday-email'">
              <bday-email />
            </div>
            <div v-if="name === 'bots'">
              <bots />
            </div>
            <div v-if="name === 'capital-tracker'">
              <cap-track />
            </div>
            <div v-if="name === 'coffee-shop'">
              <coffee-shop />
            </div>
            <div v-if="name === 'discord-bot'">
              <discord-bot />
            </div>
            <div v-if="name === 'go-encode'">
              <encode />
            </div>
            <div v-if="name === 'go-backend'">
              <go-backend />
            </div>
            <div v-if="name === 'encode-decode'">
              <encode-decode />
            </div>
            <div v-if="name === 'lexical-analyzer'">
              <lexical-analyzer />
            </div>
            <div v-if="name === 'twitter-bot'">
              <twitter-bot />
            </div>
            <v-divider></v-divider>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-chip
                    class=""
                    color="primary"
                    v-if="!projInfo.links.private"
                    outlined
                    pill
                    :href="projInfo.links.repo"
                    role="link"
                  >
                    <v-icon>
                      mdi-github
                    </v-icon>
                  </v-chip>
                </v-col>
                <v-col cols="6">
                  <v-chip
                    class="float-right"
                    color="primary"
                    v-if="projInfo.links.live !== null"
                    outlined
                    pill
                    :href="projInfo.links.live"
                    role="link"
                  >
                    Live
                    <v-icon right>
                      mdi-web
                    </v-icon>
                  </v-chip>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Abspen1 from "../components/README/Abspen1.vue";
import AlpacaGo from "../components/README/AlpacaGo.vue";
import AlpacaPython from "../components/README/AlpacaPython.vue";
import Attendance from "../components/README/Attendance.vue";
import BdayEmail from "../components/README/BdayEmail.vue";
import Bots from "../components/README/Bots.vue";
import Captrack from "../components/README/Captrack.vue";
import CoffeeShop from "../components/README/CoffeeShop.vue";
import DiscordBot from "../components/README/DiscordBot.vue";
import Encode from "../components/README/Encode.vue";
import EncodeDecode from "../components/README/EncodeDecode.vue";
import GoBackend from "../components/README/GoBackend.vue";
import LexicalAnalyzer from "../components/README/LexicalAnalyzer.vue";
import TwitBotMD from "../components/README/TwitterBot.vue";

export default {
  props: {
    name: String,
  },
  components: {
    abspen1: Abspen1,
    "alpaca-go": AlpacaGo,
    "alpaca-python": AlpacaPython,
    attendance: Attendance,
    "bday-email": BdayEmail,
    bots: Bots,
    "cap-track": Captrack,
    "coffee-shop": CoffeeShop,
    "discord-bot": DiscordBot,
    encode: Encode,
    "encode-decode": EncodeDecode,
    "go-backend": GoBackend,
    "lexical-analyzer": LexicalAnalyzer,
    "twitter-bot": TwitBotMD,
  },
  data: () => ({}),
  methods: {
    getProject() {
      this.$store.commit("projectInfo", this.name);
    },
    loadRepoStats(repoPath, user) {
      if (this.$vuetify.theme.dark) {
        return `https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${repoPath}&bg_color=000&title_color=FF7028&text_color=fff`;
      }
      return `https://github-readme-stats.vercel.app/api/pin/?username=${user}&repo=${repoPath}&theme=default_repocard&title_color=FF7028`;
    },
  },
  computed: {
    projInfo() {
      return this.$store.getters.currentProject;
    },
  },
  mounted() {
    this.getProject();
  },
};
</script>

<style scoped>
</style>