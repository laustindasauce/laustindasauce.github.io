<template>
  <v-container>
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <h1>Artists</h1>
      <pre>{{ topArtists }}</pre>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";

export default {
  components: {
    Login,
  },
  name: "Artists",

  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getTopItems", { type: "artists" });
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    topArtists() {
      return this.$store.getters.topArtists;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
