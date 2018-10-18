<template>
  <div class="we-tooltip we-tooltip-type-dark" style="top: 48px; left: 373px;">
    <div class="we-tooltip-inner">
      <div class="we-tooltip-inner-content">
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
            "left",
            "top",
            "right",
            "bottom",
            "topLeft",
            "topRight",
            "bottomLeft",
            "bottomRight",
            "leftTop",
            "leftBottom",
            "rightTop",
            "rightBottom"
          ].indexOf(value) !== -1;
        }
      }
    }
  }
</script>
