<template>
  <div :class="[`${prefixCls}-tooltip-rel`]">
    <div ref="reference"
         @mouseenter="handleMouseEnter"
         @mouseleave="handleMouseLeave"
    >
      <slot></slot>
    </div>
    <div v-show="popperVisible"
         ref="popper"
         :class="[
        `${prefixCls}-tooltip`,
        effect === '' ? `${prefixCls}-tooltip-type-dark` : `${prefixCls}-tooltip-type-light`
       ]">
      <div :class="`${prefixCls}-tooltip-inner`">
        <div :class="`${prefixCls}-tooltip-inner-content`">
          <slot name="content">{{content}}</slot>
        </div>
      </div>
      <div class="we-tooltip-arrow we-tooltip-arrow-topLeft"></div>
    </div>
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
      content: String,//显示内容
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
