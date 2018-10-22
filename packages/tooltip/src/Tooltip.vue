<template>
  <div :class="[`${prefixCls}-tooltip-rel`]"
       @mouseenter="handleMouseEnter"
       @mouseleave="handleMouseLeave"
  >
    <div ref="reference">
      <slot></slot>
    </div>
    <div ref="popper"
         v-show="popperVisible"
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
      }
    },

    data() {
      return {
        timeoutIndex: undefined
      };
    },

    methods: {
      handleMouseEnter(e) {
        if (this.timeoutIndex) {
          window.clearTimeout(this.timeoutIndex);
        }
        this.timeoutIndex = setTimeout(() => this.popperVisible = true, 500);
      },
      handleMouseLeave(e) {

      }
    },

    mounted() {
      this.updatePopper();
    }
  }
</script>
