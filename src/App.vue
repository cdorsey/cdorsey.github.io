<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<style>
@import url('../node_modules/normalize.css/normalize.css');
@import url('https://fontlibrary.org/face/ferrum');

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  height: 100%;
}

.container {
  height: 100%;
  display: grid;
  grid-gap: 2vh;
}

</style>


<script>
export default {
  name: 'app',
  props: {
    numPlayers: {
      type: Number,
      default: 2
    }
  },
  data () {
    return {}
  },
}
</script>

