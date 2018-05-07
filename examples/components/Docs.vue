<template>
  <div>
  </div>
</template>

<script>

  import DocConf from '../../examples/docs.config';

  const LogoSrc = require('../assets/weview_logo.png');

  export default {
    components: {
    },
    name: "docs",

    data() {
      return {
        projectName: 'weview',
        docs: DocConf
      };
    },

    computed: {
      logoSrc() {
        return LogoSrc;
      }
    },

    methods: {
      handleLinkRoute({name}) {
        this.$router.push({name: name});
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import '../../web/packages/theme-chalk/index';
</style>
