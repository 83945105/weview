<template>
  <button :disabled="buttonDisabled"
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

    optionName: 'button',

    mixins: [Conf],

    props: {
      size: String,//default large small mini
      type: String,//default primary success info warning danger text
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
      buttonSize() {
        return this.size || (this.$WEVIEW || {}).size;
      },
      sizeClass() {
        return this.buttonSize ? `${this.prefixCls}-button-size-${this.buttonSize}` : undefined;
      },
      buttonType() {
        return this.type || (this.$WEVIEW || {}).type;
      },
      typeClass() {
        return this.buttonType ? `${this.prefixCls}-button-type-${this.buttonType}` : undefined;
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
