<template>
<div class="container">
    <div class="row">
      <mc-player-display id="player1" class="card blue valign-wrapper"></mc-player-display>
    </div>
    <div class="row">
      <mc-player-display id="player2" class="card blue valign-wrapper"></mc-player-display>
    </div>
</div>
</template>

<style scoped>
.container {
  height: 100%;
}

.row {
  height: 50%;
}

.card {
  height: 90%;
}

#player2 {
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
