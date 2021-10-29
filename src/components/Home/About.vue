<template>
  <div>
    <v-row
      style="padding-bottom: 20vh"
      justify="center"
      align="center"
      class="about"
    >
      <v-col sm="6" md="4" lg="4">
        <h2 class="accent--text pb-1 font-weight-bold">About Me</h2>
        <hr />
        <br />
        <p>
          I am a Senior at Arizona State University expecting to graduate in
          May, 2022 with a Computer Science degree. I am working as a Data
          Engineer Intern for
          <code @click="USAA()" class="usaa primary--text pa-1">USAA</code> this
          summer.
        </p>
        <p>
          I grew up in central Illinois and moved to Arizona in 2019. I
          originally went to school to study Biology but after a couple years,
          found my true passion in programming.
        </p>
        <p>
          When I'm not working or studying I like to hike and play sports. My
          newfound hobby that I enjoy a lot is snowboarding!
        </p>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col sm="4" md="4" lg="4">
        <v-card class="mx-auto">
          <v-img src="SNOW.jpeg"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
