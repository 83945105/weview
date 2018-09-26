<template>
  <we-scroll>
    <ul class="we-menu">
      <slot></slot>
    </ul>
  </we-scroll>
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

    inject: {
      menuItem: {
        default: null
      }
    },

    data() {
      return {};
    },

    props: {},

    methods: {},

    created() {
      console.log(this.menuItem)
    }

  }
</script>
