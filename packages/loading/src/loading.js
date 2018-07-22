import Vue from 'vue';
import WeLoading from './Loading.vue';
import {isObject, isString} from "../../src/utils/util.js";

const merge = require('webpack-merge');

let seed = 1;
let instance;
let instances = [];
let globalInstance;

function removeInstance(vm) {
  for (let i = 0; i < instances.length; i++) {
    if (instances[i].id === vm.id) {
      instances.splice(i, 1);
      break;
    }
  }
  if (globalInstance && globalInstance.id === vm.id) {
    globalInstance = undefined;
  }
}

const Default = {
  target: document.body
};

const Loading = function (opts = {}) {
  if (Vue.prototype.$isServer) {
    return;
  }

  let target;

  if (isString(opts)) {
    target = document.querySelector(`${opts}`);
    opts = merge(Default, {
      target: target
    });
  } else if (opts instanceof HTMLElement) {
    opts = merge(Default, {
      target: opts
    });
  } else if (isObject(opts)) {
    target = opts.target;
    if (isString(target)) {
      target = document.querySelector(`${target}`);
    } else if (!(target instanceof HTMLElement)) {
      target = undefined;
    }
    opts = merge(Default, opts, {
      target: target
    });
  } else {
    opts = merge(Default, {});
  }

  if (opts.target === document.body) {
    opts.fullscreen = true;
  }

  if (opts.fullscreen && globalInstance) {
    return globalInstance;
  }

  let id = `loading-${seed++}`;

  let vm = new Vue({
    render(h) {
      opts.value = true;
      return h(WeLoading, {
        props: opts,
        on: {
          animationAfterLeave(el, vm) {
            removeInstance(vm);
            vm.destroy();
          }
        }
      });
    }
  }).$mount();

  opts.target.appendChild(vm.$el);

  instance = vm.$children[0];

  instance.id = id;

  if (opts.fullscreen) {
    globalInstance = instance;
  } else {
    instances.push(instance);
  }

  return instance;
};

Loading.close = function (target) {
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

Loading.closeAll = function () {
  let is = [...instances];
  for (let idx in is) {
    is[idx].close();
  }
  globalInstance && globalInstance.close();
};

export default Loading;
