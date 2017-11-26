<template>
<div id="app">
  <mc-2-player v-if="numPlayers === 2" :numPlayers="numPlayers"></mc-2-player>
  <mc-3-player v-else-if="numPlayers === 3" :numPlayers="numPlayers"></mc-3-player>
  <mc-4-player v-else-if="numPlayers === 4" :numPlayers="numPlayers"></mc-4-player>
</div>
</template>

<style>
@import url('../node_modules/fullpage.js/dist/jquery.fullpage.css');
@import url('../node_modules/materialize-css/dist/css/materialize.css');

.container {
  height: 100%;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
}

.card {
    border-radius: 2em;
}
</style>


<script>
import mc2Player from './mc2Player.vue'
import mc3Player from './mc3Player.vue'
import mc4Player from './mc4Player.vue'
import $ from 'jquery'
import { fill } from 'lodash'

$(document).ready(function () {
  $('#app').fullpage();
});

export default {
  name: 'app',
  components: {
    mc2Player,
    mc3Player,
    mc4Player,
  },
  data () {
    return {
      numPlayers: 2,
    }
  },
}
</script>

