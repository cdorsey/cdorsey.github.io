import Vue from 'vue'
import VueTouch from 'vue-touch'
import App from './App.vue'
import 'fullpage.js'

const app = new Vue({
  el: '#app',
  render: h => h(App),
});

app.use(VueTouch);
