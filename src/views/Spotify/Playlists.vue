<template>
  <v-container>
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <h1>Playlists</h1>
      <v-row class="mt-5" v-if="userPlaylists !== null">
        <v-col sm="6" md="5" lg="4">
          <user-playlists
            :userPlaylists="userPlaylists.playlists"
          ></user-playlists>
        </v-col>
        <v-col sm="6" md="7" lg="8"> </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";
import UserPlaylists from "../../components/music/helpers/UserPlaylists.vue";

export default {
  components: {
    Login,
    UserPlaylists,
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
    this.loadingPlaylists = true;
    this.$store.dispatch("getUserPlaylists", { limit: 50 });
  },
};
</script>

<style lang="scss" scoped></style>
