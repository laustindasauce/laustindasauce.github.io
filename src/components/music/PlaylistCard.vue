<template>
  <v-card class="mx-auto" color="rgb(0, 0, 0, 0.1)" max-width="344">
    <v-img
      class="image-link"
      @click="goToPlaylist(playlist.id)"
      :src="getImage()"
    ></v-img>

    <v-card-title>
      <h3 class="link" @click="goToPlaylist(playlist.id)">
        {{ playlist.name }}
      </h3></v-card-title
    >

    <v-card-subtitle class="mt-1">
      {{ playlist.tracks.total }} tracks</v-card-subtitle
    >

    <v-card-actions>
      <v-btn color="orange lighten-2" @click="goToPlaylist(playlist.id)" text>
        More Info
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["playlist"],
  data: () => ({
    show: false,
  }),
  methods: {
    getImage() {
      if (this.playlist.images.length > 0) {
        return this.playlist.images[0].url;
      }
      return "default.png";
    },
    goToPlaylist(id) {
      this.$router.push({ name: "Single Playlist", params: { id: id } });
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
