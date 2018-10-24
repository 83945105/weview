<template>
  <div :class="[
        `${prefixCls}-tooltip`,
        effect === '' ? `${prefixCls}-tooltip-type-dark` : `${prefixCls}-tooltip-type-light`
        ]">
    <div :class="`${prefixCls}-tooltip-inner`">
      <div :class="`${prefixCls}-tooltip-inner-content`">
        <slot>{{content}}</slot>
      </div>
    </div>
    <div class="we-tooltip-arrow we-tooltip-arrow-topLeft"></div>
  </div>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  import Animation from '../../animation/src/Animation.vue';

  export default {

    components: {Animation: Animation},

    name: `${Conf.prefixCls}-tooltip`,

    componentName: `${Conf.prefixNameCls}Tooltip`,

    optionName: `tooltip`,

    mixins: [Conf],

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
    }
  }
</script>
