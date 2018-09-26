<template>
  <li class="we-menu-item">
    <div class="we-menu-item-title is-active"
         style="padding-left: 15px;">
      <div class="we-menu-item-title-arrow">
        <we-icon name="angle-down"></we-icon>
      </div>
      <div class="we-menu-item-title-inner">
        <div class="we-menu-item-title-inner-icon">
          <we-icon name="edit"></we-icon>
        </div>
        <div class="we-menu-item-title-inner-text">
          <slot></slot>
        </div>
      </div>
    </div>


    <slot name="subMenu"></slot>

  </li>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  import Icon from '../../icon/src/Icon.vue';

  export default {

    components: {Icon: Icon},

    name: `${Conf.prefixCls}-menu-item`,

    componentName: `${Conf.prefixNameCls}MenuItem`,

    optionName: `menuItem`,

    mixins: [Conf],

    provide: {
      menuItem: this
    },

    data() {
      return {
        selected: this.value,
        hasSubMenu: false
      };
    },

    props: {
      value: Boolean
    }

  }
</script>
