<template>
  <button :disabled="buttonDisabled"
          :autofocus="autofocus"
          :type="nativeType"
          :class="[
            `${prefixCls}-button`,
            sizeClass,
            `${prefixCls}-button-type-${type}`,
            shapeClass,
            {
              'is-plain': plain,
              'is-disabled': buttonDisabled
            }
          ]"
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
      size: {//default large small mini
        type: String,
        default() {
          return !this.$WEVIEW || this.$WEVIEW.size === '' ? 'default' : this.$WEVIEW.size;
        }
      },
      type: {//default primary success info warning danger text
        type: String,
        default: 'default'
      },
      nativeType: {//button submit reset
        type: String,
        default: 'button'
      },
      plain: Boolean,//朴素风格
      shape: String,//形状 rectangle round circle
      autofocus: Boolean,
      round: Boolean,//圆角
      circle: Boolean,//圆形
      disabled: Boolean,//禁用
      loading: Boolean,//开启加载特效
      loadingIconName: {//加载特效的图标名称
        type: String,
        default: 'loading-snakes'
      },
      iconName: String,//图标名称
      iconType: String,//图标类型
      iconPosition: {//图标位置 left 左边 right 右边
        type: String,
        default: 'left',
        validator(value) {
          return ['left', 'right'].indexOf(value) !== -1;
        }
      }
    },

    computed: {
      buttonDisabled() {
        return this.loading || this.disabled;
      },
      showLeftIcon() {
        return (this.loading && this.iconPosition === 'left') || (this.iconName !== void 0 && this.iconPosition === 'left');
      },
      showRightIcon() {
        return (this.loading && this.iconPosition === 'right') || (this.iconName !== void 0 && this.iconPosition === 'right');
      },
      sizeClass() {
        if (this.type === 'text') {
          return `${this.prefixCls}-button-size-text-${this.size}`;
        }
        return `${this.prefixCls}-button-size-${this.size}`;
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
      },
      _iconName() {
        return this.loading ? this.loadingIconName : this.iconName;
      }
    },

    methods: {
      handleClick(e) {
        this.$emit('click', e);
      }
    }
  }
</script>
