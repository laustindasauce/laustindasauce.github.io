<template>
  <v-footer app class="pt-5" color="accent" padless fixed>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :href="link.url"
        :key="link.title"
        color="white"
        icon
        rounded
        class="mx-4"
      >
        <v-icon size="24px">
          {{ link.icon }}
        </v-icon>
      </v-btn>
      <v-col class="accent lighten-1 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Austin</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    links() {
      return this.$store.getters.links;
    },
  },
};
</script>
