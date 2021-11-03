<template>
  <v-container class="mt-5">
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <h3>your recent tracks</h3>
      <br /><br />
      <div v-if="recentTracksConv !== null" class="mt-5">
        <div v-for="track in recentTracksConv" :key="track.id">
          <track-item :track="track" />
        </div>
      </div>
      <!-- <pre>{{ recentTracksConv }}</pre> -->
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";
import TrackItem from "../../components/music/TrackItem.vue";

export default {
  components: {
    Login,
    TrackItem,
  },
  name: "RecentTracks",

  data() {
    return {};
  },

  mounted() {
    if (this.spotifyId === null) {
      return;
    }
    let ids = [];
    for (var i = 0; i < this.recentTracks.length; i++) {
      ids.push(this.recentTracks[i].track.id);
    }
    this.$store.dispatch("getTracks", { ids: ids, type: "conv" });
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    recentTracks() {
      return this.$store.getters.recentTracks;
    },
    recentTracksConv() {
      return this.$store.getters.recentTracksConv;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
