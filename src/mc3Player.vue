<template>
    <div class="container">
        <div class="row">
            <div class="col m8 s8">
                <mc-player-display id="player1" class="card blue valign-wrapper"></mc-player-display>
                <mc-player-display id="player2" class="card blue valign-wrapper"></mc-player-display>
            </div>
            <!-- /.col -->
            <div class="col m4 s4">
                <mc-player-display id="player3" class="card blue valign-wrapper" rotated></mc-player-display>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->
</template>

<style scoped>
.row {
    height: 95%;
}

.col,
.card {
    height: 100%;
}

#player1,
#player2 {
    height: 50%;
}

#player2 {
    transform: rotate(180deg);
}

#player3 {
    margin-bottom: 0;
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
