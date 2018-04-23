<template>
  <div>
    <div class="avalon-merlin-default-layer-mask bg-black"
         @click.stop="maskClose"
    ></div>

    <div class="avalon-merlin-default-layer"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layer-right",

    data() {
      return {
        visible: this.value,
        unit: '',
        maskDom: undefined,
        layerDom: undefined
      };
    },

    props: {
      value: {//是否弹出
        type: Boolean,
        default: false
      },
      width: {
        type: [String, Number],
        default: '50%'
      },
      maskClosable: {//是否允许点击遮罩层关闭
        type: Boolean,
        default: true
      },
      escCloseable: {//是否允许点击Esc关闭
        type: Boolean,
        default: true
      }
    },

    watch: {
      value(v) {
        this.visible = v;
      },
      visible(v) {
        if (v) {
          this.maskDom.style.display = "block";
          this.layerDom.style.display = "block";
          setTimeout(() => this.layerDom.style.right = 0, 100);
        } else {
          this.maskDom.style.display = "none";
          this.layerDom.style.right = this.__right;
          setTimeout(() => this.layerDom.style.display = "none", 100);
        }
        this.$emit('input', v);
      }
    },

    computed: {
      _width() {
        if (this.width === 'string') {
          this.unit = this.width.replace(/[0-9]+/, "");
          return parseInt(this.width.replace(/[^0-9]/, ""));
        }
        return this.width
      },
      __width() {
        return `${this._width}${this.unit}`
      },
      __right() {
        return `-${this._width}${this.unit}`
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
      }
    },

    created() {
      if (this.visible === false) {
        this.right = this.__right;
      }
    },

    mounted() {
      // ESC close
      document.addEventListener('keydown', this.EscClose);
      this.maskDom = this.$el.querySelector('.avalon-merlin-default-layer-mask');
      this.layerDom = this.$el.querySelector('.avalon-merlin-default-layer');
      this.layerDom.style.width = this.__width;
      this.layerDom.style.right = this.__right;
    },

    beforeDestroy() {
      document.removeEventListener('keydown', this.EscClose);
    }

  }
</script>

<style scoped>

</style>
