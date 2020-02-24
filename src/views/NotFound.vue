<template>
  <v-content>
    <v-container>
      <div class="block text-center notFound">
        <h2>Page not found</h2>
        <i class="fas fa-exclamation-triangle red--text"></i>
        <p>We're sorry, the page you requested could not be found. Please go back to the homepage or contact us at admin@bibekshakya.com</p>
      </div>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "NotFound",

  data() {
    return {
      items: []
    };
  }
};
</script>