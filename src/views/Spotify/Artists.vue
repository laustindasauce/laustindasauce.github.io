<template>
  <v-container class="mt-5">
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else-if="topArtists !== null">
      <v-row>
        <v-col class="text-left">
          <h1>top artists</h1>
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
      <v-row class="mt-5">
        <v-col
          v-for="(artist, i) in currentArtists"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <artist-item :artist="artist"></artist-item>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";
import ArtistItem from "../../components/music/ArtistItem.vue";

export default {
  components: {
    ArtistItem,
    Login,
  },
  name: "Artists",

  data() {
    return {
      longTerm: false,
      mediumTerm: true,
      shortTerm: false,
    };
  },

  mounted() {
    if (this.spotifyId === null) {
      return;
    }
    this.$store.dispatch("getTopItems", { type: "artists", limit: 50 });
    this.$store.dispatch("getTopItems", {
      type: "artists",
      range: "long_term",
      limit: 50,
    });
    this.$store.dispatch("getTopItems", {
      type: "artists",
      range: "short_term",
      limit: 50,
    });
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    topArtists() {
      return this.$store.getters.topArtists;
    },
    topArtistsLong() {
      return this.$store.getters.topArtistsLong;
    },
    topArtistsShort() {
      return this.$store.getters.topArtistsShort;
    },
    currentArtists() {
      if (this.longTerm) return this.topArtistsLong.items;
      if (this.mediumTerm) return this.topArtists.items;
      if (this.shortTerm) return this.topArtistsShort.items;
    },
  },
  methods: {
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
    checkColor(range) {
      if (range) {
        return "spotifyGreen";
      }
      return "secondary";
    },
  },
};
</script>

<style lang="scss" scoped></style>
