<template>
  <button
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[buttonClass, sizeClass, typeClass, plainClass]"
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  export default {
    name: `${Conf.prefixCls}-button`,

    componentName: `${Conf.prefixNameCls}Button`,

    mixins: [Conf],

    props: {
      size: String,//small large
      type: {//default primary success info warning danger
        type: String,
        default: 'default'
      },
      nativeType: {//button submit reset
        type: String,
        default: 'button'
      },
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      disabled: Boolean,
      loading: Boolean
    },

    computed: {
      buttonClass() {
        return `${this.prefixCls}-button`;
      },
      sizeClass() {
        return this.size ? `${this.prefixCls}-button-${this.size}` : '';
      },
      typeClass() {
        return `${this.prefixCls}-button-${this.type}`;
      },
      plainClass() {
        return this.plain ? `is-plain` : '';
      },
      buttonDisabled() {
        return this.disabled
      }
    },

    methods: {
      handleClick(e) {
        this.$emit('click', e);
      }
    }
  }
</script>
