<template>
  <div>
    <v-navigation-drawer floating permanent color="background" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title primary--text">
            Menu
          </v-list-item-title>
          <!-- <v-list-item-subtitle>
            </v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-group
          v-for="item in spotifyActions"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            @click.stop
            v-for="child in item.items"
            v-if="
              (child.loginReq && spotifyId !== null) ||
              (!child.loginReq && spotifyId === null)
            "
            :key="child.title"
            :to="{ name: 'Music', params: { name: child.to } }"
            v-model="child.active"
            sub-group
            no-action
          >
            <v-list-item-icon>
              <v-icon v-text="child.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-group
          v-for="item in projects"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.icon"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-group
            @click.stop
            v-for="child in item.items"
            :key="child.title"
            v-model="child.active"
            sub-group
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="infant in child.items"
              :key="infant.title"
              :to="{ name: 'Project', params: { name: infant.to } }"
              link
            >
              <v-list-item-content>
                <v-list-item-title v-text="infant.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="background" app hide-on-scroll>
      <!-- <v-app-bar-nav-icon
        class="secondary--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon> -->

      <v-toolbar-title class="secondary--text">{{
        $route.name
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="darkMode()" fab elevation="1" icon>
        <v-icon class="secondary--text">mdi-invert-colors</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Button that appears once you start scrolling on the page that will take you to the top -->
    <v-fab-transition>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up-thick</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: "Menu",
  data: () => ({
    drawer: true,
    fab: false,
  }),
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
  computed: {
    items() {
      return this.$store.getters.currentItems;
    },
    projects() {
      return this.$store.getters.projects;
    },
    spotifyActions() {
      return this.$store.getters.spotifyActions;
    },
    spotifyId() {
      return this.$store.getters.spotifyId;
    },
  },
};
</script>
