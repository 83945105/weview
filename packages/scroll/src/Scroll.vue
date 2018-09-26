<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  export default {

    name: `${Conf.prefixCls}-scroll`,

    componentName: `${Conf.prefixNameCls}Scroll`,

    optionName: `scroll`,

    mixins: [Conf]

  }
</script>
