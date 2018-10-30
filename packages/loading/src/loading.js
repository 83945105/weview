import Vue from 'vue';
import WeLoading from './Loading.vue';
import merge from "../../src/utils/merge.js";

const Default = {
  target: document.body,
  fullscreen: false
};

let seed = 1;
let instances = [];
let globalInstance;

export const getId = function () {
  return `loading-${seed++}`;
};

export const addInstance = function (instance) {
  instances.push(instance);
};

function removeInstance(instance) {
  for (let i = 0; i < instances.length; i++) {
    if (instances[i].id === instance.id) {
      instances.splice(i, 1);
      break;
    }
  }
  if (globalInstance && globalInstance.id === instance.id) {
    globalInstance = undefined;
  }
}

const Loading = function (properties = {}) {
  if (Vue.prototype.$isServer) {
    return;
  }
  const __props__ = merge({}, Default, properties);
  if (typeof __props__.target === 'string') {
    __props__.target = document.querySelector(__props__.target);
  }
  __props__.target = __props__.target || document.body;

  if (__props__.target === document.body) {
    __props__.fullscreen = true;
  }

  if (__props__.fullscreen && globalInstance) {
    return globalInstance;
  }

  let id = getId();

  let component = new Vue({
    render(h) {
      return h(WeLoading, {
        props: merge({}, __props__, {
          value: true
        }),
        on: {
          remove(vm) {
            vm.destroy();
            removeInstance(vm);
          }
        },
        scopedSlots: {
          logo: (props) => {
            return __props__.logoRender ? __props__.logoRender(h, props) : undefined;
          },
          default: (props) => {
            return __props__.render ? __props__.render(h, props) : undefined;
          }
        }
      });
    }
  }).$mount();

  __props__.target.appendChild(component.$el);

  const Loading = component.$children[0];

  Loading.id = id;

  addInstance(Loading);

  if (__props__.fullscreen) {
    globalInstance = Loading;
  } else {
    instances.push(Loading);
  }

  return Loading;
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
