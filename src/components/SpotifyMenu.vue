<template>
  <v-navigation-drawer
    v-model="drawer"
    color="black"
    mini-variant
    floating
    permanent
    app
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img class="image-link" @click="goToHome" src="spotify.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>Spotify Profile</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <div class="third">
      <v-list-item
        color="spotifyGreen"
        v-for="item in spotifyActions"
        :key="item.title"
        :to="item.to"
        exact-path
        link
      >
        <v-list-item-icon>
          <v-icon color="white">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SpotifyMenu",

  data() {
    return {
      drawer: true,
      mini: true,
    };
  },
  computed: {
    spotifyActions() {
      return this.$store.getters.spotifyActions;
    },
  },

  mounted() {},

  methods: {
    goToHome() {
      this.$router.push("/spotify");
    },
  },
};
</script>

<style lang="scss" scoped>
.image-link:hover {
  cursor: pointer;
}
</style>
