<template>
  <div></div>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';
  import Tooltip from '../../tooltip/src/Tooltip.vue';

  export default {

    component: {Tooltip: Tooltip},

    name: `${Conf.prefixCls}-popover`,

    componentName: `${Conf.prefixNameCls}Popover`,

    optionName: `popover`,

    mixins: [Conf],

    render(h) {

    }
  }
</script>
