import Vue from 'vue';
import WeSkeleton from './Skeleton.vue';
import merge from "../../src/utils/merge.js";

const Default = {};

let seed = 1;
let instances = [];

export const getId = function () {
  return `skeleton-${seed++}`;
};

export const addInstance = function (instance) {
  instances.push(instance);
};

const Skeleton = (properties = {}) => {
  if (Vue.prototype.$isServer) {
    return;
  }
  const __props__ = merge({}, Default, properties);
  if (typeof __props__.target === 'string') {
    __props__.target = document.querySelector(__props__.target);
  }
  __props__.target = __props__.target || document.body;

  const html = __props__.target.innerHTML;

  let id = getId();

  let component = new Vue({
    render(h) {
      return h(WeSkeleton, {
        props: merge({}, __props__, {
          value: true
        }),
        scopedSlots: {
          default: props => {
            return __props__.render ? __props__.render(h, props) : h('div', {
              domProps: {
                innerHTML: html
              }
            });
          },
          error: props => {
            return __props__.errorRender ? __props__.errorRender(h, props) : undefined;
          }
        }
      });
    }
  }).$mount();
  __props__.target.innerHTML = '';
  __props__.target.appendChild(component.$el);
  const skeleton = component.$children[0];

  skeleton.id = id;

  addInstance(skeleton);

  return skeleton;

};

Skeleton.start = function (id) {
  instances.forEach(skeleton => {
    if (id === skeleton.id) {
      skeleton.start();
      return false;
    }
  });
};

Skeleton.finish = function (id) {
  instances.forEach(skeleton => {
    if (id === skeleton.id) {
      skeleton.finish();
      return false;
    }
  });
};

Skeleton.error = function (id, errorCode) {
  instances.forEach(skeleton => {
    if (id === skeleton.id) {
      skeleton.error(errorCode);
      return false;
    }
  });
};

Skeleton.startAll = function () {
  instances.forEach(skeleton => skeleton.start());
};

Skeleton.finishAll = function () {
  instances.forEach(skeleton => skeleton.finish());
};

Skeleton.errorAll = function (errorCode) {
  instances.forEach(skeleton => skeleton.error(errorCode));
};

export default Skeleton;
