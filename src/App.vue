<template>
<div id="app">
  <mc-2-player v-if="numPlayers === 2" :numPlayers="numPlayers"></mc-2-player>
  <mc-3-player v-else-if="numPlayers === 3" :numPlayers="numPlayers"></mc-3-player>
  <!-- <mc-4-player v-else-if="numPlayers === 4" :numPlayers="numPlayers"></mc-4-player> -->
</div>
</template>

<style>
@import url('../node_modules/normalize.css/normalize.css');
@import url('https://fontlibrary.org/face/ferrum');

html, body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
}

.container {
  height: 100%;
  display: grid;
  grid-gap: 2vh;
}

</style>


<script>
import mc2Player from './mc2Player.vue'
import mc3Player from './mc3Player.vue'
import mc4Player from './mc4Player.vue'
import $ from 'jquery'
import { fill } from 'lodash'

export default {
  name: 'app',
  components: {
    mc2Player,
    mc3Player,
    mc4Player,
  },
  data () {
    return {
      numPlayers: 3,
    }
  },
}
</script>

