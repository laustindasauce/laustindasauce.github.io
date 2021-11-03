<template>
  <v-container class="mt-5">
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <v-row>
        <v-col class="text-left">
          <h1>top tracks</h1>
        </v-col>
        <v-col class="text-right">
          <v-row>
            <v-col>
              <v-btn
                @click="setNewTracks('long_term')"
                :color="checkColor(longTerm)"
                text
                >all time</v-btn
              >
            </v-col>
            <v-col>
              <v-btn
                @click="setNewTracks('medium_term')"
                :color="checkColor(mediumTerm)"
                text
                >last 6 months</v-btn
              >
            </v-col>
            <v-col
              ><v-btn
                @click="setNewTracks('short_term')"
                :color="checkColor(shortTerm)"
                text
                >last 4 weeks</v-btn
              ></v-col
            >
          </v-row>
        </v-col>
      </v-row>
      <br /><br /><br />
      <div v-if="topTracks !== null">
        <div v-for="track in currentTracks" :key="track.id">
          <track-item :track="track" />
        </div>
      </div>
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
  name: "Tracks",

  data() {
    return {
      longTerm: false,
      mediumTerm: true,
      shortTerm: false,
    };
  },

  mounted() {
    this.$store.dispatch("getTopItems", { type: "tracks", limit: 50 });
    this.$store.dispatch("getTopItems", {
      type: "tracks",
      range: "long_term",
      limit: 50,
    });
    this.$store.dispatch("getTopItems", {
      type: "tracks",
      range: "short_term",
      limit: 50,
    });
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    topTracks() {
      return this.$store.getters.topTracks;
    },
    topTracksLong() {
      return this.$store.getters.topTracksLong;
    },
    topTracksShort() {
      return this.$store.getters.topTracksShort;
    },
    currentTracks() {
      if (this.longTerm) return this.topTracksLong.items;
      if (this.mediumTerm) return this.topTracks.items;
      if (this.shortTerm) return this.topTracksShort.items;
    },
  },
  methods: {
    checkColor(range) {
      if (range) {
        return "spotifyGreen";
      }
      return "secondary";
    },
    setNewTracks(range) {
      if (range === "long_term") {
        this.longTerm = true;
        this.mediumTerm = false;
        this.shortTerm = false;
      } else if (range === "medium_term") {
        this.longTerm = false;
        this.mediumTerm = true;
        this.shortTerm = false;
      } else {
        this.longTerm = false;
        this.mediumTerm = false;
        this.shortTerm = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  font-weight: bold;
  text-decoration: underline;
  color: red;
}
</style>
