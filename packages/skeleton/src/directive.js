import {$Skeleton} from '../index.js';
import merge from "../../src/utils/merge.js";
import {isBoolean, isNumber, isObject} from "../../src/utils/util.js";

const SkeletonDirective = {};

SkeletonDirective.install = Vue => {
  if (Vue.prototype.$isServer) {
    return;
  }

  const typeCallback = (target, options) => {
    if (isObject(target)) {
      options.objectCallback && options.objectCallback();
    } else if (isBoolean(target)) {
      options.booleanCallback && options.booleanCallback();
    } else if (isNumber(target)) {
      options.numberCallback && options.numberCallback();
    } else {
      throw new Error('options type error.');
    }
  };

  const create = (el, binding) => {
    if (el.vm) {
      return;
    }
    let options = {};
    typeCallback(binding.value, {
      objectCallback: () => {
        options = merge({target: el}, binding.value, binding.modifiers);
      },
      booleanCallback: () => {
        options = merge({target: el, value: binding.value}, binding.modifiers);
      },
      numberCallback: () => {
        options = merge({target: el, value: binding.value}, binding.modifiers);
      }
    });
    if (options.value) {
      el.vm = $Skeleton(options);
    }
  };

  Vue.directive('skeleton', {
    bind(el, binding, vnode) {
      create(el, binding);
    },
    update(el, binding, vnode, oldVnode) {
      if (binding.oldValue !== binding.value) {
        let value;
        typeCallback(binding.value, {
          objectCallback: () => {
            value = binding.value.value || false;
          },
          booleanCallback: () => {
            value = binding.value;
          },
          numberCallback: () => {
            value = binding.value;
          }
        });
        if (value === true || value === 1) {
          el.vm && el.vm.start();
        } else if (value === false || value === 0) {
          el.vm && el.vm.finish();
        } else {
          el.vm && el.vm.error(value);
        }
      }
    }
  });
};

export default SkeletonDirective;
