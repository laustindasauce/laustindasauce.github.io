<template>
  <v-container class="mt-5">
    <div v-if="spotifyId === null">
      <login />
    </div>
    <div v-else>
      <div v-if="artist !== null">
        <v-row class="mb-5 mt-5 quarter" justify="center">
          <v-img
            lazy-src="user.png"
            max-height="350"
            max-width="350"
            class="avatar"
            :src="getImg()"
          ></v-img>
        </v-row>
        <v-row justify="center">
          <v-col class="text-center">
            <h1
              class="link large white--text"
              @click="goToExternalLink(artist.external_urls.spotify)"
            >
              {{ artist.name }}
            </h1>
          </v-col>
        </v-row>
        <br /><br /><br />
        <v-row class="mt-5 text-center" justify="center">
          <v-col>
            <div>
              <h3 class="spotifyGreen--text">
                {{ numberWithCommas(artist.followers.total) }}
              </h3>
            </div>
            <div>
              <h4 class="secondary--text">followers</h4>
            </div>
          </v-col>
          <v-col>
            <div>
              <h3 class="spotifyGreen--text">{{ artist.genres.join(", ") }}</h3>
            </div>
            <div>
              <h4 class="secondary--text">
                {{ artist.genres.length > 1 ? "genres" : "genre" }}
              </h4>
            </div>
          </v-col>
          <v-col>
            <div>
              <h3 class="spotifyGreen--text">{{ artist.popularity }} %</h3>
            </div>
            <div>
              <h4 class="secondary--text playlists">popularity</h4>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import Login from "../../components/music/Login.vue";

export default {
  components: {
    Login,
  },
  name: "SingleArtist",
  props: ["id"],
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getArtist", { id: this.id });
  },
  computed: {
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
    artist() {
      return this.$store.getters.spotifyArtist;
    },
  },
  methods: {
    getImg() {
      return this.artist.images[0].url;
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    goToExternalLink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 100%;
}
.large {
  font-size: 45px;
  font-weight: bold;
}
.link:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
