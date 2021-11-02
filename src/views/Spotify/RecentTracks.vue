<template>
  <v-container>
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <h1>Recent Tracks</h1>
      <pre>{{ recentTracks }}</pre>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";

export default {
  components: {
    Login,
  },
  name: "RecentTracks",

  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getRecentTracks");
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    recentTracks() {
      return this.$store.getters.recentTracks;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
