<template>
<div class="container">
  <div class="row">
    <div class="col s6">
      <mc-player-display id="player1" class="card blue valign-wrapper"></mc-player-display>
    </div>
    <div class="col s6"
      <mc-player-display id="player2" class="card blue valign-wrapper"></mc-player-display>
    </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.row {
  height: 95%;
}

.col, .card {
  height: 100%
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
