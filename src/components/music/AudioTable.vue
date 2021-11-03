<template>
  <div v-if="audioFeatures !== null">
    {{ audioFeatures }}
    <br /><br />
    <v-row class="text-center">
      <v-col cols="1" class="d-none d-lg-flex"></v-col>
      <v-col class="outline" cols="12" sm="6" lg="2">
        {{ formatDuration(audioFeatures[0].duration_ms) }}
        <div>
          <small class="secondary--text">duration</small>
        </div>
      </v-col>
      <v-col class="outline" cols="12" sm="6" lg="2">
        {{ getPitch(audioFeatures[0].key) }}
        <div>
          <small class="secondary--text">key</small>
        </div>
      </v-col>
      <v-col class="outline" cols="12" sm="6" lg="2">
        {{ audioFeatures[0].mode === 1 ? "Major" : "Minor" }}
        <div>
          <small class="secondary--text">modality</small>
        </div>
      </v-col>
      <v-col class="outline" cols="12" sm="6" lg="2">
        {{ audioFeatures[0].time_signature }}
        <div>
          <small class="secondary--text">time signature</small>
        </div>
      </v-col>
      <v-col class="outline" cols="12" sm="6" lg="2">
        {{ audioFeatures[0].tempo.toFixed(0) }}
        <div>
          <small class="secondary--text">tempo (BPM)</small>
        </div>
      </v-col>
      <v-col cols="1" class="d-none d-lg-flex"></v-col>
      <v-col cols="1" class="d-none d-lg-flex"></v-col>
      <v-col class="outline" cols="12" sm="6" lg="2">
        {{ popularity }}%
        <div>
          <small class="secondary--text">popularity</small>
        </div>
      </v-col>
      <v-col class="outline" cols="12" sm="6" lg="2">
        {{ audioFeatures[0].acousticness }}
        <div>
          <small class="secondary--text">Duration</small>
        </div>
      </v-col>
      <v-col class="outline" cols="12" sm="6" lg="2">
        {{ audioFeatures[0].acousticness }}
        <div>
          <small class="secondary--text">Duration</small>
        </div>
      </v-col>
      <v-col class="outline" cols="12" sm="6" lg="2">
        {{ audioFeatures[0].acousticness }}
        <div>
          <small class="secondary--text">Duration</small>
        </div>
      </v-col>
      <v-col class="outline" cols="12" sm="6" lg="2">
        {{ audioFeatures[0].acousticness }}
        <div>
          <small class="secondary--text">Duration</small>
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
  props: ["popularity"],
  data() {
    return {};
  },

  mounted() {},
  computed: {
    audioFeatures() {
      return this.$store.getters.audioFeatures;
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
  outline: 1px solid #767676;
}
</style>
