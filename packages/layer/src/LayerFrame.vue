<template>
  <div>
    <div :class="[maskClass, maskBgClass, customMaskClass]"
         @click.stop="maskClose"
    ></div>

    <div v-if="position === 'right' || position === 'left'" style="top:0;bottom:0;"
         :class="[layerClass, customClass]"
         :style="[transition]"
    >
      <div :class="[headerClass]">
        <slot name="header">
          <h3 :class="[titleClass]">{{title}}</h3>
          <div :class="[closeIconClass]" @click.stop="close">
            <icon name="close"></icon>
          </div>
        </slot>
      </div>
      <div :class="[contentClass]">
        <slot></slot>
      </div>
      <div :class="[bottomClass]">
        <slot name="footer">
          <we-button type="primary" @click="$emit('confirm', e)">{{confirmButtonText}}</we-button>
          <we-button @click="$emit('cancel', e)">{{cancelButtonText}}</we-button>
        </slot>
      </div>
    </div>

    <div v-else-if="position === 'top' || position === 'bottom'" style="left:0;right:0;"
         :class="[layerClass, customClass]"
         :style="[transition]"
    >
      <div :class="[headerClass]">
        <slot name="header">
          <h3 :class="[titleClass]">{{title}}</h3>
          <div :class="[closeIconClass]" @click.stop="close">
            <icon name="close"></icon>
          </div>
        </slot>
      </div>
      <div :class="[contentClass]">
        <slot></slot>
      </div>
      <div :class="[bottomClass]">
        <slot name="footer">
          <we-button type="primary" @click="$emit('confirm', e)">{{confirmButtonText}}</we-button>
          <we-button @click="$emit('cancel', e)">{{cancelButtonText}}</we-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import WeIcon from '../../icon/src/Icon.vue';
  import WeButton from '../../button/src/Button';

  export default {

    components: {Icon: WeIcon, WeButton: WeButton},

    name: `${Conf.prefixCls}-layer-frame`,

    componentName: `${Conf.prefixNameCls}LayerFrame`,

    mixins: [Conf],

    data() {
      return {
        visible: this.value,
        unit: 'px',
        maskDom: undefined,
        layerDom: undefined
      };
    },

    props: {
      value: Boolean,
      title: {
        type: String,
        default: '标题'
      },
      width: {
        type: [String, Number],
        default: '50%'
      },
      height: {
        type: [String, Number],
        default: '50%'
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      escCloseable: {
        type: Boolean,
        default: true
      },
      position: {
        type: String,
        default: 'right'
      },
      duration: {
        type: Number,
        default: 0.5
      },
      delay: {
        type: Number,
        default: 100
      },
      customClass: String,
      customMaskClass: String,
      confirmButtonText: {
        type: String,
        default: '确定'
      },
      cancelButtonText: {
        type: String,
        default: '取消'
      }
    },

    computed: {
      maskClass() {
        return `${this.prefixCls}-layer-frame-mask`;
      },
      maskBgClass() {
        return `${this.prefixCls}-layer-frame-mask-bg`;
      },
      layerClass() {
        return `${this.prefixCls}-layer-frame`;
      },
      headerClass() {
        return `${this.prefixCls}-layer-frame-header`;
      },
      titleClass() {
        return `${this.prefixCls}-layer-frame-header-title`;
      },
      closeIconClass() {
        return `${this.prefixCls}-layer-frame-header-close`;
      },
      contentClass() {
        return `${this.prefixCls}-layer-frame-content`;
      },
      bottomClass() {
        return `${this.prefixCls}-layer-frame-footer ${this.prefixCls}-tac`;
      },
      transition() {
        return {
          'transition': `all ${this.duration}s ease`,
          '-moz-transition': `all ${this.duration}s ease`,
          '-webkit-transition': `all ${this.duration}s ease`,
          '-o-transition': `all ${this.duration}s ease`
        };
      },
      _width() {
        if (typeof this.width === 'string') {
          this.unit = this.width.replace(/[0-9]+/, "");
          return parseInt(this.width.replace(/[^0-9]/, ""));
        }
        return this.width;
      },
      _height() {
        if (typeof this.height === 'string') {
          this.unit = this.height.replace(/[0-9]+/, "");
          return parseInt(this.height.replace(/[^0-9]/, ""));
        }
        return this.height;
      },
      __width() {
        return `${this._width}${this.unit}`;
      },
      __height() {
        return `${this._height}${this.unit}`;
      },
      __left() {
        return `-${this._width}${this.unit}`;
      },
      __top() {
        return `-${this._height}${this.unit}`;
      },
      __right() {
        return `-${this._width}${this.unit}`;
      },
      __bottom() {
        return `-${this._height}${this.unit}`;
      }
    },

    watch: {
      value(v) {
        this.visible = v;
      },
      visible(v) {
        if (v) {
          switch (this.position) {
            case 'left':
              this.maskDom.style.display = "block";
              this.layerDom.style.display = "block";
              setTimeout(() => this.layerDom.style.left = '0', this.delay);
              break;
            case 'right':
              this.maskDom.style.display = "block";
              this.layerDom.style.display = "block";
              setTimeout(() => this.layerDom.style.right = '0', this.delay);
              break;
            case 'top':
              this.maskDom.style.display = "block";
              this.layerDom.style.display = "block";
              setTimeout(() => this.layerDom.style.top = '0', this.delay);
              break;
            case 'bottom':
              this.maskDom.style.display = "block";
              this.layerDom.style.display = "block";
              setTimeout(() => this.layerDom.style.bottom = '0', this.delay);
              break;
          }
        } else {
          switch (this.position) {
            case 'left':
              this.maskDom.style.display = "none";
              this.layerDom.style.left = this.__left;
              setTimeout(() => this.layerDom.style.display = "none", this.delay);
              break;
            case 'right':
              this.maskDom.style.display = "none";
              this.layerDom.style.right = this.__right;
              setTimeout(() => this.layerDom.style.display = "none", this.delay);
              break;
            case 'top':
              this.maskDom.style.display = "none";
              this.layerDom.style.top = this.__top;
              setTimeout(() => this.layerDom.style.display = "none", this.delay);
              break;
            case 'bottom':
              this.maskDom.style.display = "none";
              this.layerDom.style.bottom = this.__bottom;
              setTimeout(() => this.layerDom.style.display = "none", this.delay);
              break;
          }
        }
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
      init() {
        switch (this.position) {
          case 'left':
            this.layerDom.style.width = this.__width;
            this.layerDom.style.left = this.__left;
            break;
          case 'right':
            this.layerDom.style.width = this.__width;
            this.layerDom.style.right = this.__right;
            break;
          case 'top':
            this.layerDom.style.height = this.__height;
            this.layerDom.style.top = this.__top;
            break;
          case 'bottom':
            this.layerDom.style.height = this.__height;
            this.layerDom.style.bottom = this.__bottom;
            break;
        }
      }
    },

    mounted() {
      // ESC close
      document.addEventListener('keydown', this.EscClose);
      this.maskDom = this.$el.querySelector(`.${this.prefixCls}-layer-frame-mask`);
      this.layerDom = this.$el.querySelector(`.${this.prefixCls}-layer-frame`);
      this.init();
    },

    beforeDestroy() {
      document.removeEventListener('keydown', this.EscClose);
    }
  }
</script>
