<template>
  <div :class="[`${prefixCls}-tooltip-rel`]">
    <div ref="reference"
         @mouseenter="handleMouseEnter"
         @mouseleave="handleMouseLeave"
    >
      <slot></slot>
    </div>
    <animation name="fadeIn">
      <div v-show="popperVisible"
           ref="popper"
           :class="[
            `${prefixCls}-tooltip`,
            offsetClass,
            effect === 'dark' ? `${prefixCls}-tooltip-type-dark` : `${prefixCls}-tooltip-type-light`
           ]">
        <div :class="`${prefixCls}-tooltip-inner`">
          <div :class="`${prefixCls}-tooltip-inner-content`">
            <slot name="content">{{content}}</slot>
          </div>
        </div>
        <div :class="[`${prefixCls}-tooltip-arrow`, arrowPlacementClass]"></div>
      </div>
    </animation>
  </div>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';
  import Popper from '../../src/mixins/popper.js';

  import Animation from '../../animation/src/Animation.vue';

  export default {

    components: {Animation: Animation},

    name: `${Conf.prefixCls}-tooltip`,

    componentName: `${Conf.prefixNameCls}Tooltip`,

    optionName: `tooltip`,

    mixins: [Conf, Popper],

    props: {
      effect: {
        type: String,//主题 dark light
        default: 'dark',
        validator(value) {
          return ['dark', 'light'].indexOf(value) !== -1;
        }
      },
      content: [String, Number],//显示内容
      placement: {//出现的位置
        type: String,
        default: 'bottom',
        validator(value) {
          return [
            "top",
            "top-start",
            "top-end",
            "bottom",
            "bottom-start",
            "bottom-end",
            "left",
            "left-start",
            "left-end",
            "right",
            "right-start",
            "right-end"
          ].indexOf(value) !== -1;
        }
      },
      openDelay: {//出现延迟
        type: Number,
        default: 0
      },
      hideDelay: {//隐藏延迟, 为0时不会自动隐藏
        type: Number,
        default: 100
      }
    },

    data() {
      return {
        openDelayIndex: undefined,
        hideDelayIndex: undefined
      };
    },

    computed: {
      offsetClass() {
        switch (this.placement) {
          case 'top':
            return `is-top`;
          case 'top-start':
            return `is-top`;
          case 'top-end':
            return `is-top`;
          case 'bottom':
            return `is-bottom`;
          case 'bottom-start':
            return `is-bottom`;
          case 'bottom-end':
            return `is-bottom`;
          case 'left':
            return `is-left`;
          case 'left-start':
            return `is-left`;
          case 'left-end':
            return `is-left`;
          case 'right':
            return `is-right`;
          case 'right-start':
            return `is-right`;
          case 'right-end':
            return `is-right`;
          default:
            return undefined;
        }
      },
      arrowPlacementClass() {
        switch (this.placement) {
          case 'top':
            return `${this.prefixCls}-tooltip-arrow-top`;
          case 'top-start':
            return `${this.prefixCls}-tooltip-arrow-topLeft`;
          case 'top-end':
            return `${this.prefixCls}-tooltip-arrow-topRight`;
          case 'bottom':
            return `${this.prefixCls}-tooltip-arrow-bottom`;
          case 'bottom-start':
            return `${this.prefixCls}-tooltip-arrow-bottomLeft`;
          case 'bottom-end':
            return `${this.prefixCls}-tooltip-arrow-bottomRight`;
          case 'left':
            return `${this.prefixCls}-tooltip-arrow-left`;
          case 'left-start':
            return `${this.prefixCls}-tooltip-arrow-leftTop`;
          case 'left-end':
            return `${this.prefixCls}-tooltip-arrow-leftBottom`;
          case 'right':
            return `${this.prefixCls}-tooltip-arrow-right`;
          case 'right-start':
            return `${this.prefixCls}-tooltip-arrow-rightTop`;
          case 'right-end':
            return `${this.prefixCls}-tooltip-arrow-rightBottom`;
          default:
            return undefined;
        }
      }
    },

    methods: {
      handleMouseEnter(e) {
        if (this.hideDelayIndex) {
          window.clearTimeout(this.hideDelayIndex);
        }
        if (this.openDelayIndex) {
          window.clearTimeout(this.openDelayIndex);
        }
        this.openDelayIndex = setTimeout(() => {
          this.popperVisible = true;
        }, this.openDelay);
      },
      handleMouseLeave(e) {
        if (this.hideDelayIndex) {
          window.clearTimeout(this.hideDelayIndex);
        }
        if (this.openDelayIndex) {
          window.clearTimeout(this.openDelayIndex);
        }
        this.hideDelayIndex = setTimeout(() => {
          this.popperVisible = false;
        }, this.hideDelay);
      },
    }

  }
</script>
