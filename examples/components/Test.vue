<template>
  <div>
    <test-head></test-head>
    <router-view></router-view>
  </div>
</template>

<script>
  import TestHead from "../test/TestHead";

  import '../../packages/theme-chalk/index.less';

  export default {
    components: {TestHead},
    name: "test"
  }
</script>

<style scoped>

</style>
