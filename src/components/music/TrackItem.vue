<template>
  <div>
    <v-card
      class="mx-auto card-link"
      @click="goToTrack(track.id)"
      color="rgb(0, 0, 0, 0.1)"
      tile
    >
      <v-row>
        <v-col cols="2">
          <v-img class="image-link" :src="getImage()"></v-img>
        </v-col>
        <v-col cols="9">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>
                <h3 class="link" @click="goToTrack(track.id)">
                  {{ track.name }}
                </h3></v-list-item-title
              >
              <v-list-item-subtitle
                >{{ formatArtists(track.artists) }}&emsp;•&emsp;{{
                  track.album.name
                }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="1">
          {{ formatDuration(track.duration_ms) }}
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TrackItem",
  props: ["track"],
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
