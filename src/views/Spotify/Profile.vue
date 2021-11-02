<template>
  <v-container>
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <h1>Profile</h1>
      <pre>{{ spotifyUser }}</pre>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";

export default {
  components: {
    Login,
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
    spotifyUser() {
      return this.$store.getters.spotifyUser;
    },
  },
  mounted() {
    this.$store.dispatch("getProfile");
  },
};
</script>
