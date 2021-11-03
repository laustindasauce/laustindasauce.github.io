<template>
  <div>
    <v-row class="mb-5 mt-5" justify="center">
      <v-img
        lazy-src="user.png"
        max-height="150"
        max-width="150"
        class="avatar"
        :src="getImg()"
      ></v-img>
    </v-row>
    <v-row class="mt-5" justify="center">
      <h1>{{ profile.display_name }}</h1>
    </v-row>
    <v-row class="mt-5 text-center" justify="center">
      <v-col cols="12" sm="3" md="2" lg="1">
        <div>
          <h3 class="spotifyGreen--text">{{ profile.followers.total }}</h3>
        </div>
        <div>
          <h4 class="secondary--text">followers</h4>
        </div>
      </v-col>
      <v-col cols="12" sm="3" md="2" lg="1">
        <div>
          <h3 class="spotifyGreen--text">{{ profile.email }}</h3>
        </div>
        <div>
          <h4 class="secondary--text">following</h4>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="3"
        md="2"
        lg="1"
        class="link"
        @click="goToPlaylists()"
      >
        <div>
          <h3 class="spotifyGreen--text">{{ numPlaylists || 0 }}</h3>
        </div>
        <div>
          <h4 class="secondary--text playlists">playlists</h4>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: ["profile", "numPlaylists"],
  data() {
    return {};
  },

  mounted() {},

  methods: {
    getImg() {
      if (this.profile.images.length > 0) {
        return this.profile.images[0].url;
      }
      return "user.png";
    },
    goToPlaylists() {
      this.$router.push({ name: "Playlists" });
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 100%;
}
.link:hover {
  cursor: pointer;
  .playlists {
    text-decoration: underline;
  }
}
</style>
