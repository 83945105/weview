import {$Loading} from '../index.js';

const LoadingDirective = {};

const merge = require('webpack-merge');

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
        ...binding.value
      };
      opts = merge(opts, binding.modifiers);
    }, () => {
      opts = {
        target: el,
        value: binding.value
      };
      opts = merge(opts, binding.modifiers);
    });
    if(opts.value) {
      el.vm = $Loading(opts);
    }
  };

  Vue.directive('loading', {
    bind(el, binding, vnode) {
      create(el, binding);
    },
    update(el, binding, vnode, oldVnode) {
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
