<template>
  <we-web-body-doc>


    <we-web-header-doc :logo-src="logoSrc" title="weview" @click-logo="$message('首页还没做好...')">
      <we-web-header-doc-item label="组件" :value="true"></we-web-header-doc-item>
    </we-web-header-doc>

    <we-web-layout>

      <template slot="left">

        <we-web-left-doc-nav>
          <template v-for="(item) in docs">

            <we-web-left-doc-nav
              :key="item.name"
              :label="item.desc"
              :style="{marginTop: `${15}px`}"
              @click="handleLinkRoute({name: item.name})"
            >

              <template v-for="(row) in item.items">
                <we-web-left-doc-nav
                  :key="row.name"
                  :label="row.desc"
                  :label-level="row.items ? 5 : 3"
                  :label-style="row.items ? 'mini' : ''"
                  :style="{marginTop: `${10}px`}"
                  @click="handleLinkRoute({name: row.name})"
                >

                  <template v-for="(r) in row.items">
                    <we-web-left-doc-nav
                      :key="r.name"
                      :label="r.desc"
                      :label-level="3"
                      @click="handleLinkRoute({name: r.name})"
                    ></we-web-left-doc-nav>
                  </template>

                </we-web-left-doc-nav>
              </template>

            </we-web-left-doc-nav>

          </template>
        </we-web-left-doc-nav>

      </template>

      <template slot="right">

        <router-view></router-view>

      </template>

    </we-web-layout>

  </we-web-body-doc>
</template>

<script>

  import DocConf from '../../examples/docs.config';

  const LogoSrc = require('../assets/weview_logo.png');

  export default {
    components: {},
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
