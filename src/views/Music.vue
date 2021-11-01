<template>
  <div v-if="name === 'login'">
    <login />
  </div>
  <div v-else-if="name === 'user-playlists'">
    <user-playlists />
  </div>
</template>

<script>
import Login from "../components/music/Login.vue";
import UserPlaylists from "../components/music/UserPlaylists.vue";

export default {
  components: {
    Login,
    UserPlaylists,
  },
  props: ["name"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
