<template>
  <div :class="[bodyClass]">
    <slot></slot>
  </div>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  export default {

    name: `${Conf.prefixCls}-body-doc`,

    componentName: `${Conf.prefixNameCls}BodyDoc`,

    computed: {
      bodyClass() {
        return `${this.prefixCls}-main`;
      }
    }
  }
</script>
