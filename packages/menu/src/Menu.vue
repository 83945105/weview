<template>
  <scroll>
    <ul class="we-menu">
      <slot></slot>
    </ul>
  </scroll>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  import Scroll from '../../scroll/src/Scroll.vue';

  export default {

    components: {Scroll: Scroll},

    name: `${Conf.prefixCls}-menu`,

    componentName: `${Conf.prefixNameCls}Menu`,

    optionName: `menu`,

    mixins: [Conf],

    provide() {
      return {
        menu: this
      };
    },

    inject: {
      menuItem: {
        default: null
      }
    },

    data() {
      return {
        indentNum: undefined
      };
    },

    props: {},

    methods: {
      handleItemClick(item) {
        console.log(item)
      }
    },

    created() {
      if (this.menuItem) {
        this.menuItem.hasSubMenu = true;
        this.indentNum = this.menuItem.indentNum + 1;
      }
      this.$on('item-click', this.handleItemClick);
    }

  }
</script>
