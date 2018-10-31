import {$Loading} from '../index.js';
import merge from "../../src/utils/merge.js";
import {isBoolean, isObject} from "../../src/utils/util.js";

const LoadingDirective = {};

LoadingDirective.install = Vue => {
  if (Vue.prototype.$isServer) {
    return;
  }

  const typeCallback = (target, options) => {
    if (isObject(target)) {
      options.objectCallback && options.objectCallback();
    } else if (isBoolean(target)) {
      options.booleanCallback && options.booleanCallback();
    } else {
      throw new Error('options type error.');
    }
  };

  const create = (el, binding) => {
    if (el.vm) return;

    let options = {};

    typeCallback(binding.value, {
      objectCallback: () => {
        options = merge({target: el}, binding.value, binding.modifiers);
      },
      booleanCallback: () => {
        options = merge({target: el, value: binding.value}, binding.modifiers);
      }
    });

    if (options.value) {
      el.vm = $Loading(options);
    }
  };

  Vue.directive('loading', {
    bind(el, binding, vnode) {
      create(el, binding);
    },
    update(el, binding, vnode, oldVnode) {
      if (binding.oldValue === binding.value) return;
      let value;
      typeCallback(binding.value, {
        objectCallback: () => {
          value = binding.value.value || false;
        },
        booleanCallback: () => {
          value = binding.value;
        }
      });
      if (value) {
        create(el, binding);
      } else {
        el.vm && el.vm.close();
        el.vm = undefined;
      }
    }
  });

};

export default LoadingDirective;
