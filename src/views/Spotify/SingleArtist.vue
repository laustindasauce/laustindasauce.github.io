<template>
  <v-container>
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <h1>Single Artist</h1>
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

  data() {
    return {};
  },

  mounted() {},
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
