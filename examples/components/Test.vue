<template>
  <div>
    <test-head></test-head>
    <router-view></router-view>
  </div>
</template>

<script>
  import TestHead from "../test/TestHead";

  export default {
    components: {TestHead},
    name: "test"
  }
</script>

<style lang="less" type="text/less">
  @import '../../packages/theme-chalk/index.less';
  @import '../../docwebsite/packages/theme-chalk/index';
</style>
