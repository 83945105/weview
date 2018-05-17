<template>
  <div v-show="visible">
    <div :class="[maskBgClass]"></div>
    <div class="is-position-auto"
         :class="[layerClass]"
         :style="style"
    >
      <div v-if="showHeader"
           class="move"
           :class="[headerClass]"
           @mousedown="mousedown"
           @mouseup="mouseup"
           @mousemove="mousemove"
      >
        <slot name="header">
          <div :class="[titleClass]">{{title}}</div>
          <div class="we-layer-prompt-top-close">
            <icon name="close"></icon>
          </div>
        </slot>
      </div>
      <div :class="[contentClass]"
           :style="{
            height: __contentHeight
           }"
      >
        <slot :width="__width" :height="__contentHeight"></slot>
      </div>
      <div v-if="showFooter"
           :class="[footClass, footAlignClass]">
        <slot name="footer">
          <we-button type="primary">确定</we-button>
          <we-button>取消</we-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf.js';

  import WeButton from '../../button/src/Button.vue';
  import WeIcon from '../../icon/src/Icon.vue';

  export default {

    components: {WeButton: WeButton, Icon: WeIcon},

    name: `${Conf.prefixCls}-layer`,

    componentName: `${Conf.prefixNameCls}Layer`,

    optionName: `layer`,

    mixins: [Conf],

    data() {
      return {
        visible: this.value,
        isDrag: false,
        left: '50%',
        top: '50%',
        headerDom: undefined,
        footerDom: undefined
      };
    },

    props: {
      value: Boolean,
      width: {
        type: [Number, String],
        default: 300
      },
      height: {
        type: [Number, String]
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      showFooter: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '提示'
      },
      footerAlign: {//left center right
        type: String,
        default: 'right'
      }
    },

    computed: {
      _width() {
        return this.width ? parseInt(`${this.width}`.replace(/[^0-9]/g, "")) : undefined;
      },
      __width() {
        return this._width ? this._width > 100 ? `${this._width}px` : `${this._width}%` : undefined;
      },
      _height() {
        return this.height ? parseInt(`${this.height}`.replace(/[^0-9]/g, "")) : undefined;
      },
      __height() {
        return this._height ? this._height > 100 ? `${this._height}px` : `${this._height}%` : undefined;
      },
      __contentHeight() {
        if (!this._height) {
          return undefined;
        }
        if (this._height > 100) {
          return `${this._height - this.headerHeight - this.footerHeight - 1}px`;
        }
        let wh = this.getWindowHeight() * this._height / 100;
        let hh = this.headerHeight;
        let fh = this.footerHeight;
        return `${(1 - hh/wh - fh/wh) * 100}%`;
      },
      style() {
        return {
          width: this.__width,
          height: this.__height,
          left: this.left,
          top: this.top
        };
      },
      headerHeight() {
        return (this.showHeader && this.headerDom) ? this.headerDom.clientHeight : 0;
      },
      footerHeight() {
        return (this.showFooter && this.footerDom) ? this.footerDom.clientHeight : 0;
      },
      maskBgClass() {
        return `${this.prefixCls}-layer-mask-bg`;
      },
      layerClass() {
        return `${this.prefixCls}-layer-prompt`;
      },
      headerClass() {
        return `${this.prefixCls}-layer-prompt-top`;
      },
      titleClass() {
        return `${this.prefixCls}-layer-prompt-top-title`;
      },
      contentClass() {
        return `${this.prefixCls}-layer-prompt-content`;
      },
      footClass() {
        return `${this.prefixCls}-layer-prompt-bottom`;
      },
      footAlignClass() {
        switch (this.footerAlign) {
          case 'left':
            return 'tal';
          case 'center':
            return 'tac';
          default:
            return undefined;
        }
      }
    },

    watch: {},

    methods: {
      getWindowHeight() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      },
      mousedown(e) {
        this.isDrag = true;
      },
      mouseup(e) {
        this.isDrag = false;
      },
      mousemove(e) {
        if (this.isDrag) {

        }

      }
    },

    mounted() {
      this.headerDom = this.$el.querySelector(`.${this.headerClass}`);
      this.footerDom = this.$el.querySelector(`.${this.footClass}`);
    }

  }
</script>
