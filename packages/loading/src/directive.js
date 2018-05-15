import {$Loading} from '../index.js';

const LoadingDirective = {};

LoadingDirective.install = Vue => {
  if (Vue.prototype.$isServer) {
    return;
  }

  const typeCallback = (opts, objectCallback, booleanCallback) => {
    if (typeof opts === 'object') {
      objectCallback();
    } else if (typeof opts === 'boolean') {
      booleanCallback();
    }
  };

  const create = (el, binding) => {
    let opts = {
      target: el
    };
    typeCallback(binding.value, () => {
      opts = {
        target: el,
        ...binding.value,
        fullscreen: binding.modifiers.fullscreen || false
      };
    }, () => {
      opts = {
        target: el,
        value: binding.value,
        fullscreen: binding.modifiers.fullscreen || false
      };
    });
    el.vm = $Loading(opts);
  };

  Vue.directive('loading', {
    bind(el, binding, vnode) {
      create(el, binding);
    },
    update(el, binding) {
      let v = false;
      typeCallback(binding.value, () => {
        v = binding.value.value || false;
      }, () => {
        v = binding.value;
      });
      if (v) {
        create(el, binding);
      } else {
        el.vm.close();
      }
    }
  });

};

export default LoadingDirective;
