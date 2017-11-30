<template>
<div class="counter">
    <h1>{{ value }}</h1>
    <div class="controls">
        <v-touch @tap="value--" class="decrease">-</v-touch>
        <v-touch @tap="value++" class="increase">+</v-touch>
    </div>
</div>
</template>

<style>
h1 {
    margin: 0;
    text-align: center;
    color: white;
    font-size: 20rem;
}

.counter {
    background: red;
    margin: 1.5rem;
    border-radius: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

.controls {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
}

.increase, .decrease {
    opacity: 0.45;
    color: white;
    font-size: 5rem;
    padding: 2rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.increase {
    text-align: right;
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
