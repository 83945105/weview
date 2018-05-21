import Vue from 'vue';
import WeLayer from './Layer.vue';
import WeAnimation from '../../animation/src/Animation.vue';
import Conf from '../../../src/mixins/conf.js';
import {isString} from "../../../web/src/utils/util.js";
import {isObject} from "../../../web/src/utils/util";
import Message from "../../message/src/message";

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

const Default = {
  target: ''
};

const Layer = function (opts = {}) {
  if (Vue.prototype.$isServer) {
    return;
  }

  let target;
  if (isString(opts)) {
    opts = merge(Default, {
      target: opts
    });
  } else if (opts instanceof HTMLElement) {
    opts = merge(Default, {
      target: opts
    });
  } else if (isObject(opts)) {
    target = opts.target;
    if (isString(target)) {
      target = document.querySelector(`${target}`);
    } else if (target instanceof HTMLElement) {
      target = target;
    } else {
      target = undefined;
    }
    opts = merge(Default, opts, {
      target: target
    });
  } else {
    opts = merge(Default, {});
  }

  let html;
  if (isString(opts.target)) {
    html = opts.target;
  } else {
    html = opts.target.innerHTML;
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
            return opts.render ? opts.render(h, props) : h('div', {
              domProps: {
                innerHTML: html
              }
            });
          },
          footer: (props) => {
            return opts.footerRender ? opts.footerRender(h, props) : undefined;
          }
        }
      });
    }
  }).$mount();


  // let cls = `${WeAnimation.name}-${vm.$children[0].animationName}`;

  // vm.$el.querySelector('.we-layer').className += ` ${cls}-enter ${cls}-active`;

  let parent = document.body;
  if (target && target.parentNode) {
    parent = target.parentNode;
  }

  parent.appendChild(vm.$el);

  instance = vm.$children[0];

  instance.id = id;

  instances.push(instance);

  return instance;
};

Layer.close = function (target) {
  for (let i = 0; i < instances.length; i++) {
    if (typeof target === 'string' && instances[i].id === target) {
      instances[i].close();
      break;
    }
    if (target instanceof Vue && instances[i].id === target.id) {
      instances[i].close();
      break;
    }
  }
};

Layer.closeAll = function () {
  for (let ist of instances) {
    ist.close();
  }
};

export default Layer;
