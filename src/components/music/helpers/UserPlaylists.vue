<template>
  <v-card class="mx-auto" max-width="500">
    <v-list>
      <v-list-item-group v-model="model">
        <v-list-item
          v-for="item in userPlaylists"
          :key="item.id"
          @click="showPlaylist(item)"
        >
          <v-list-item-icon>
            <v-icon>mdi-spotify</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "UserPlaylists",
  props: ["userPlaylists"],
  data() {
    return {
      model: 1,
    };
  },

  mounted() {},

  methods: {
    showPlaylist(item) {
      console.log(`Show playlist : ${item.id}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
