<template>
  <v-container>
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div class="mt-5" v-else>
      <div v-if="playlist !== null && playlist !== undefined">
        <playlist-formatter :playlist="playlist" />
      </div>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";
import PlaylistFormatter from "../../components/music/PlaylistFormatter.vue";

export default {
  components: {
    Login,
    PlaylistFormatter,
  },
  name: "SinglePlaylist",
  props: ["id"],
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getPlaylistTracks", { id: this.id });
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    playlist() {
      return this.$store.getters.currentPlaylistTracks;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
