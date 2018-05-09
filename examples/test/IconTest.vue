<template>
  <div>

    <template v-for="(name, idx) in names">
      <span :key="name">
        <we-icon :key="name" :name="names[idx]"></we-icon>
      </span>
      <div :key="name" v-if="(idx + 1)%10 == 0"></div>
    </template>

    <we-icon name="loading-annual-ring" :loading="true"></we-icon>
    <we-icon name="loading-black-hole" :loading="true"></we-icon>
    <we-icon name="loading-drop" :loading="true"></we-icon>
    <we-icon name="loading-drop-circle" :loading="true"></we-icon>
    <we-icon name="loading-fading" :loading="true"></we-icon>
    <we-icon name="loading-fading-full" :loading="true"></we-icon>

    <we-icon name="loading-fading-point" :loading="true"></we-icon>
    <we-icon name="loading-point-line" :loading="true"></we-icon>
    <we-icon name="loading-refresh" :loading="true"></we-icon>
    <we-icon name="loading-snakes" :loading="true"></we-icon>

  </div>
</template>

<script>

  import {IconName} from '../../packages/icon/src/icon.js';

  export default {

    name: "icon-test",

    data() {
      return {
        names: IconName
      };
    }
  }
</script>

<style scoped>

</style>
