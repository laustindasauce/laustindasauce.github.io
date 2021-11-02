<template>
  <v-container>
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <h1>Single Artist</h1>
      <pre>{{ artist }}</pre>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";

export default {
  components: {
    Login,
  },
  name: "SingleArtist",
  props: ["id"],
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getArtist", { id: this.id });
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    artist() {
      return this.$store.getters.spotifyArtist;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
