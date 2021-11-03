<template>
  <div>
    <v-card
      class="mx-auto card-link"
      @click="goToTrack(track.id)"
      color="rgb(0, 0, 0, 0.1)"
      tile
    >
      <v-row v-if="!small" align="center">
        <v-col cols="auto" sm="2" md="1" lg="1">
          <v-img
            class="image-link"
            max-height="75"
            max-width="75"
            :src="getImage()"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="8" md="9">
          <div>
            <h4 class="link mb-2" @click="goToTrack(track.id)">
              {{ track.name }}
            </h4>
          </div>
          <div>
            <h5 class="subtitle secondary--text">
              {{ formatArtists(track.artists) }}&emsp;•&emsp;{{
                track.album.name
              }}
            </h5>
          </div>
        </v-col>
        <v-col class="text-right" cols="1">
          {{ formatDuration(track.duration_ms) }}
        </v-col>
      </v-row>
      <v-row v-else align="center">
        <v-col cols="2">
          <v-img
            class="image-link"
            max-height="75"
            max-width="75"
            :src="getImage()"
          ></v-img>
        </v-col>
        <v-col cols="8">
          <div>
            <h4 class="link mb-2" @click="goToTrack(track.id)">
              {{ track.name }}
            </h4>
          </div>
          <div>
            <h5 class="subtitle secondary--text">
              {{ formatArtists(track.artists) }}&emsp;•&emsp;{{
                track.album.name
              }}
            </h5>
          </div>
        </v-col>
        <v-col class="text-right" cols="2">
          {{ formatDuration(track.duration_ms) }}
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TrackItem",
  props: ["track", "small"],
  data() {
    return {};
  },

  mounted() {},

  methods: {
    getImage() {
      return this.track.album.images[2].url;
    },
    //Format milliseconds into MM:SS
    formatDuration(millis) {
      const minutes = Math.floor(millis / 60000);
      const seconds = ((millis % 60000) / 1000).toFixed(0);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
    formatArtists(artists) {
      let artistStr = "";
      for (var i = 0; i < artists.length; i++) {
        artistStr = artistStr + artists[i].name;
        artistStr = artistStr + (i === artists.length - 1 ? "" : ", ");
      }
      return artistStr;
    },
    goToTrack(id) {
      this.$router.push({ name: "Single Track", params: { id: id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.link:hover {
  text-decoration: underline;
  cursor: pointer;
}
.image-link:hover {
  cursor: pointer;
  opacity: 0.3;
  transition: 0.3s;
}
</style>
