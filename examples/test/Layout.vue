<template>
  <router-view></router-view>
</template>

<script>

  import Vue from 'vue';
  import {LayerRight, Alert} from '../../packages/index';

  Vue.component(LayerRight.name, LayerRight);
  Vue.component(Alert.name, Alert);

  export default {
    name: "layout"
  }
</script>

<style scoped>

</style>
