<template>
  <we-web-template-test
    logo-text="weview"
    :logo-src="logoSrc"
    :left-data="tests"
    :header-data="pages"
    page-name="Test"
  ></we-web-template-test>
</template>

<script>

  import TestConf from '../../examples/test.config';
  import PageConf from '../../examples/page.config';

  const LogoSrc = require('../assets/weview_logo.png');

  export default {

    name: "test",

    data() {
      return {
        projectName: 'weview',
        tests: TestConf,
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
