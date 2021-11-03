<template>
  <v-container class="mt-5">
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <h3>recommendations based on {{ playlist.name }}</h3>
      <br /><br />
      <div v-if="recommendedTracks !== null" class="mt-5">
        <div v-for="track in recommendedTracks" :key="track.id">
          <track-item :track="track" />
        </div>
      </div>
    </div>
    <!-- <pre>
      {{ recommendedTracks }}
    </pre> -->
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";
import TrackItem from "../../components/music/TrackItem.vue";
import { getTrackSeeds } from "../../utils";

export default {
  components: {
    Login,
    TrackItem,
  },
  name: "Recommendations",
  props: ["id"],
  data() {
    return {};
  },

  mounted() {
    const ids = getTrackSeeds(this.playlist.tracks.items);
    console.log(ids);
    if (ids.length > 0) {
      this.$store.dispatch("getRecommendedTracks", { ids: ids });
    }
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    playlist() {
      return this.$store.getters.currentPlaylistTracks;
    },
    recommendedTracks() {
      return this.$store.getters.recommendedTracks;
    },
  },
  methods: {},
  // watch: {
  //   recommendedTracks: function (val) {
  //     if (val.seeds) {
  //       console.log("Running watcher");
  //       let newIds = [];
  //       for (var i = 0; i < val.tracks.length; i++) {
  //         console.log(val.tracks[i]);
  //         newIds.push(val.tracks[i].id);
  //       }
  //       console.log(newIds);
  //       this.$store.dispatch("getTracks", {
  //         ids: newIds,
  //         type: "recommendations",
  //       });
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped></style>
