import Vue from 'vue'
import VueTouch from 'vue-touch'
import App from './App.vue'
import 'fullpage.js'

Vue.use(VueTouch);

const app = new Vue({
  el: '#app',
  render: h => h(App),
});
