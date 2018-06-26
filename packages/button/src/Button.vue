<template>
  <button
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[buttonClass, sizeClass, typeClass, plainClass, disabledClass, shapeClass]"
    @click="handleClick"
  >
    <icon v-if="showLeftIcon" :name="_iconName" :type="iconType" :loading="loading"></icon>
    <span v-if="$slots.default"><slot></slot></span>
    <icon v-if="showRightIcon" :name="_iconName" :type="iconType" :loading="loading"></icon>
  </button>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  import Icon from '../../icon/src/Icon.vue';

  export default {

    components: {Icon: Icon},

    name: `${Conf.prefixCls}-button`,

    componentName: `${Conf.prefixNameCls}Button`,

    mixins: [Conf],

    props: {
      size: {//default large small mini
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
      shape: String,//rectangle round circle
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
      iconType: String,
      iconPosition: {
        type: String,
        default: 'left'
      }
    },

    computed: {
      showLeftIcon() {
        return (this.loading && this.iconPosition === 'left') || (this.iconName && this.iconPosition === 'left');
      },
      showRightIcon() {
        return (this.loading && this.iconPosition === 'right') || (this.iconName && this.iconPosition === 'right');
      },
      buttonClass() {
        return `${this.prefixCls}-button`;
      },
      sizeClass() {
        if(this.size === 'default') {
          return undefined;
        }
        return `${this.prefixCls}-button-${this.size}`;
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
      shapeClass() {
        switch (this.shape) {
          case 'rectangle':
            return 'is-rectangle';
          case 'round':
            return 'is-round';
          case 'circle':
            return 'is-circle';
          default:
            return undefined;
        }
      }
    },

    methods: {
      handleClick(e) {
        this.$emit('click', e);
      }
    }
  }
</script>
