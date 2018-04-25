<template>
  <div>
    <web-api-doc-head-menu
      :label="projectName"
      :logo-src="logoSrc"
    ></web-api-doc-head-menu>
    <web-api-doc-left-menu>
      <web-api-doc-left-group-one>
        <web-api-doc-left-item :value="true"></web-api-doc-left-item>
        <web-api-doc-left-item></web-api-doc-left-item>
        <web-api-doc-left-item></web-api-doc-left-item>
        <web-api-doc-left-item></web-api-doc-left-item>
      </web-api-doc-left-group-one>
    </web-api-doc-left-menu>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>

  import WebApiDocHeadMenu from "../../docwebsite/packages/webapidoc/head/src/Menu";
  import WebApiDocLeftMenu from "../../docwebsite/packages/webapidoc/left/src/Menu";
  import WebApiDocLeftGroupOne from "../../docwebsite/packages/webapidoc/left/src/GroupOne";
  import WebApiDocLeftItem from "../../docwebsite/packages/webapidoc/left/src/Item";

  const LogoSrc = require('../assets/weview_logo.png');

  export default {
    components: {
      WebApiDocLeftItem,
      WebApiDocLeftGroupOne,
      WebApiDocLeftMenu,
      WebApiDocHeadMenu},
    name: "docs",

    data() {
      return {
        projectName: 'weview'
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
  @import '../../docwebsite/packages/theme-chalk/api';
</style>
