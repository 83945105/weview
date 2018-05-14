import {$Loading} from '../index.js';

const LoadingDirective = {};

LoadingDirective.install = Vue => {
  if (Vue.prototype.$isServer) {
    return;
  }

  Vue.directive('loading', {
    bind(el, binding, vnode) {
      console.log(el)
      console.log(binding)
      console.log(vnode)

      let opts = {
        target: el,
        value: binding.value,
        fullscreen: binding.modifiers.fullscreen || false
      };
      el.vm = $Loading(opts);
    },
    update(el, binding) {
      if(binding.value) {

      }else {

      }
      console.log(el.vm.id)
    }
  });

};

export default LoadingDirective;
