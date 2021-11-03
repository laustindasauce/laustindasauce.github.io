<template>
  <div class="mx-auto text-center" color="rgb(0, 0, 0, 0.1)" max-width="344">
    <v-img
      class="image-link"
      @click="goToPlaylist(playlist.id)"
      :src="getImage()"
    ></v-img>
    <h3 class="link mt-5 mb-2 text-center" @click="goToPlaylist(playlist.id)">
      {{ playlist.name }}
    </h3>
    <h4 class="mb-2 text-center secondary--text">
      by {{ playlist.owner.display_name }}
    </h4>
    <small>{{ playlist.tracks.total }} tracks</small>
  </div>
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
