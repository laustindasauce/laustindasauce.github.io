<template>
  <div>
    <v-row class="mb-5 mt-5" justify="center">
      <v-img
        lazy-src="user.png"
        max-height="200"
        max-width="200"
        class="avatar"
        @click="goToInternalLink(artist.id)"
        :src="getImg()"
      ></v-img>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <h4
          class="link"
          @click="goToExternalLink(artist.external_urls.spotify)"
        >
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
