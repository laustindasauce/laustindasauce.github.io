<template>
  <v-container class="mt-5">
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else-if="spotifyUser !== null">
      <user-profile
        class="mb-5"
        :profile="spotifyUser"
        :numPlaylists="totalPlaylists"
      ></user-profile>
      <br />
      <br />
      <v-row class="mb-5">
        <v-col v-if="topTracks !== null" cols="12" sm="6" md="3" lg="3">
          <h3>your top songs</h3>
        </v-col>
        <v-col
          class="text-right"
          v-if="topTracks !== null"
          @click="goToTopTracks()"
          cols="12"
          sm="6"
          md="3"
          lg="3"
        >
          <v-btn right>See More</v-btn>
        </v-col>
        <v-col v-if="topArtists !== null" cols="12" sm="6" md="3" lg="3">
          <h3>your top artists</h3>
        </v-col>
        <v-col
          class="text-right"
          v-if="topArtists !== null"
          @click="goToTopArtists()"
          cols="12"
          sm="6"
          md="3"
          lg="3"
        >
          <v-btn>See More</v-btn>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col v-if="topTracks !== null" cols="12" sm="12" md="6" lg="6">
          <div v-for="(track, i) in topTracks.items" :key="track.id">
            <track-item v-if="i < 10" :track="track" :small="true" />
          </div>
        </v-col>
        <v-col v-if="topArtists !== null" cols="12" sm="12" md="6" lg="6">
          <div v-for="(track, i) in topTracks.items">
            <track-item v-if="i < 10" :track="track" />
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";
import UserProfile from "../../components/music/UserProfile.vue";
import TrackItem from "../../components/music/TrackItem.vue";

export default {
  components: {
    Login,
    TrackItem,
    UserProfile,
  },
  props: ["name"],
  data() {
    return {};
  },
  methods: {
    goToTopTracks() {
      this.$router.push({ name: "Top Tracks" });
    },
    goToTopArtists() {
      this.$router.push({ name: "Top Artists" });
    },
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    spotifyUser() {
      return this.$store.getters.spotifyUser;
    },
    totalPlaylists() {
      return this.$store.getters.totalPlaylists;
    },
    topArtists() {
      return this.$store.getters.topArtists;
    },
    topTracks() {
      return this.$store.getters.topTracks;
    },
  },
  mounted() {
    this.$store.dispatch("getProfile");
    this.$store.dispatch("getUserPlaylists", { limit: 50 });
    this.$store.dispatch("getTopItems", { type: "artists" });
    this.$store.dispatch("getTopItems", { type: "tracks" });
  },
};
</script>

<style lang="scss" scoped></style>
