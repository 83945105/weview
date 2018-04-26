<template>
  <div>
    <web-api-doc-head-menu
      :label="projectName"
      :logo-src="logoSrc"
    >
      <web-api-doc-head-item label="首页"></web-api-doc-head-item>
      <web-api-doc-head-item label="组件" :value="true"></web-api-doc-head-item>
      <web-api-doc-head-item label="开发版"></web-api-doc-head-item>
    </web-api-doc-head-menu>
    <web-api-doc-content>
      <web-api-doc-left-menu>

        <template v-for="(row) in docs">

          <template v-if="row.items">
            <web-api-doc-left-group-one :key="row.name" :label="row.desc">

              <template v-for="(item) in row.items">

                <template v-if="!item.items">

                  <web-api-doc-left-item :value="$route.name == item.name" :label="item.desc" :key="item.name"
                                         @click="handleLinkRoute(item)"></web-api-doc-left-item>

                </template>

              </template>

              <template v-for="(item) in row.items">

                <template v-if="item.items">

                  <web-api-doc-left-group-two :label="item.name" :key="item.name">

                    <template v-for="(m) in item.items">

                      <template v-if="!m.items">
                        <web-api-doc-left-item :value="$route.name == m.name" :label="m.name + ' ' + m.desc"
                                               :key="m.name" @click="handleLinkRoute(m)"></web-api-doc-left-item>
                      </template>

                    </template>

                  </web-api-doc-left-group-two>

                  <template v-for="(m) in item.items">

                    <template v-if="m.items">

                      <web-api-doc-left-group-two :label="m.name" :key="m.name">

                        <template v-for="(o) in m.items">

                          <template v-if="!o.items">
                            <web-api-doc-left-item :value="$route.name == o.name" :label="o.name + ' ' + o.desc"
                                                   :key="o.name" @click="handleLinkRoute(o)"></web-api-doc-left-item>
                          </template>

                        </template>

                      </web-api-doc-left-group-two>

                    </template>

                  </template>

                </template>

              </template>

            </web-api-doc-left-group-one>

          </template>

        </template>
      </web-api-doc-left-menu>
      <web-api-doc-right-content>
        <router-view></router-view>
      </web-api-doc-right-content>
    </web-api-doc-content>
  </div>
</template>

<script>

  import WebApiDocHeadMenu from "../../web/packages/web-api-doc/head/src/Menu";
  import WebApiDocLeftMenu from "../../web/packages/web-api-doc/left/src/Menu";
  import WebApiDocLeftGroupOne from "../../web/packages/web-api-doc/left/src/GroupOne";
  import WebApiDocLeftItem from "../../web/packages/web-api-doc/left/src/Item";
  import WebApiDocRightContent from "../../web/packages/web-api-doc/right/src/Content";
  import WebApiDocContent from "../../web/packages/web-api-doc/content/src/Content";
  import WebApiDocHeadItem from "../../web/packages/web-api-doc/head/src/Item";

  import DocConf from '../../examples/docs.config';
  import WebApiDocLeftGroupTwo from "../../web/packages/web-api-doc/left/src/GroupTwo";

  const LogoSrc = require('../assets/weview_logo.png');

  export default {
    components: {
      WebApiDocLeftGroupTwo,
      WebApiDocHeadItem,
      WebApiDocContent,
      WebApiDocRightContent,
      WebApiDocLeftItem,
      WebApiDocLeftGroupOne,
      WebApiDocLeftMenu,
      WebApiDocHeadMenu
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
