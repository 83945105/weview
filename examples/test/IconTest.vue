<template>
  <div>

    <template v-for="(name, idx) in names">
      <span :key="name">
        <we-icon :key="name" :name="names[idx]"></we-icon>
      </span>
      <div :key="name" v-if="(idx + 1)%10 == 0"></div>
    </template>
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
