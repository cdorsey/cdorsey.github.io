<template>
<div class="container">
    <mc-player-display id="player1" rotated></mc-player-display>
    <mc-player-display id="player2" rotated></mc-player-display>
    <mc-player-display id="player3" rotated></mc-player-display>
    <mc-player-display id="player4" rotated></mc-player-display>
</div>
</template>

<style scoped>
.container {
  grid-template: 1fr 1fr / 1fr 1fr;
}

#player2, #player4 {
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
