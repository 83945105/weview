import Vue from 'vue';
import WeLayer from './Layer.vue';
import Conf from '../../../src/mixins/conf.js';
import {isString} from "../../../web/src/utils/util.js";
import {isObject} from "../../../web/src/utils/util";

const merge = require('webpack-merge');

let seed = 1;
let instance;
let instances = [];

function removeInstance(vm) {
  for (let i = 0; i < instances.length; i++) {
    if (instances[i].id === vm.id) {
      instances.splice(i, 1);
      break;
    }
  }
};

const Default = {};

const Layer = function (opts = {}) {
  if (Vue.prototype.$isServer) {
    return;
  }

  let target;

  if (isString(opts)) {
    target = document.querySelector(opts);
    opts = merge(Default, {});
  } else if (isObject(opts)) {
    target = isString(opts.target) ? document.querySelector(opts.target) : opts.target;
    opts = merge(Default, opts);
  }

  let id = `layer-${seed++}`;

  let vm = new Vue({
    render(h) {
      return h(WeLayer, {
        props: {
          value: true,
          ...opts
        },
        on: {
          close(vm) {
            removeInstance(vm);
            vm.destroy();
          }
        },
        scopedSlots: {
          default: (props) => {
            return h('div', {domProps: {innerHTML: target.innerHTML}})
          }
        }
      });
    }
  }).$mount();

  let parent = document.body;
  if (target) {
    parent = target.parentNode;
  }

  parent.appendChild(vm.$el);

  instance = vm.$children[0];

  instance.id = id;

  instances.push(instance);

  return instance;
};

export default Layer;
