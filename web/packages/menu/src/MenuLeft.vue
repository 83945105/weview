<template>
  <div :class="menuClass">
    <slot></slot>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import Emitter from '../../../src/mixins/emitter';

  export default {

    name: `${Conf.prefixCls}-menu-left`,

    componentName: `${Conf.prefixNameCls}MenuLeft`,

    mixins: [Emitter, Conf],

    computed: {
      menuClass() {
        return `${this.prefixCls}-menu`;
      }
    }
  }
</script>
