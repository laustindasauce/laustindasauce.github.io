<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="4" class="text-center">
        <playlist-card :playlist="playlist" />
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

export default {
  components: {
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
