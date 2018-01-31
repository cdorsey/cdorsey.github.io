<template>
<div class="counter">
    <h1 :class="{ 'rotate-text' : rotated }">{{ value }}</h1>
    <div class="controls" :class="{ 'controls-rotated': rotated }">
        <v-touch @tap="value--" class="decrease"><span :class="{ 'rotate-text': rotated }">&ndash;</span></v-touch>
        <v-touch @tap="value++" class="increase">+</v-touch>
    </div>
</div>
</template>

<style scoped>
h1 {
    margin: 0;
    text-align: center;
    color: white;
    font-size: 20rem;
    font-family: "FerrumExtraCondensed";
}

.counter {
    background: red;
    margin: 1.5rem;
    border-radius: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

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

.controls-rotated {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
}

.rotate-text {
    transform: rotate(90deg);
}

.increase, .decrease {
    opacity: 0.45;
    color: white;
    font-size: 5rem;
    font-weight: 100;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
}
.controls-rotated > * {
    flex-direction: row;
}

.controls-rotated > .increase {
    align-self: flex-end;
}

.controls-rotated > .decrease {
    align-self: flex-start;
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
    mounted: function() {
        // Dynamically size counter text
        let counterDiv = this.$el;
        let counterHeight = counterDiv.clientHeight;
        counterDiv.querySelector('h1').setAttribute('font-size', (counterHeight * 0.90).toString() + 'px');


    },
    data() {
        return {
            value: this.maxHealth
        }
    }
}
</script>
