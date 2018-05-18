<template>
  <div v-show="visible">
    <div :class="[maskClass, maskBgClass, customMaskClass]" @click="maskClose"></div>
    <transition name="fade">
      <div :class="[layerClass, customClass]"
           :style="style"
      >
        <div v-if="showHeader"
             :class="[headerClass, dragClass]"
             @mousedown="mousedown"
        >
          <slot name="header">
            <div :class="[titleClass]">{{title}}</div>
            <div v-if="showClose" :class="closeIconClass">
              <icon name="close" @click.native="close"></icon>
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
            <we-button @click="handleClickCancelButton">{{cancelButtonText}}</we-button>
            <we-button type="primary" @click="handleClickConfirmButton">{{confirmButtonText}}</we-button>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf.js';

  import WeButton from '../../button/src/Button.vue';
  import WeIcon from '../../icon/src/Icon.vue';

  export default {//is-position-auto 居中样式

    components: {WeButton: WeButton, Icon: WeIcon},

    name: `${Conf.prefixCls}-layer`,

    componentName: `${Conf.prefixNameCls}Layer`,

    optionName: `layer`,

    mixins: [Conf],

    data() {
      return {
        visible: true,
        isDrag: false,
        x: 300,
        y: 200,
        layerDom: undefined,
        headerDom: undefined,
        footerDom: undefined,

        windowWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        windowHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,

        cx: 0,
        cy: 0
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
      left: Number,
      top: Number,
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
        default: '标题'
      },
      footerAlign: {//left center right
        type: String,
        default: 'right'
      },
      position: {
        type: String,
        default: 'center'
      },
      drag: Boolean,
      customClass: String,
      customMaskClass: String,
      confirmButtonText: {
        type: String,
        default: '确定'
      },
      cancelButtonText: {
        type: String,
        default: '取消'
      },
      showClose: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      escCloseable: {
        type: Boolean,
        default: true
      },
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
      headerHeight() {
        return (this.showHeader && this.headerDom) ? this.headerDom.clientHeight : 0;
      },
      footerHeight() {
        return (this.showFooter && this.footerDom) ? this.footerDom.clientHeight : 0;
      },
      __contentHeight() {
        if (!this._height) {
          return undefined;
        }
        if (this._height > 100) {
          return `${this._height - this.headerHeight - this.footerHeight - 1}px`;
        }
        let wh = this.windowHeight * this._height / 100;
        let hh = this.headerHeight;
        let fh = this.footerHeight;
        return `${(1 - hh / wh - fh / wh) * 100}%`;
      },
      style() {
        return {
          width: this.__width,
          height: this.__height,
          left: `${this.x}px`,
          top: `${this.y}px`
        };
      },
      maskClass() {
        return `${this.prefixCls}-layer-mask`;
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
      closeIconClass() {
        return `${this.prefixCls}-layer-prompt-top-close`;
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
      },
      dragClass() {
        return this.drag ? 'move' : undefined;
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

    methods: {
      close() {
        this.$emit('input', false);
      },
      maskClose() {
        if (this.maskClosable) {
          this.close();
        }
      },
      EscClose(e) {
        if (this.visible && this.escCloseable) {
          if (e.keyCode === 27) {
            this.close();
          }
        }
      },
      handleClickCancelButton(e) {
        this.$emit('click-cancel', e);
        this.close();
      },
      handleClickConfirmButton(e) {
        this.$emit('click-confirm', e, this.close);
      },
      initPosition() {
        let {offsetWidth: w, offsetHeight: h} = this.layerDom;
        if (this.left !== undefined) {
          this.x = this.left;
        } else {
          this.x = (this.windowWidth - w) / 2;
        }
        if (this.top !== undefined) {
          this.y = this.top;
        } else {
          this.y = (this.windowHeight - h) / 2;
        }
      },
      mousedown(e) {
        if (!this.visible || !this.drag) {
          return;
        }
        e = e || window.event;
        this.cx = e.clientX - this.x;
        this.cy = e.clientY - this.y;
        document.body.className += ` ${this.prefixCls}-common-select-none`;
        document.addEventListener('mousemove', this.documentMousemoveEvent);
      },
      documentMouseupEvent(e) {
        if (!this.visible || !this.drag) {
          return;
        }
        document.body.className = document.body.className.replace(` ${this.prefixCls}-common-select-none`, "");
        document.removeEventListener('mousemove', this.documentMousemoveEvent);
      },
      documentMousemoveEvent(e) {
        e = e || window.event;
        this.x = e.clientX - this.cx;
        this.y = e.clientY - this.cy;
      },
      windowResizeEvent(e) {
        this.windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.initPosition();
      }
    },

    created() {
      document.addEventListener('mouseup', this.documentMouseupEvent);
      window.addEventListener('resize', this.windowResizeEvent);
      document.addEventListener('keydown', this.EscClose);
    },

    mounted() {
      this.layerDom = this.$el.querySelector(`.${this.layerClass}`);
      this.headerDom = this.$el.querySelector(`.${this.headerClass}`);
      this.footerDom = this.$el.querySelector(`.${this.footClass}`);
      this.initPosition();
      this.visible = this.value;
    },

    beforeDestroy() {
      document.removeEventListener('mouseup', this.documentMouseupEvent);
      window.removeEventListener('resize', this.windowResizeEvent);
      document.removeEventListener('keydown', this.EscClose);
    }

  }
</script>
