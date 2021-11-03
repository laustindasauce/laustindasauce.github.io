<template>
  <v-container>
    <v-row
      justify="center"
      align="center"
      class="text-center login"
      v-if="spotifyId === null"
    >
      <v-col md="4" class="center" v-if="url !== null">
        <div>
          <h1 class="mb-5">go-spotify</h1>
        </div>
        <v-btn
          v-show="spotifyId === null"
          :loading="loadingLogin"
          :disabled="loadingLogin"
          x-large
          rounded
          color="spotifyGreen"
          class="ma-2 white--text"
          @click="goToLoginPage"
        >
          Login
          <v-icon dark> mdi-spotify </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!-- <v-row v-else>
      <h1>You have successfully logged in!</h1>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loadingPlaylists: false,
      loadingLogin: false,
      errorMessage: null,
    };
  },
  methods: {
    goToLoginPage() {
      this.loadingLogin = true;
      location.href = this.url;
    },
  },
  computed: {
    url() {
      return this.$store.getters.oathUrl;
    },
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
  },
  mounted() {
    this.$store.dispatch("spotifyOathLogin");
  },
};
</script>

<style lang="scss" scoped></style>
