<template>
  <v-container>
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <h1>Single Track</h1>
      <pre>{{ track }}</pre>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";

export default {
  components: {
    Login,
  },
  name: "SingleTrack",
  props: ["id"],
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getTrack", { id: this.id });
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    track() {
      return this.$store.getters.spotifyTrack;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
