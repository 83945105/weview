import Vue from 'vue';
import WeLayer from './Layer.vue';
import {isString} from "../../src/utils/util.js";
import merge from "../../src/utils/merge.js";

const Default = {
  target: document.body
};

let seed = 1;
let instances = [];

export const getId = function () {
  return `layer-${seed++}`;
};

export const addInstance = function (instance) {
  instances.push(instance);
};

export const getInstance = function (id) {
  for (let i in instances) {
    if (instances[i].id === id) {
      return instances[i];
    }
  }
  return undefined;
};

function removeInstance(vm) {
  for (let i = 0; i < instances.length; i++) {
    if (instances[i].id === vm.id) {
      instances.splice(i, 1);
      break;
    }
  }
}

const Layer = function (properties = {}) {
  if (Vue.prototype.$isServer) {
    return;
  }
  const __props__ = merge({}, Default, properties);
  if (isString(__props__.target)) {
    __props__.target = document.querySelector(__props__.target);
  }
  __props__.target = __props__.target || document.body;

  let vm = new Vue({
    render(h) {
      return h(WeLayer, {
        props: merge({}, __props__, {
          value: true
        }),
        on: {
          animationAfterLeave(el, vm) {
            removeInstance(vm);
            vm.destroy();
          }
        },
        scopedSlots: {
          header: (props) => {
            return __props__.headerRender ? __props__.headerRender(h, props) : undefined;
          },
          default: (props) => {
            return __props__.render ? __props__.render(h, props) : h('div', {
              domProps: {
                innerHTML: __props__.target.innerHTML
              }
            });
          },
          footer: (props) => {
            return __props__.footerRender ? __props__.footerRender(h, props) : undefined;
          }
        }
      });
    }
  }).$mount();

  let parent = __props__.target.parentNode || document.body;

  parent.appendChild(vm.$el);

  const Layer = vm.$children[0];

  instances.push(Layer);

  return Layer;
};

Layer.close = function (target) {
  for (let i = 0; i < instances.length; i++) {
    if (isString(target) && instances[i].id === target) {
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
  [...instances].forEach(instance => instance.close());
};

export default Layer;
