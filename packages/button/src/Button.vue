<template>
  <button
    :class="[buttonClass, sizeClass, typeClass]"
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
    <i class="we-icon we-audio"></i>
  </button>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  export default {
    name: `${Conf.prefixCls}-button`,

    componentName: `${Conf.prefixNameCls}Button`,

    mixins: [Conf],

    props: {
      size: {
        type: String,
        default: 'default'
      },
      type: {
        type: String,
        default: 'default'
      },
      round: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      buttonClass() {
        return `${this.prefixCls}-button`;
      },
      sizeClass() {
        return `${this.prefixCls}-button-${this.size}`;
      },
      typeClass() {
        return `${this.prefixCls}-button-${this.type}`;
      }
    },

    methods: {
      handleClick(e) {
        this.$emit('click', e);
      }
    }
  }
</script>
