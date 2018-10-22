/**
 * https://github.com/freeze-component/vue-popper
 * */
import Vue from 'vue';

const isServer = Vue.prototype.$isServer;

const Popper = isServer ? function () {
} : require('popper.js/dist/umd/popper.js');

import PopupManager from '../../src/utils/popup.js';

export default {

  props: {
    value: Boolean,//是否显示弹层
    placement: {//弹层出现位置
      type: String,
      default: 'bottom'
    },
    popperOptions: {//popper.js 配置项
      type: Object,
      default() {
        return {};
      }
    },
    reference: Object,//参照物
    popper: Object,//弹层


  },

  data() {
    return {
      popperVisible: this.value
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.popperVisible = val;
      }
    },
    popperVisible(val) {
      if (val) {

      } else {

      }
      this.$emit('input', val);
    }
  },

  methods: {
    createPopper() {
      if (isServer) {
        return;
      }
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
        return;
      }

      const options = this.popperOptions;
      const popper = this.popper || this.$refs.popper;
      const reference = this.reference || this.$refs.reference;

      if (!popper || !reference) {
        return;
      }

      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
        this.popperJS.destroy();
      }

      options.placement = this.placement;

      if (!options.modifiers) {
        options.modifiers = {};
      }

      if (!options.modifiers.offset) {
        options.modifiers.offset = {};
      }
      options.modifiers.offset.offset = this.offset;

      options.onCreate = () => {
        this.$nextTick(this.updatePopper);
        this.$emit('created', this);
      };

      this.popperJS = new Popper(reference, popper, options);
    },
    updatePopper() {
      if (isServer) {
        return;
      }
      this.popperJS ? this.popperJS.update() : this.createPopper();
    },

    doDestroy() {
      if (!this.popperJS || isServer) return;
      this.popperJS.destroy();
      this.popperJS = null;
    },

    updated() {
      if (isServer) return;
      this.updatePopper();
    },

    beforeDestroy() {
      if (isServer) return;
      if (this.popperJS) {
        this.popperJS.destroy();
      }
    }

  }

}
