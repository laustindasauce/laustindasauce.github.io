<template>
  <v-card class="mx-auto" color="rgb(0, 0, 0, 0.1)" max-width="344">
    <v-img :src="getImage()"></v-img>

    <v-card-title> {{ playlist.name }} </v-card-title>

    <v-card-subtitle> {{ playlist.tracks.total }} tracks</v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> More Info </v-btn>
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
  },
};
</script>

<style lang="scss" scoped></style>
