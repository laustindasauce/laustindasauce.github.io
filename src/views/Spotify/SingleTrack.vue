<template>
  <v-container class="mt-5">
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else-if="track !== null">
      <Track :track="track" />
      <audio-table :popularity="track.popularity" />
      <audio-chart :items="trackToArray" />
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";
import Track from "../../components/music/Track.vue";
import AudioTable from "../../components/music/AudioTable.vue";
import AudioChart from "../../components/music/AudioChart.vue";

export default {
  components: {
    AudioChart,
    AudioTable,
    Login,
    Track,
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
    trackToArray() {
      return [{ track: this.$store.getters.spotifyTrack }];
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
