<template>
  <div v-if="visible" :class="[maskClass, maskBgClass, fullscreenClass]" :style="maskBgStyle">
    <div :class="[contentClass]">
      <icon :name="iconName" type="primary" :loading="true" :loading-speed="loadingSpeed"></icon>
      <h3 :class="[textClass]">{{text}}</h3>
    </div>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import Icon from '../../icon/src/Icon.vue';

  export default {

    components: {Icon: Icon},

    name: `${Conf.prefixCls}-loading`,

    componentName: `${Conf.prefixNameCls}Loading`,

    mixins: [Conf],

    data() {
      return {
        visible: false,
        parentPosition: undefined
      };
    },

    props: {
      value: Boolean,
      iconName: {
        type: String,
        default: 'loading-drop'
      },
      loadingSpeed: Number,
      target: {
        type: [String, HTMLElement],
        default() {
          return document.body;
        }
      },
      text: {
        type: String,
        default: '加载中'
      },
      background: String,
      customClass: String,
      fullscreen: Boolean
    },

    computed: {
      maskClass() {
        return `${this.prefixCls}-loading-mask`;
      },
      maskBgClass() {
        return `${this.prefixCls}-loading-mask-black`;
      },
      maskBgStyle() {
        return {
          'backgroundColor': this.background
        };
      },
      contentClass() {
        return `${this.prefixCls}-loading-content`;
      },
      textClass() {
        return `${this.prefixCls}-loading-content-text`;
      },
      fullscreenClass() {
        return this.fullscreen ? 'is-full' : undefined;
      }
    },

    watch: {
      value(v) {
        this.visible = v;
      },
      visible(v) {
        this.$emit('input', v);
      }
    },

    mounted() {
      this.parentPosition = this.$el.parentNode.style.position;
      this.$el.parentNode.style.position = 'relative';
      this.visible = this.value;
    },

    beforeDestroy() {
      this.$el.parentNode.style.position = this.parentPosition;
    }

  }
</script>
