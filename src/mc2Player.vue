<template>
<div class="container">
  <mc-player-display id="player1"></mc-player-display>
  <mc-player-display id="player2"></mc-player-display>
</div>
</template>

<style scoped>
.container {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}

#player1, #player2 {
  position: relative;
  top: 0;
  left: 0;
}

#player1 {
  transform: rotate(180deg);
}
</style>


<script>
import mcPlayerDisplay from "./components/PlayerDisplay.vue";

export default {
  name: "mc-2-player",
  components: {
    mcPlayerDisplay
  },
  data() {
    return {};
  }
};
</script>
