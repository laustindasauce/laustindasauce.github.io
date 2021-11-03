<template>
  <div>
    <v-row @click="goToInternalLink(artist.id)" class="row-link" align="center">
      <v-col cols="2">
        <v-img
          class="avatar"
          max-height="75"
          max-width="75"
          :src="getImg()"
        ></v-img>
      </v-col>
      <v-col cols="10">
        <h4 class="link mb-2">
          {{ artist.name }}
        </h4>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ArtistItem",
  props: ["artist"],
  data() {
    return {};
  },

  mounted() {},

  methods: {
    getImg() {
      return this.artist.images[2].url;
    },
    goToExternalLink(link) {
      window.open(link, "_blank");
    },
    goToInternalLink(id) {
      this.$router.push({ name: "Single Artist", params: { id: id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 100%;
  &:hover {
    cursor: pointer;
    opacity: 0.3;
    transition: 0.3s;
  }
}
.link:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
