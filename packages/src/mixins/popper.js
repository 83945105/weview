/**
 * https://github.com/freeze-component/vue-popper
 * */
import Vue from 'vue';

const isServer = Vue.prototype.$isServer;

const Popper = isServer ? function () {
} : require('popper.js/dist/umd/popper.js');

import {isFunction} from "../utils/util.js";
import merge from "../utils/merge";

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
        return {
          modifiers: {
            computeStyle: {
              gpuAcceleration: false,
            }
          }
        };
      }
    },
    reference: Object,//参照物
    popper: Object,//弹层
    offset: [String, Number],
    appendToBody: Boolean
  },

  data() {
    return {
      popperEl: undefined,
      referenceEl: undefined
    };
  },

  methods: {
    createPopper(properties = {}) {
      if (isServer) {
        return;
      }
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
        return;
      }

      const options = merge(properties, this.popperOptions);
      const popper = this.popperEl || this.$refs.popper;
      const reference = this.referenceEl || this.$refs.reference;

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
      if (this.offset) {
        options.modifiers.offset.offset = this.offset;
      }
      if (!options.modifiers.preventOverflow) {
        options.modifiers.preventOverflow = {};
      }
      if (!options.modifiers.preventOverflow.boundariesElement && this.appendToBody) {
        options.modifiers.preventOverflow.boundariesElement = '';
      }

      options.onCreate = () => {
        this.$nextTick(this.updatePopper);
        this.$emit('created', this);
      };

      if (isFunction(this.onUpdate)) {
        options.onUpdate = this.onUpdate;
      }

      this.popperJS = new Popper(reference, popper, options);
    },

    updatePopper(properties = {}) {
      if (isServer) {
        return;
      }
      this.popperJS ? this.popperJS.update() : this.createPopper(properties);
    },

    destroyPopper() {
      if (!this.popperJS || isServer) return;
      this.popperJS.destroy();
      this.popperJS = null;
    }

  }

}
