<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>

  import Conf from '../../../src/mixins/conf.js';

  export default {

    name: `${Conf.prefixCls}-animation`,

    componentName: `${Conf.prefixNameCls}Animation`,

    props: {
      name: {
        type: String,
        default: 'fade'
      }
    }
  }
</script>
