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

    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/common/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import LatestPost from "./components/LatestPost";
import Footer from "./components/common/Footer";

export default {
  name: "App",

  components: {
    Header,
    Hero,
    Gallery,
    LatestPost,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
