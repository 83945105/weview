<template>
  <div :class="[mainClass]">
    <div v-if="$slots.left" :class="[leftClass]">
      <slot name="left"></slot>
    </div>
    <div v-if="$slots.right" :class="[rightClass]">
      <div :class="[rightContentClass]">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import Emitter from '../../../src/mixins/emitter';

  export default {

    name: `${Conf.prefixCls}-layout`,

    componentName: `${Conf.prefixNameCls}Layout`,

    mixins: [Emitter, Conf],

    computed: {
      mainClass() {
        return `${this.prefixCls}-layout-main`;
      },
      leftClass() {
        return `${this.prefixCls}-layout-left`;
      },
      rightClass() {
        return `${this.prefixCls}-layout-right`;
      },
      rightContentClass() {
        return `${this.prefixCls}-layout-right-content`;
      }
    }

  }
</script>
