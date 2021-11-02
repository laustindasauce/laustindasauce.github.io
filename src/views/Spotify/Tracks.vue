<template>
  <v-container>
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <h1>Top Tracks</h1>
      <pre>{{ topTracks }}</pre>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";

export default {
  components: {
    Login,
  },
  name: "Tracks",

  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getTopItems", { type: "tracks" });
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    topTracks() {
      return this.$store.getters.topTracks;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
