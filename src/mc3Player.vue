<template>
<div class="container">
    <mc-player-display id="player1" rotated></mc-player-display>
    <mc-player-display id="player2" rotated></mc-player-display>
    <mc-player-display id="player3"></mc-player-display>
</div>
</template>

<style scoped>
.container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3fr 1fr;
}

#player2 {
    transform: rotate(180deg);
}

#player3 {
    grid-column: 1 / 3;
}
</style>


<script>
import mcPlayerDisplay from './components/PlayerDisplay.vue'

export default {
    name: 'mc-3-player',
    components: {
        mcPlayerDisplay
    },
    data() {
        return {}
    }
}
</script>
