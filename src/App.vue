<template>
  <v-app>
    <v-app-bar>
      <Header />
    </v-app-bar>
    <v-content>
      <Hero />
      <Gallery />
      <LatestPost />
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/common/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import LatestPost from "./components/LatestPost";

export default {
  name: "App",

  components: {
    Header,
    Hero,
    Gallery,
    LatestPost
  },

  data: () => ({
    //
  })
};
</script>
