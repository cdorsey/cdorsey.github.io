<template>
<modal classes="v--modal container" :clickToClose=false name="selector">
    <v-touch class="section" @tap="$router.push('/players/2')"><h1>2 Players</h1></v-touch>
    <v-touch class="section" @tap="$router.push('/players/3')"><h1>3 Players</h1></v-touch>
    <v-touch class="section" @tap="$router.push('/players/4')"><h1>4 Players</h1></v-touch>
</modal>
</template>

<style scoped>
.container {
  grid-template-rows: repeat(3, 1fr);
}

.section {
    border-bottom: 1px solid lightgray;
}

.section > h1 {
  text-align: center;
  font-family: "FerrumExtraCondensed";
}
</style>

<script>
export default {
  mounted: function() {
    this.$modal.show("selector");
  }
};
</script>
