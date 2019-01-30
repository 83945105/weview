<template>
  <div>
    <div v-if="visible && showMask"
         :class="[`${prefixCls}-layer-mask`, `${prefixCls}-layer-mask-bg`, customMaskClass]"
         :style="{
          zIndex: nextZIndex - 1
         }"
         @click.stop="maskClose"
    ></div>
    <animation :name="_animationName_" @before-enter="animationBeforeEnter" @after-leave="animationAfterLeave">
      <div v-show="visible" :id="id" :class="[layerClass, customClass]" :style="style" tabindex="0">
        <div v-if="showHeader" :class="[headerClass, dragClass]" @mousedown="dragMousedown">
          <slot name="header">
            <div :class="`${prefixCls}-layer-header-title`">
              <div v-if="iconName" :class="`${prefixCls}-layer-header-title-icon`">
                <icon :name="iconName"></icon>
              </div>
              <div :class="[`${prefixCls}-layer-header-title-text`]" :title="title">{{title}}</div>
            </div>
            <div :class="`${prefixCls}-layer-header-icon-btn`">
              <div class="title-icon" v-show="false">
                <icon name="minimize"></icon>
              </div>
              <div class="title-icon" v-show="false">
                <icon name="maximize"></icon>
                <!--<icon name="maximize-restore"></icon>-->
              </div>
              <div class="title-icon" v-if="showClose">
                <icon name="close" @click.native="close"></icon>
              </div>
            </div>
          </slot>
        </div>
        <div :class="`${prefixCls}-layer-content`" :style="{height: __contentHeight__}">
          <icon v-if="showClose && !showHeader" name="close" :class="`${prefixCls}-message-button-close`"
                @click.native="close"></icon>
          <slot :width="__width__" :height="__contentHeight__"></slot>
        </div>
        <div v-if="showFooter" :class="[footerClass]">
          <slot name="footer">
            <div :class="[`${prefixCls}-layer-footer-inner`, footerAlignClass]">
              <we-button v-bind="cancelButtonOptions__"
                         @click="handleClickCancelButton">
                {{cancelButtonText}}
              </we-button>
              <we-button type="primary"
                         v-bind="confirmButtonOptions__"
                         @click="handleClickConfirmButton">
                {{confirmButtonText}}
              </we-button>
            </div>
          </slot>
        </div>

        <div v-if="resize || resizeLeftTop" :class="[resizeClass]" class="drag-up-left"
             @mousedown="resizeLeftTopMousedown"></div>
        <div v-if="resize || resizeTop" :class="[resizeClass]" class="drag-up"
             @mousedown="resizeTopMousedown"></div>
        <div v-if="resize || resizeRightTop" :class="[resizeClass]" class="drag-up-right"
             @mousedown="resizeRightTopMousedown"></div>
        <div v-if="resize || resizeLeft" :class="[resizeClass]" class="drag-left"
             @mousedown="resizeLeftMousedown"></div>
        <div v-if="resize || resizeRight" :class="[resizeClass]" class="drag-right"
             @mousedown="resizeRightMousedown"></div>
        <div v-if="resize || resizeLeftBottom" :class="[resizeClass]" class="drag-down-left"
             @mousedown="resizeLeftBottomMousedown"></div>
        <div v-if="resize || resizeBottom" :class="[resizeClass]" class="drag-down"
             @mousedown="resizeBottomMousedown"></div>
        <div v-if="resize || resizeRightBottom" :class="[resizeClass]" class="drag-down-right"
             @mousedown="resizeRightBottomMousedown"></div>
      </div>
    </animation>
  </div>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';
  import Global from '../../src/mixins/global.js';
  import PopupManager from '../../src/utils/popup.js';

  import Button from '../../button/src/Button.vue';
  import Icon from '../../icon/src/Icon.vue';
  import Animation from '../../animation/src/Animation.vue';
  import {addInstance, getId} from "./layer.js";

  export default {

    components: {WeButton: Button, Icon: Icon, Animation: Animation},

    name: `${Conf.prefixCls}-layer`,

    componentName: `${Conf.prefixNameCls}Layer`,

    optionName: `layer`,

    mixins: [Conf, Global],

    props: {
      value: Boolean,
      width: {
        type: [Number, String],
        default: 300
      },
      height: {
        type: [Number, String]
      },
      zIndex: Number,
      minWidth: {
        type: Number,
        default: 160
      },
      minHeight: {
        type: Number,
        default: 110
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
      showMask: {
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
      dragOutTheScreen: Boolean,
      resize: Boolean,
      resizePosition: {
        type: Array,
        default() {
          return [];
        }
      },
      resizeOutTheScreen: Boolean,
      customClass: String,
      customMaskClass: String,
      cancelButtonText: {
        type: String,
        default: '取消'
      },
      cancelButtonOptions: Object,//取消按钮配置
      confirmButtonText: {
        type: String,
        default: '确定'
      },
      confirmButtonOptions: Object,//确认按钮配置
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
      animationName: String,
      iconName: String
    },

    data() {
      return {
        id: undefined,
        visible: true,
        nextZIndex: this.zIndex,
        isDrag: false,
        layerWidth: this.width,
        layerHeight: this.height,
        layerDomWidthCache: 0,
        layerDomHeightCache: 0,
        x: -10000,
        y: -10000,
        layerDom: undefined,
        headerDom: undefined,
        footerDom: undefined,

        windowWidth: this.getWindowWidth(),
        windowHeight: this.getWindowHeight(),

        layerDomWidth: 0,
        layerDomHeight: 0,

        cx: 0,
        cy: 0,

        cancelButtonOptions__: {},
        confirmButtonOptions__: {}
      };
    },

    computed: {
      _width_() {
        return this.layerWidth ? parseFloat(`${this.layerWidth}`.replace(/[^0-9,.]/g, "")) : undefined;
      },
      __width__() {
        return this._width_ ? this._width_ > 100 ? `${this._width_}px` : `${this._width_}%` : undefined;
      },
      _height_() {
        return this.layerHeight ? parseFloat(`${this.layerHeight}`.replace(/[^0-9,.]/g, "")) : undefined;
      },
      __height__() {
        return this._height_ ? this._height_ > 100 ? `${this._height_}px` : `${this._height_}%` : undefined;
      },
      headerHeight() {
        return (this.showHeader && this.headerDom) ? this.headerDom.clientHeight : 0;
      },
      footerHeight() {
        return (this.showFooter && this.footerDom) ? this.footerDom.clientHeight : 0;
      },
      __contentHeight__() {
        if (!this._height_) {
          return undefined;
        }
        if (this._height_ > 100) {
          return `${this._height_ - this.headerHeight - this.footerHeight - 1}px`;
        }
        let wh = this.windowHeight * this._height_ / 100;
        let hh = this.headerHeight;
        let fh = this.footerHeight;
        return `${(1 - hh / wh - fh / wh) * 100}%`;
      },
      style() {
        return {
          width: this.__width__,
          height: this.__height__,
          left: `${this.x}px`,
          top: `${this.y}px`,
          zIndex: this.nextZIndex
        };
      },
      layerClass() {
        return `${this.prefixCls}-layer`;
      },
      headerClass() {
        return `${this.prefixCls}-layer-header`;
      },
      footerClass() {
        return `${this.prefixCls}-layer-footer`;
      },
      resizeClass() {
        return `${this.prefixCls}-layer-drag`;
      },
      footerAlignClass() {
        switch (this.footerAlign) {
          case 'left':
            return 'tal';
          case 'center':
            return 'tac';
          case 'right':
            return 'tar';
          default:
            return undefined;
        }
      },
      dragClass() {
        return this.drag ? 'move' : undefined;
      },
      _animationName_() {
        if (this.animationName !== undefined) {
          return this.animationName;
        } else if (this.position === 'left') {
          return 'fadeLeft';
        } else if (this.position === 'left-top' || this.position === 'top-left') {
          return 'fadeTopLeft';
        } else if (this.position === 'top') {
          return 'fadeUp';
        } else if (this.position === 'right-top' || this.position === 'top-right') {
          return 'fadeTopRight';
        } else if (this.position === 'right') {
          return 'fadeRight';
        } else if (this.position === 'right-bottom' || this.position === 'bottom-right') {
          return 'fadeDownRight';
        } else if (this.position === 'bottom') {
          return 'fadeDown';
        } else if (this.position === 'left-bottom' || this.position === 'bottom-left') {
          return 'fadeDownLeft';
        } else {
          return 'bounce';
        }
      },
      resizeLeft() {
        for (let i in this.resizePosition) {
          if (this.resizePosition[i] === 'left') {
            return true;
          }
        }
        return false;
      },
      resizeTop() {
        for (let i in this.resizePosition) {
          if (this.resizePosition[i] === 'top') {
            return true;
          }
        }
        return false;
      },
      resizeRight() {
        for (let i in this.resizePosition) {
          if (this.resizePosition[i] === 'right') {
            return true;
          }
        }
        return false;
      },
      resizeBottom() {
        for (let i in this.resizePosition) {
          if (this.resizePosition[i] === 'bottom') {
            return true;
          }
        }
        return false;
      },
      resizeLeftTop() {
        return this.resizeLeft && this.resizeTop;
      },
      resizeRightTop() {
        return this.resizeRight && this.resizeTop;
      },
      resizeLeftBottom() {
        return this.resizeLeft && this.resizeBottom;
      },
      resizeRightBottom() {
        return this.resizeRight && this.resizeBottom;
      }
    },

    watch: {
      value(val) {
        this.visible = val;
      },
      visible(val) {
        if (val) {
          this.nextZIndex = this.zIndex ? this.zIndex : PopupManager.nextZIndex(2);
          this.$el.querySelector(`.${this.prefixCls}-layer`).focus();
        }
      },
      width(val) {
        this.layerWidth = val;
      },
      height(val) {
        this.layerHeight = val;
      },
      cancelButtonOptions: {
        immediate: true,
        handler(val) {
          let options = val;
          if (!options) options = {};
          if (!options.size) options.size = 'default';
          if (!options.type) options.type = 'default';
          this.cancelButtonOptions__ = options;
        },
        deep: true
      },
      confirmButtonOptions: {
        immediate: true,
        handler(val) {
          let options = val;
          if (!options) options = {};
          if (!options.size) options.size = 'default';
          if (!options.type) options.type = 'primary';
          this.confirmButtonOptions__ = options;
        },
        deep: true
      }
    },

    methods: {
      close() {
        if (this.visible) {
          this.visible = false;
          this.$emit('input', false);
        }
      },
      maskClose() {
        if (this.maskClosable) {
          this.close();
        }
      },
      EscClose(e) {
        if (this.visible && this.escCloseable) {
          if (e.keyCode === 27 || e.which === 27) {
            this.close();
          }
        }
      },
      destroy() {
        this.$emit('destroy', this.id);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
      handleClickCancelButton(e) {
        this.$emit('click-cancel-button', e, this);
        this.close();
      },
      handleClickConfirmButton(e) {
        this.$emit('click-confirm-button', e, this);
      },
      initLeftPosition(width) {
        this.layerDomWidth = width ? width : this.layerDomWidthCache;
        if (this.left !== undefined) {
          this.x = this.left;
        } else if (this.position === 'center') {
          this.x = (this.windowWidth - this.layerDomWidth) / 2;
        } else if (this.position === 'left') {
          this.x = 0;
        } else if (this.position === 'left-top' || this.position === 'top-left') {
          this.x = 0;
        } else if (this.position === 'top') {
          this.x = (this.windowWidth - this.layerDomWidth) / 2;
        } else if (this.position === 'right-top' || this.position === 'top-right') {
          this.x = this.windowWidth - this.layerDomWidth;
        } else if (this.position === 'right') {
          this.x = this.windowWidth - this.layerDomWidth;
        } else if (this.position === 'right-bottom' || this.position === 'bottom-right') {
          this.x = this.windowWidth - this.layerDomWidth;
        } else if (this.position === 'bottom') {
          this.x = (this.windowWidth - this.layerDomWidth) / 2;
        } else if (this.position === 'left-bottom' || this.position === 'bottom-left') {
          this.x = 0;
        }
      },
      initTopPosition(height) {
        this.layerDomHeight = height ? height : this.layerDomHeightCache;
        if (this.top !== undefined) {
          this.y = this.top;
        } else if (this.position === 'center') {
          this.y = (this.windowHeight - this.layerDomHeight) / 2;
        } else if (this.position === 'left') {
          this.y = (this.windowHeight - this.layerDomHeight) / 2;
        } else if (this.position === 'left-top' || this.position === 'top-left') {
          this.y = 0;
        } else if (this.position === 'top') {
          this.y = 0;
        } else if (this.position === 'right-top' || this.position === 'top-right') {
          this.y = 0;
        } else if (this.position === 'right') {
          this.y = (this.windowHeight - this.layerDomHeight) / 2;
        } else if (this.position === 'right-bottom' || this.position === 'bottom-right') {
          this.y = this.windowHeight - this.layerDomHeight;
        } else if (this.position === 'bottom') {
          this.y = this.windowHeight - this.layerDomHeight;
        } else if (this.position === 'left-bottom' || this.position === 'bottom-left') {
          this.y = this.windowHeight - this.layerDomHeight;
        }
      },
      dragMousedown(e) {
        if (!this.visible || !this.drag) {
          return;
        }
        e = e || window.event;
        this.cx = e.clientX - this.x;
        this.cy = e.clientY - this.y;
        document.body.className += ` ${this.prefixCls}-common-select-none`;
        document.addEventListener('mousemove', this.documentDragMousemoveEvent);
      },
      documentDragMousemoveEvent(e) {
        e = e || window.event;
        let x = e.clientX - this.cx;
        let y = e.clientY - this.cy;
        if (!this.dragOutTheScreen && x < 0) {
          this.x = 0;
        } else if (!this.dragOutTheScreen && x + this.layerDomWidth > this.windowWidth) {
          this.x = this.windowWidth - this.layerDomWidth;
        } else {
          this.x = x;
        }
        if (!this.dragOutTheScreen && y < 0) {
          this.y = 0;
        } else if (!this.dragOutTheScreen && y + this.layerDomHeight > this.windowHeight) {
          this.y = this.windowHeight - this.layerDomHeight;
        } else {
          this.y = y;
        }
      },
      resizeLeftMousedown(e) {
        if (!this.visible || (!this.resize && !this.resizeLeft)) {
          return;
        }
        document.body.className += ` ${this.prefixCls}-common-select-none`;
        document.addEventListener('mousemove', this.documentResizeLeftMousemoveEvent);
      },
      resizeRightMousedown(e) {
        if (!this.visible || (!this.resize && !this.resizeRight)) {
          return;
        }
        document.body.className += ` ${this.prefixCls}-common-select-none`;
        document.addEventListener('mousemove', this.documentResizeRightMousemoveEvent);
      },
      resizeTopMousedown(e) {
        if (!this.visible || (!this.resize && !this.resizeTop)) {
          return;
        }
        document.body.className += ` ${this.prefixCls}-common-select-none`;
        document.addEventListener('mousemove', this.documentResizeTopMousemoveEvent);
      },
      resizeBottomMousedown(e) {
        if (!this.visible || (!this.resize && !this.resizeBottom)) {
          return;
        }
        document.body.className += ` ${this.prefixCls}-common-select-none`;
        document.addEventListener('mousemove', this.documentResizeBottomMousemoveEvent);
      },
      resizeLeftTopMousedown(e) {
        if (!this.visible || (!this.resize && !this.resizeLeftTop)) {
          return;
        }
        document.body.className += ` ${this.prefixCls}-common-select-none`;
        document.addEventListener('mousemove', this.documentResizeLeftMousemoveEvent);
        document.addEventListener('mousemove', this.documentResizeTopMousemoveEvent);
      },
      resizeRightTopMousedown(e) {
        if (!this.visible || (!this.resize && !this.resizeRightTop)) {
          return;
        }
        document.body.className += ` ${this.prefixCls}-common-select-none`;
        document.addEventListener('mousemove', this.documentResizeRightMousemoveEvent);
        document.addEventListener('mousemove', this.documentResizeTopMousemoveEvent);
      },
      resizeLeftBottomMousedown(e) {
        if (!this.visible || (!this.resize && !this.resizeLeftBottom)) {
          return;
        }
        document.body.className += ` ${this.prefixCls}-common-select-none`;
        document.addEventListener('mousemove', this.documentResizeLeftMousemoveEvent);
        document.addEventListener('mousemove', this.documentResizeBottomMousemoveEvent);
      },
      resizeRightBottomMousedown(e) {
        if (!this.visible || (!this.resize && !this.resizeRightBottom)) {
          return;
        }
        document.body.className += ` ${this.prefixCls}-common-select-none`;
        document.addEventListener('mousemove', this.documentResizeRightMousemoveEvent);
        document.addEventListener('mousemove', this.documentResizeBottomMousemoveEvent);
      },
      documentResizeLeftMousemoveEvent(e) {
        e = e || window.event;
        if (e.clientX < 0 && !this.resizeOutTheScreen) {
          this.layerWidth = this.x + this.layerDom.offsetWidth;
          this.x = 0;
          return;
        }
        if (e.clientX + this.minWidth > this.x + this.layerDom.offsetWidth) {
          this.layerWidth = this.minWidth;
          this.x = this.x + this.layerDom.offsetWidth - this.minWidth;
          return;
        }
        if (e.clientX < this.x) {
          this.layerWidth = this.x - e.clientX + this.layerDom.offsetWidth;
        } else if (e.clientX > this.x) {
          this.layerWidth = this.layerDom.offsetWidth - e.clientX + this.x;
        }
        this.x = e.clientX;
      },
      documentResizeRightMousemoveEvent(e) {
        e = e || window.event;
        if (e.clientX > this.windowWidth && !this.resizeOutTheScreen) {
          this.layerWidth = this.windowWidth - this.x;
          return;
        }
        let w = e.clientX - this.x;
        if (w < this.minWidth) {
          this.layerWidth = this.minWidth;
          return;
        }
        this.layerWidth = w;
      },
      documentResizeTopMousemoveEvent(e) {
        e = e || window.event;
        if (e.clientY < 0 && !this.resizeOutTheScreen) {
          this.layerHeight = this.y + this.layerDom.offsetHeight;
          this.y = 0;
          return;
        }
        if (e.clientY + this.minHeight > this.y + this.layerDom.offsetHeight) {
          this.layerHeight = this.minHeight;
          this.y = this.y + this.layerDom.offsetHeight - this.minHeight;
          return;
        }
        if (e.clientY < this.y) {
          this.layerHeight = this.y - e.clientY + this.layerDom.offsetHeight;
        } else if (e.clientY > this.y) {
          this.layerHeight = this.layerDom.offsetHeight - e.clientY + this.y;
        }
        this.y = e.clientY;
      },
      documentResizeBottomMousemoveEvent(e) {
        e = e || window.event;
        if (e.clientY > this.windowHeight && !this.resizeOutTheScreen) {
          this.layerHeight = this.windowHeight - this.y;
          return;
        }
        let h = e.clientY - this.y;
        if (h < this.minHeight) {
          this.layerHeight = this.minHeight;
          return;
        }
        this.layerHeight = h;
      },
      documentMouseupEvent(e) {
        if (!this.visible) {
          return;
        }
        document.body.className = document.body.className.replace(` ${this.prefixCls}-common-select-none`, "");
        document.removeEventListener('mousemove', this.documentDragMousemoveEvent);
        document.removeEventListener('mousemove', this.documentResizeLeftMousemoveEvent);
        document.removeEventListener('mousemove', this.documentResizeRightMousemoveEvent);
        document.removeEventListener('mousemove', this.documentResizeTopMousemoveEvent);
        document.removeEventListener('mousemove', this.documentResizeBottomMousemoveEvent);
        this.layerDomWidth = this.layerDom.offsetWidth;
        this.layerDomHeight = this.layerDom.offsetHeight;
      },
      windowResizeEvent(e) {
        let w = this.getWindowWidth();
        let h = this.getWindowHeight();
        if (this.windowWidth !== w) {
          this.windowWidth = w;
          this.initLeftPosition(this.layerDom.offsetWidth);
        }
        if (this.windowHeight !== h) {
          this.windowHeight = h;
          this.initTopPosition(this.layerDom.offsetHeight);
        }
      },
      animationBeforeEnter(el) {
        this.layerWidth = this.width;
        this.layerHeight = this.height;
        this.initLeftPosition(el.offsetWidth);
        this.initTopPosition(el.offsetHeight);
      },
      animationAfterLeave(el) {
        this.$emit('animationAfterLeave', el, this);
      }
    },

    created() {
      document.addEventListener('mouseup', this.documentMouseupEvent);
      window.addEventListener('resize', this.windowResizeEvent);
      document.addEventListener('keydown', this.EscClose);
    },

    mounted() {
      this.layerDom = this.$el.querySelector(`.${this.layerClass}`);
      this.layerDomWidthCache = this.layerDom.offsetWidth;
      this.layerDomHeightCache = this.layerDom.offsetHeight;
      this.headerDom = this.$el.querySelector(`.${this.headerClass}`);
      this.footerDom = this.$el.querySelector(`.${this.footerClass}`);
      this.visible = false;
      this.$nextTick(() => {
        this.visible = this.value;
      });
      this.id = getId();
      addInstance(this);
    },

    beforeDestroy() {
      document.removeEventListener('mouseup', this.documentMouseupEvent);
      window.removeEventListener('resize', this.windowResizeEvent);
      document.removeEventListener('keydown', this.EscClose);
    }

  }
</script>
