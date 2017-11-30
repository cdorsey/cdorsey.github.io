import Vue from 'vue'
import VueTouch from 'vue-touch'
import VueRouter from 'vue-router'
import VueModal from 'vue-js-modal'
import App from './App.vue'
import mc2Player from './mc2Player.vue'
import mc3Player from './mc3Player.vue'
import mc4Player from './mc4Player.vue'
import mcSelector from './mcSelector.vue'

Vue.use(VueTouch, { name: 'v-touch' });
Vue.use(VueRouter);
Vue.use(VueModal);

const router = new VueRouter({
  routes: [
    { path: '/', component: mcSelector },
    { path: '/players/2', component: mc2Player },
    { path: '/players/3', component: mc3Player },
    { path: '/players/4', component: mc4Player }
  ]
});

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
