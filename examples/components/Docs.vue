<template>
  <we-template-doc
    logo-text="weview"
    :logo-src="logoSrc"
    :left-data="docs"
    :header-data="pages"
    page-name="Component"
    @click-logo="$message.open('首页还没做好...')"
  ></we-template-doc>
</template>

<script>

  import DocConf from '../../examples/docs.config';
  import PageConf from '../../examples/page.config';

  const LogoSrc = require('../assets/weview_logo.png');

  export default {

    name: "docs",

    data() {
      return {
        projectName: 'weview',
        docs: DocConf,
        pages: PageConf
      };
    },

    computed: {
      logoSrc() {
        return LogoSrc;
      }
    }
  }
</script>

<style lang="less" type="text/less">
</style>
