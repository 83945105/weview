<template>
  <body-doc>

    <header-doc :logo-src="logoSrc" :title="logoText" @click-logo="clickLogo">

      <template v-for="(item, idx) in headerData">
        <header-doc-item
          :key="idx"
          :label="item.desc"
          :value="item.name === pageName"
          @click="handleLinkPage({name: item.name})"
        ></header-doc-item>
      </template>
    </header-doc>

    <layout>

      <template slot="left">

        <left-doc-nav :style="{marginBottom: `${100}px`}">
          <template v-for="(item) in leftData">

            <left-doc-nav
              :key="item.name"
              :value="item.name === $route.name"
              :label="item.desc"
              :label-level="item.items ? 2 : 3"
              :style="{marginTop: `${15}px`}"
              @click="handleLinkRoute({name: item.name})"
            >

              <template v-for="(row) in item.items">
                <left-doc-nav
                  :key="row.name"
                  :value="row.name === $route.name"
                  :label="row.desc"
                  :label-level="row.items ? 5 : 3"
                  :label-style="row.items ? 'mini' : ''"
                  :style="{marginTop: `${10}px`}"
                  @click="handleLinkRoute({name: row.name})"
                >

                  <template v-for="(r) in row.items">
                    <left-doc-nav
                      :key="r.name"
                      :value="r.name === $route.name"
                      :label="r.desc"
                      :label-level="3"
                      @click="handleLinkRoute({name: r.name})"
                    ></left-doc-nav>
                  </template>

                </left-doc-nav>
              </template>

            </left-doc-nav>

          </template>
        </left-doc-nav>

      </template>

      <template slot="right">

        <router-view></router-view>

      </template>

    </layout>

  </body-doc>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  import BodyDoc from '../../body-doc/index.js';
  import HeaderDoc from '../../header-doc/index.js';
  import HeaderDocItem from '../../header-doc-item/index.js';
  import Layout from '../../layout/index.js';
  import LeftDocNav from '../../left-doc-nav/index.js';

  export default {

    components: {
      BodyDoc: BodyDoc,
      HeaderDoc: HeaderDoc,
      HeaderDocItem: HeaderDocItem,
      Layout: Layout,
      LeftDocNav: LeftDocNav
    },

    name: `${Conf.prefixCls}-test`,

    componentName: `${Conf.prefixNameCls}Test`,

    mixins: [Conf],

    props: {
      logoSrc: String,
      logoText: String,
      pageName: String,
      headerData: {
        type: Array,
        default() {
          return [];
        }
      },
      leftData: {
        type: Array,
        default() {
          return [];
        }
      }
    },

    methods: {
      handleLinkPage({name}) {
        this.$router.push({name: name});
      },
      handleLinkRoute({name}) {
        this.$router.push({name: name});
      },
      clickLogo(e) {
        this.$emit('click-logo', e);
      }
    }

  }
</script>
