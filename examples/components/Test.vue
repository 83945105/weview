<template>
  <div>
    <test-head></test-head>
    <router-view></router-view>
  </div>
</template>

<script>
  import TestHead from "../test/TestHead";
  import '../../lib/static/css/common.css';
  import '../../lib/static/less/api.less';

  import '../../packages/theme-chalk/index.less';

  // import '../../lib/weview.css';
  // import '../../lib/common.css';

  export default {
    components: {TestHead},
    name: "test"
  }
</script>

<style scoped>

</style>
