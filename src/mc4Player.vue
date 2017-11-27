<template>
<div class="container">
  <div class="row">
    <div class="col s6">
      <mc-player-display id="player1" class="card blue valign-wrapper"></mc-player-display>
    </div>
    <div class="col s6">
      <mc-player-display id="player2" class="card blue valign-wrapper"></mc-player-display>
    </div>
  </div>
  <div class="row">
    <div class="col s6">
      <mc-player-display id="player3" class="card blue valign-wrapper"></mc-player-display>
    </div>
    <div class="col s6">
      <mc-player-display id="player4" class="card blue valign-wrapper"></mc-player-display>
    </div>
  </div>
</div>
</template>

<style scoped>
.row {
  height: 50%;
}

.col {
  height: 90%;
}

.col > * {
  height: 100%;
}

#player1, #player2 {
  transform: rotate(180deg);
}
</style>


<script>
import mcPlayerDisplay from './components/PlayerDisplay.vue'

export default {
  name: 'mc-4-player',
  components: {
    mcPlayerDisplay
  },
  data () {
      return {}
  }
}
</script>
