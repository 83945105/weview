<template>
  <div>
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
           style="background-color: #3db670;border: 1px solid red;"
           :style="{
            height: this._height ? `${this._height - headerHeight - footerHeight - 1}px` : undefined
           }"
      >
        <slot></slot>
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
        widthUnit: 'px',
        heightUnit: 'px',
        isDrag: false,
        left: '50%',
        top: '50%',
        headerDom: undefined,
        footerDom: undefined
      };
    },

    props: {
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
      _height() {
        return this.height ? parseInt(`${this.height}`.replace(/[^0-9]/g, "")) : undefined;
      },
      style() {
        return {
          width: this._width ? this._width > 100 ? `${this._width}px` : `${this._width}%` : undefined,
          height: this._height ? this._height > 100 ? `${this._height}px` : `${this._height}%` : undefined,
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

    watch: {
      width() {
        this.initWidthUnit();
      },
      height() {
        this.initHeightUnit();
      }
    },

    methods: {
      initWidthUnit() {
        if (typeof this.width === 'string') {
          this.widthUnit = this.width.replace(/[0-9]/g, "");
        }
      },
      initHeightUnit() {
        if (typeof this.height === 'string') {
          this.heightUnit = this.height.replace(/[0-9]/g, "");
        }
      },
      getWindowWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      },
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

    created() {
      this.initWidthUnit();
      this.initHeightUnit();
    },

    mounted() {
      this.headerDom = this.$el.querySelector(`.${this.headerClass}`);
      this.footerDom = this.$el.querySelector(`.${this.footClass}`);
      console.log(this.headerHeight)
    }

  }
</script>
