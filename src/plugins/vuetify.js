import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: "#FF7028",
        secondary: "#FFFFFD",
        accent: "693D2A",
        background: "#2E2E2B",
        spotifyGreen: "#1DB954",
        spotifyBlack: "#191414",
      },
      light: {
        primary: "#5D0F2F",
        secondary: "#212121",
        accent: colors.blueGrey.base,
        // background: "#FFA980"
        spotifyGreen: "#1DB954",
        spotifyBlack: "#191414",
      },
    },
  },
});
