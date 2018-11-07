import Vue from 'vue';
import WeLayer from './Layer.vue';
import {isString, isObject} from "../../src/utils/util.js";

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
}

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
      opts.value = true;
      return h(WeLayer, {
        props: opts,
        on: {
          animationAfterLeave(el, vm) {
            removeInstance(vm);
            vm.destroy();
          }
        },
        scopedSlots: {
          header: (props) => {
            return opts.headerRender ? opts.headerRender(h, props) : undefined;
          },
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
  for (let idx in instances) {
    instances[idx].close();
  }
};

export default Layer;
