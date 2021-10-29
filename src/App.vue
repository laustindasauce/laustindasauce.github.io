<template>
  <v-app
    id="app"
    :style="{background: $vuetify.theme.themes[theme].background}"
  >
    <app-menu />

    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer v-show="atHome" />
  </v-app>
</template>

<script>
import AppMenu from "./components/AppMenu.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    "app-menu": AppMenu,
    "app-footer": AppFooter,
  },
  data: () => ({
    //
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
    atAbout() {
      return this.$route.name === "About" ? true : false;
    },
    atHome() {
      return this.$route.name === "Home" ? true : false;
    },
  },
};
</script>

<style>
h1 {
  font-family: monaco, Consolas, "Lucida Console", monospace;
  font-size: 30px;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  line-height: 32px;
}
h2 {
  font-family: monaco, Consolas, "Lucida Console", monospace;
  font-size: 25px;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  line-height: 25px;
}
h3 {
  font-family: monaco, Consolas, "Lucida Console", monospace;
  font-size: 20px;
  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  line-height: 20px;
}
p {
  font-family: monaco, Consolas, "Lucida Console", monospace;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 20px;
}
blockquote {
  font-family: monaco, Consolas, "Lucida Console", monospace;
  font-size: 21px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 30px;
}
pre {
  font-family: monaco, Consolas, "Lucida Console", monospace;
  font-size: 13px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 18px;
}
</style>