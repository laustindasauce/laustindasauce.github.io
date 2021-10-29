<template>
  <div>
    <v-row
      justify="center"
      align="center"
      class="about"
    >
      <v-col cols="5">
        <h2 class="accent--text pb-1 font-weight-bold">Work History</h2>
        <hr>
        <br>
      </v-col>
      <v-col cols="5">
      </v-col>
    </v-row>
    <v-row
      style="padding-bottom: 10vh;"
      justify="center"
      align="center"
      class="about"
    >
      <v-col
        sm="11"
        md="10"
        lg="10"
      >
        <v-timeline>
          <v-timeline-item
            v-for="(job, i) in work"
            :key="i"
            small
          >
            <template v-slot:icon>
              <v-avatar>
                <img :src="job.image">
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span
                :class="`headline `"
                v-text="job.dates"
              ></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-bold secondary--text mb-4 `">
                {{ job.title }}
              </h2>
              <h4
                @click="goToUrl(job.url)"
                :class="`subtitle-1 link  mb-2 `"
              >
                {{ job.company }}
              </h4>
              <ul
                v-for="(role,index) in job.roles"
                v-bind:key="index"
              >
                <li>
                  {{role}}
                </li>
              </ul>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    colors: ["cyan", "green", "pink", "amber", "orange", "red", "blue"],
  }),
  methods: {
    goToUrl(url) {
      location.href = url;
    },
    getColor(index) {
      if (this.colors == undefined) {
        return null;
      }
      return this.colors[index % this.colors.length];
    },
  },
  computed: {
    work() {
      return this.$store.getters.work;
    },
  },
};
</script>

<style lang="scss" scoped>
.link:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>