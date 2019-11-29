<template>
  <v-app>
    <v-content>
      <Header/>
      <Hero/>
      <Gallery/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/common/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';

export default {
  name: 'App',

  components: {
    Header,
    Hero,
    Gallery
  },

  data: () => ({
    //
  }),
};
</script>
