<template>
  <v-container>
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <h1 class="mt-5 mb-5">Your Playlists</h1>
      <v-row class="mt-5" v-if="userPlaylists !== null">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="playlist in userPlaylists"
          :key="playlist.id"
        >
          <playlist-card :playlist="playlist"></playlist-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";
import PlaylistCard from "../../components/music/PlaylistCard.vue";

export default {
  components: {
    Login,
    PlaylistCard,
  },
  name: "Playlists",

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
    if (this.spotifyId === null) {
      return;
    }
    this.$store.dispatch("getUserPlaylists", { limit: 50 });
  },
};
</script>

<style lang="scss" scoped></style>
