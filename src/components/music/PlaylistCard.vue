<template>
  <v-card class="mx-auto" color="rgb(0, 0, 0, 0.1)" max-width="344">
    <v-img :src="getImage()"></v-img>

    <v-card-title> {{ playlist.name }} </v-card-title>

    <v-card-subtitle> {{ playlist.tracks.total }} tracks</v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> More Info </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <ul>
            <li><strong>Owner: </strong>{{ playlist.owner.display_name }}</li>
            <li>
              <strong>Profile: </strong
              ><a :href="playlist.owner.external_urls.spotify">link</a>
            </li>
          </ul>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ["playlist"],
  data: () => ({
    show: false,
  }),
  methods: {
    getImage() {
      if (this.playlist.images.length > 0) {
        return this.playlist.images[0].url;
      }
      return "default.png";
    },
  },
};
</script>

<style lang="scss" scoped></style>
