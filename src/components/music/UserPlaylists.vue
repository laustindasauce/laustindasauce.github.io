<template>
  <v-container>
    <v-row class="mt-5" v-if="userPlaylists !== null">
      <v-col sm="12" md="5" lg="4">
        <user-playlists
          :userPlaylists="userPlaylists.playlists"
        ></user-playlists>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserPlaylists from "./helpers/UserPlaylists.vue";

export default {
  components: {
    UserPlaylists,
  },
  data() {
    return {
      loadingPlaylists: false,
      errorMessage: null,
    };
  },
  methods: {
    getPlaylists() {},
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    userPlaylists() {
      return this.$store.getters.spotifyUserPlaylists;
    },
  },
  mounted() {
    this.loadingPlaylists = true;
    this.$store.dispatch("getUserPlaylists", { limit: 50 });
  },
};
</script>

<style lang="scss" scoped></style>
