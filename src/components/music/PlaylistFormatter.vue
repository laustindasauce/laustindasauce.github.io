<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="4" class="text-center">
        <playlist-card :playlist="playlist" />
        <audio-chart
          class="mt-3"
          :items="playlist.tracks.items"
          :horizontal="true"
        />
      </v-col>
      <v-col cols="12" md="8">
        <div v-for="items in playlist.tracks.items">
          <track-item :track="items.track" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PlaylistCard from "./PlaylistCard.vue";
import TrackItem from "./TrackItem.vue";
import AudioChart from "./AudioChart.vue";

export default {
  components: {
    AudioChart,
    PlaylistCard,
    TrackItem,
  },
  name: "SinglePlaylist",
  props: ["playlist"],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
