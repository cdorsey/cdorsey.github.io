<template>
    <div>
        <div class="card-content white-text" :class="{ 'card-content-rotate': rotated }">
            <h1 class="center-align">{{ value }}</h1>
        </div>
        <div class="card-controls" :class="{ 'card-controls-rotate': rotated }">
            <v-touch class="increase" @tap="value++"><h2>+</h2></v-touch>
            <v-touch class="decrease" @tap="value--"><h2>-</h2></v-touch>
        </div>
    </div>
</template>

<style>
h1 {
    font-size: 15rem;
}

.card-content {
    width: 100%;
}

.card-content-rotate h1 {
    transform: rotate(90deg);
}

.card-controls {
    position: absolute;
    top: 0;
    display: none;
    width: 100%;
    height: 100%;
    z-index: 999;

    display: flex;
    flex-direction: row;
    align-items: stretch;
}

.card-controls h2 {
    pointer-events: none;
}

.card-controls-rotate {
    flex-direction: column;
}

.increase, .decrease {
    height: 100%;
    flex-grow: 1;
    color: white;
    margin: auto;
    padding: 2em;
    opacity: 0.45;
}

.decrease {
    transform: rotate(180deg);
}
</style>


<script>
export default {
    name: 'mc-player-display',
    props: {
        rotated: Boolean,
        maxHealth: {
            type: Number,
            default: 20
        }
    },
    data() {
        return {
            value: this.maxHealth
        }
    }
}
</script>
