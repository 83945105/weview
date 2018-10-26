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
        console.log(this.prefixCls)
        return `${this.prefixCls}-main`;
      }
    }
  }
</script>
