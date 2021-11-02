<template>
  <v-container>
    <v-row>
      <h1>You've been successfully logged in :)</h1>
      <h3>You will be redirected to the profile page momentarily</h3>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoggedIn",
  props: ["id"],
  data() {
    return {};
  },

  mounted() {
    console.log(this.id);
    this.$store.commit("SET_SPOTIFY_ID", this.id);
    this.$router.push("/spotify");
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
