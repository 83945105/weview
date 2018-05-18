import Vue from 'vue';
import WeLayer from './Layer.vue';
import Conf from '../../../src/mixins/conf.js';

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

const Layer = function (opts = {}) {
  if (Vue.prototype.$isServer) {
    return;
  }
  if (typeof opts === 'string') {
    opts = {
      target: document.querySelector(opts)
    };
  } else if (typeof opts.target === 'string') {
    opts = {
      target: document.querySelector(opts.target)
    };
  } else if (opts instanceof HTMLElement) {
    opts = {
      target: opts
    };
  }

  if (!opts.target) {
    return;
  }

  console.log(opts)

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
        }
      });
    }
  }).$mount();

};

export default Layer;
