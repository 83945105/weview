<template>
  <div>
    <layer-right v-model="layer"></layer-right>
    <button @click="show">弹出</button>
  </div>
</template>

<script>

  export default {
    name: "layer-test",
    data() {
      return {
        layer: false
      };
    },
    methods: {
      show() {
        this.layer = true;
      }
    }
  }
</script>

<style scoped>

</style>
