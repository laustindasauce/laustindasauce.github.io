<template>
  <v-container>
    <v-row>
      <v-col cols="auto">
        <v-img
          class="image-link"
          max-height="300"
          max-width="300"
          :src="getImage()"
        ></v-img>
      </v-col>
      <v-col cols="auto">
        <div class="mb-3">
          <h1>{{ track.name }}</h1>
        </div>
        <div class="mb-2">
          <h3 class="secondary--text">{{ formatArtists(track.artists) }}</h3>
        </div>
        <div class="secondary--text mb-3">
          {{ track.album.name }}
        </div>
        <div>
          <v-btn
            rounded
            color="spotifyGreen"
            class="ma-2 white--text"
            @click="goToSpotify"
          >
            Play On Spotify
            <v-icon dark> mdi-spotify </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Track",
  props: ["track"],
  data() {
    return {};
  },

  mounted() {},

  methods: {
    getImage() {
      return this.track.album.images[0].url;
    },
    formatArtists(artists) {
      let artistStr = "";
      for (var i = 0; i < artists.length; i++) {
        artistStr = artistStr + artists[i].name;
        artistStr = artistStr + (i === artists.length - 1 ? "" : ", ");
      }
      return artistStr;
    },
    formatDuration(millis) {
      const minutes = Math.floor(millis / 60000);
      const seconds = ((millis % 60000) / 1000).toFixed(0);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
    goToSpotify() {
      window.open(this.track.external_urls.spotify, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped></style>
