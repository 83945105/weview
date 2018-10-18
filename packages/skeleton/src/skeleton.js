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

const Skeleton = (options = {}) => {
  if (Vue.prototype.$isServer) {
    return;
  }
  options = merge({}, Default, options);
  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target);
  }
  options.target = options.target || document.body;

  const html = options.target.innerHTML;

  let id = getId();

  let vm = new Vue({
    render(h) {
      options.value = true;
      return h(WeSkeleton, {
        props: options,
        scopedSlots: {
          default: props => {
            return options.render ? options.render(h, props) : h('div', {
              domProps: {
                innerHTML: html
              }
            });
          },
          error: props => {
            return options.errorRender ? options.errorRender(h, props) : undefined;
          }
        }
      });
    }
  }).$mount();
  options.target.innerHTML = '';
  options.target.appendChild(vm.$el);
  const skeleton = vm.$children[0];

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
