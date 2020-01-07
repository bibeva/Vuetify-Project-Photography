import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import NotFound from './views/NotFound';

Vue.use(VueRouter)

import './scss/main.scss';

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '*', component: NotFound }
  ],
  mode: 'hash'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
