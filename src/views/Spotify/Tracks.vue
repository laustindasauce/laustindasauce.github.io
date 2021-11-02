<template>
  <v-container>
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <h1>Top Tracks</h1>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";

export default {
  components: {
    Login,
  },
  name: "Tracks",

  data() {
    return {};
  },

  mounted() {},
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
