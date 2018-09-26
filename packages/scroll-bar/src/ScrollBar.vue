<template>
  <div class="we-scroll-bar"
    :class="[scrollDirection]">
    <slot></slot>
  </div>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  export default {

    name: `${Conf.prefixCls}-scroll-bar`,

    componentName: `${Conf.prefixNameCls}ScrollBar`,

    optionName: `scrollBar`,

    mixins: [Conf],

    props: {
      scrollDirection: {
        type: String,
        default: 'all'
      }
    }

  }
</script>
