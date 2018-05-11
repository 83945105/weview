<template>
  <button
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[buttonClass, sizeClass, typeClass, plainClass, disabledClass, roundClass, circleClass]"
    @click="handleClick"
  >
    <icon v-if="iconPosition === 'left'" :name="_iconName" :size="size" :type="iconType" :loading="loading"></icon>
    <span v-if="$slots.default"><slot></slot></span>
    <icon v-if="iconPosition === 'right'" :name="_iconName" :size="size" :type="iconType" :loading="loading"></icon>
  </button>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import Icon from '../../icon/src/Icon.vue';

  export default {

    components: {Icon: Icon},

    name: `${Conf.prefixCls}-button`,

    componentName: `${Conf.prefixNameCls}Button`,

    mixins: [Conf],

    props: {
      size: {//default small large mini
        type: String,
        default: 'default'
      },
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
      circle: Boolean,
      disabled: Boolean,
      loading: Boolean,
      loadingIconName: {
        type: String,
        default: 'loading-drop'
      },
      iconName: String,
      iconType: {
        type: String,
        default: 'default'
      },
      iconPosition: {
        type: String,
        default: 'left'
      }
    },

    computed: {
      buttonClass() {
        return `${this.prefixCls}-button`;
      },
      sizeClass() {
        if(this.size === 'default') {
          return undefined;
        }
        return  `${this.prefixCls}-button-${this.size}`;
      },
      typeClass() {
        return `${this.prefixCls}-button-${this.type}`;
      },
      plainClass() {
        return this.plain ? `is-plain` : '';
      },
      buttonDisabled() {
        return this.loading || this.disabled;
      },
      disabledClass() {
        return this.buttonDisabled ? `is-disabled` : '';
      },
      _iconName() {
        return this.loading ? this.loadingIconName : this.iconName;
      },
      roundClass(){
        return this.round ? `is-round` : '';
      },
      circleClass(){
        return this.circle ? `is-circle` : '';
      }
    },

    methods: {
      handleClick(e) {
        this.$emit('click', e);
      }
    }
  }
</script>
