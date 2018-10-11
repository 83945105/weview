<template>
  <li class="we-menu-item-group">
    <div v-if="menu.mode === 'horizontal'" class="we-menu-item-group-split-vertical"
         :style="{
          height: `${menu.height - 5 }px`
         }"
    ></div>
    <div v-else class="we-menu-item-group-split-horizontal"></div>
    <h3 v-show="showTitle && title" class="we-menu-item-group-title" :style="[indentStyle]">{{title}}</h3>
    <ul>
      <!--<li v-show="showTitle && title" class="we-menu-item-group-title" :style="[indentStyle]">{{title}}</li>-->
      <slot></slot>
    </ul>
  </li>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  export default {

    name: `${Conf.prefixCls}-menu-group`,

    componentName: `${Conf.prefixNameCls}MenuGroup`,

    optionName: `menuGroup`,

    mixins: [Conf],

    provide() {
      return {
        menuGroup: this
      };
    },

    inject: {
      indentNum: {
        default: 0
      },
      rootMenu: {
        default: null
      },
      menu: {
        default: null
      },
      menuItem: {
        default: null
      }
    },

    data() {
      return {
        showTitle: true
      };
    },

    props: {
      title: String
    },

    computed: {
      indentStyle() {
        return {
          paddingLeft: `${this.indentNum * 15 + 50}px`
        };
      }
    },

    watch: {
      'rootMenu.collapse': {
        handler(v) {
          this.showTitle = !v;
        },
        deep: true
      }
    },

    created() {
      if (this.rootMenu) {
        this.showTitle = !this.rootMenu.collapse;
      }
    }

  }
</script>
