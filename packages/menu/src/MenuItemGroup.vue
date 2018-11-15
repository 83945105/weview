<template>
  <li :class="[
      `${prefixCls}-menu-item-group`,
      {
        'is-horizontal': menu.mode === 'horizontal',
        'we-menu-item-group-split-vertical-left-space': beforeLine && menu.mode === 'horizontal',
        'we-menu-item-group-split-vertical-right-space': afterLine && menu.mode === 'horizontal'
      }]"
  >

    <template v-if="beforeLine">
      <div v-if="menu.mode === 'vertical'"
           :class="[`${prefixCls}-menu-item-group-split-horizontal`]"
           :style="{
            backgroundColor: menu.backgroundColor || rootMenu.backgroundColor
           }"
      ><em :style="{backgroundColor: menu.groupLineColor || rootMenu.groupLineColor}"></em></div>
      <div v-else-if="menu.mode === 'horizontal'"
           :class="[`${prefixCls}-menu-item-group-split-vertical is-before-line`]"
           :style="{
            backgroundColor: menu.backgroundColor || rootMenu.backgroundColor
           }"
      ><em :style="{
            height: `${(menu.height || menu.iconWidth) - 16}px`,
            backgroundColor: menu.groupLineColor || rootMenu.groupLineColor
           }"></em></div>
    </template>

    <h3 v-show="showTitle && title && menu.mode === 'vertical'"
        :class="[`${prefixCls}-menu-item-group-title`]"
        :style="[{
          paddingLeft: `${indentNum * 15 + menu.iconWidth}px`,
          backgroundColor: menu.backgroundColor || rootMenu.backgroundColor
        }]"
    >{{title}}</h3>

    <ul>
      <slot></slot>
    </ul>

    <template v-if="afterLine">
      <div v-if="menu.mode === 'vertical'"
           :class="[`${prefixCls}-menu-item-group-split-horizontal`]"
           :style="{
            backgroundColor: menu.backgroundColor || rootMenu.backgroundColor
           }"
      ><em :style="{backgroundColor: menu.groupLineColor || rootMenu.groupLineColor}"></em></div>
      <div v-else-if="menu.mode === 'horizontal'"
           :class="[`${prefixCls}-menu-item-group-split-vertical is-after-line`]"
           :style="{
            backgroundColor: menu.backgroundColor || rootMenu.backgroundColor
           }"
      ><em :style="{
            height: `${(menu.height || menu.iconWidth) - 16}px`,
            backgroundColor: menu.groupLineColor || rootMenu.groupLineColor
           }"></em></div>
    </template>

    <div :class="[`${prefixCls}-common-clear`]"></div>
  </li>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  export default {

    name: `${Conf.prefixCls}-menu-item-group`,

    componentName: `${Conf.prefixNameCls}MenuItemGroup`,

    optionName: `menuItemGroup`,

    mixins: [Conf],

    provide() {
      return {
        menuItemGroup: this
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
        showTitle: !this.menu.isCollapse,
      };
    },

    props: {
      title: String,
      beforeLine: Boolean,//是否显示前置分割线
      afterLine: Boolean//是否显示后置分割线
    },

    created() {
      this.menu.addMenuItemGroup(this);
    }

  }
</script>
