<template>
  <div v-if="audioFeatures !== null">
    <br /><br />
    <v-row class="text-center">
      <v-col cols="1" class="d-none d-lg-flex"></v-col>
      <v-col
        class="outline secondary--text text--lighten-2"
        cols="12"
        sm="6"
        lg="2"
      >
        <h2>{{ formatDuration(audioFeatures[0].duration_ms) }}</h2>
        <div>
          <small>duration</small>
        </div>
      </v-col>
      <v-col
        class="outline secondary--text text--lighten-2"
        cols="12"
        sm="6"
        lg="2"
      >
        <h2>{{ getPitch(audioFeatures[0].key) }}</h2>
        <div>
          <small>key</small>
        </div>
      </v-col>
      <v-col
        class="outline secondary--text text--lighten-2"
        cols="12"
        sm="6"
        lg="2"
      >
        <h2>{{ audioFeatures[0].mode === 1 ? "Major" : "Minor" }}</h2>
        <div>
          <small>modality</small>
        </div>
      </v-col>
      <v-col
        class="outline secondary--text text--lighten-2"
        cols="12"
        sm="6"
        lg="2"
      >
        <h2>{{ audioFeatures[0].time_signature }}</h2>
        <div>
          <small>time signature</small>
        </div>
      </v-col>
      <v-col
        class="outline secondary--text text--lighten-2"
        cols="12"
        sm="6"
        lg="2"
      >
        <h2>{{ audioFeatures[0].tempo.toFixed(0) }}</h2>
        <div>
          <small>tempo (BPM)</small>
        </div>
      </v-col>
      <v-col cols="1" class="d-none d-lg-flex"></v-col>
      <v-col cols="1" class="d-none d-lg-flex"></v-col>
      <v-col
        class="outline secondary--text text--lighten-2"
        cols="12"
        sm="6"
        lg="2"
      >
        <h2>{{ popularity }}%</h2>
        <div>
          <small>popularity</small>
        </div>
      </v-col>
      <v-col
        class="outline secondary--text text--lighten-2"
        cols="12"
        sm="6"
        lg="2"
      >
        <h2>{{ audioAnalysis.bars.length }}</h2>
        <div>
          <small>bars</small>
        </div>
      </v-col>
      <v-col
        class="outline secondary--text text--lighten-2"
        cols="12"
        sm="6"
        lg="2"
      >
        <h2>{{ audioAnalysis.beats.length }}</h2>
        <div>
          <small>beats</small>
        </div>
      </v-col>
      <v-col
        class="outline secondary--text text--lighten-2"
        cols="12"
        sm="6"
        lg="2"
      >
        <h2>{{ audioAnalysis.sections.length }}</h2>
        <div>
          <small>sections</small>
        </div>
      </v-col>
      <v-col
        class="outline secondary--text text--lighten-2"
        cols="12"
        sm="6"
        lg="2"
      >
        <h2>{{ audioAnalysis.segments.length }}</h2>
        <div>
          <small>segments</small>
        </div>
      </v-col>
      <v-col cols="1" class="d-none d-lg-flex"></v-col>
    </v-row>
  </div>
</template>

<script>
import { parsePitchClass } from "../../utils";

export default {
  name: "AudioTable",
  props: ["popularity", "id"],
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getAudioAnalysis", { id: this.id });
  },
  computed: {
    audioFeatures() {
      return this.$store.getters.audioFeatures;
    },
    audioAnalysis() {
      return this.$store.getters.audioAnalysis;
    },
  },
  methods: {
    //Format milliseconds into MM:SS
    formatDuration(millis) {
      const minutes = Math.floor(millis / 60000);
      const seconds = ((millis % 60000) / 1000).toFixed(0);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
    getPitch(key) {
      return parsePitchClass(key);
    },
  },
};
</script>

<style lang="scss" scoped>
.outline {
  outline: 0.1px solid #666666;
}
</style>
