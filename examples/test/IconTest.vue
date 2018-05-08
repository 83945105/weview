<template>
  <div>

    <template v-for="(name, idx) in IconName">
      <we-icon :key="name" :name="IconName[idx]"></we-icon>
    </template>

  </div>
</template>

<script>

  import {IconName} from '../../packages/icon/src/icon.js';

  export default {

    name: "icon-test",

    data() {
      return {
        IconName: IconName
      };
    }
  }
</script>

<style scoped>

</style>
