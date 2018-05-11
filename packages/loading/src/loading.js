import Vue from 'vue';
import WeLoading from './Loading.vue';

let seed = 1;
let instance;
let instances = [];

const Loading = function (opts = {}) {
  if (Vue.prototype.$isServer) {
    return;
  }
  if (typeof opts === 'string') {
    opts = {
      message: opts
    };
  }

  let id = `loading-${seed++}`;

  let vm = new Vue({
    render(h) {
      return h(Loading, {




      });
    }
  });
};

export default Loading;
