import {$Layer} from '../index.js';

const merge = require('webpack-merge');

const LayerDirective = {};

LayerDirective.install = Vue => {
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
      opts = merge({target: el}, binding.value, binding.modifiers);
    }, () => {
      opts = {
        target: el,
        value: binding.value
      };
      opts = merge(opts, binding.modifiers);
    });
    if (opts.value) {
      el.vm = $Layer(opts);
    }
  };

  Vue.directive('layer', {
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
      console.log(`====>${v}`)
      if (v) {
        create(el, binding);
      } else {
        console.log(el)
        el.vm.close();
      }
    }
  });

};

export default LayerDirective;
