<template>
  <div class="mt-5">
    <h2 :class="horizontal ? '' : 'text-center'">audio features</h2>
    <div id="chart" v-if="chartReady">
      <apexchart
        type="bar"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
      <div v-if="!horizontal">
        <h3 :class="horizontal ? '' : 'text-center'">all stats</h3>
        <div class="text-left mt-3">
          <v-row>
            <v-col cols="12">
              <v-sheet elevation="6">
                <v-tabs
                  v-model="tab"
                  color="secondary"
                  background-color="spotifyBlack"
                  dark
                  next-icon="mdi-arrow-right-bold-box-outline"
                  prev-icon="mdi-arrow-left-bold-box-outline"
                  show-arrows
                >
                  <v-tabs-slider color="spotifyGreen"></v-tabs-slider>
                  <v-tab v-for="type in audioTypes" :key="type.name">
                    {{ type.name }}
                  </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                  <v-tab-item v-for="type in audioTypes" :key="type.name">
                    <v-card color="rgb(0, 0, 0, 0.0)" flat>
                      <v-card-text>Score: {{ type.score }}</v-card-text>
                      <v-card-text>Description: {{ type.desc }}</v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-sheet>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <!-- <pre>{{ audioFeatures }}</pre> -->
  </div>
</template>

<script>
import audioTypes from "../../store/json/audio-features-explained.json";

export default {
  name: "AudioChart",
  props: ["items", "horizontal"],
  data() {
    return {
      chartReady: false,
      series: [
        {
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          toolbar: {
            show: false,
          },
          type: "bar",
          height: 350,
        },
        colors: [
          "#DC5672",
          "#FE9E40",
          "#FECE57",
          "#347878",
          "#3188C5",
          "#4C63AF",
          "#8459DC",
        ],
        plotOptions: {
          bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: this.horizontal,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        yaxis: {
          labels: {
            style: {
              colors: [
                "#DC5672",
                "#FE9E40",
                "#FECE57",
                "#347878",
                "#3188C5",
                "#4C63AF",
                "#8459DC",
              ],
              fontSize: "14px",
            },
          },
        },
        tooltip: {
          theme: "dark",

          y: {
            title: {
              formatter: (seriesName) => "value: ",
            },
          },
        },
        xaxis: {
          categories: [
            "acousticness",
            "danceability",
            "energy",
            "instrumentalness",
            "liveness",
            "speechiness",
            "valence",
          ],
          //   tickAmount: 10,
          labels: {
            style: {
              colors: [
                "#DC5672",
                "#FE9E40",
                "#FECE57",
                "#347878",
                "#3188C5",
                "#4C63AF",
                "#8459DC",
              ],
              fontSize: "14px",
            },
          },
        },
      },
      acousticness: 0,
      danceability: 0,
      energy: 0,
      instrumentalness: 0,
      liveness: 0,
      speechiness: 0,
      valence: 0,
      loudness: 0,
      tempo: 0,
      audioTypes: audioTypes,
      tab: null,
    };
  },

  mounted() {
    let ids = [];
    for (var i = 0; i < this.items.length; i++) {
      ids.push(this.items[i].track.id);
    }
    this.$store.dispatch("getAudioFeatures", { ids: ids });
  },
  computed: {
    audioFeatures() {
      return this.$store.getters.audioFeatures;
    },
  },
  watch: {
    audioFeatures: function (val) {
      this.computeChartData();
    },
  },

  methods: {
    computeChartData() {
      if (this.audioFeatures.length === 0) {
        return;
      }

      for (var i = 0; i < this.audioFeatures.length; i++) {
        this.acousticness += this.audioFeatures[i].acousticness;
        this.danceability += this.audioFeatures[i].danceability;
        this.energy += this.audioFeatures[i].energy;
        this.instrumentalness += this.audioFeatures[i].instrumentalness;
        this.liveness += this.audioFeatures[i].liveness;
        this.speechiness += this.audioFeatures[i].speechiness;
        this.valence += this.audioFeatures[i].valence;
        this.loudness += this.audioFeatures[i].loudness;
        this.tempo += this.audioFeatures[i].tempo;
      }
      this.acousticness /= this.audioFeatures.length;
      this.danceability /= this.audioFeatures.length;
      this.energy /= this.audioFeatures.length;
      this.instrumentalness /= this.audioFeatures.length;
      this.liveness /= this.audioFeatures.length;
      this.speechiness /= this.audioFeatures.length;
      this.valence /= this.audioFeatures.length;
      this.loudness /= this.audioFeatures.length;
      this.tempo /= this.audioFeatures.length;

      this.series[0].data.push(this.acousticness);
      this.series[0].data.push(this.danceability);
      this.series[0].data.push(this.energy);
      this.series[0].data.push(this.instrumentalness);
      this.series[0].data.push(this.liveness);
      this.series[0].data.push(this.speechiness);
      this.series[0].data.push(this.valence);

      for (var i = 0; i < this.audioTypes.length; i++) {
        this.audioTypes[i].score = this.series[0].data[i];
      }

      this.audioTypes[7].score = this.loudness;
      this.audioTypes[8].score = this.tempo;

      this.chartReady = true;
    },
  },
};
</script>

<style lang="scss">
.v-treeview-node__content,
.v-treeview-node__label {
  flex-shrink: 1;
}
.v-treeview-node__root {
  height: auto;
}
</style>
