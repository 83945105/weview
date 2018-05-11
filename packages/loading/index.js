import Loading from './src/Loading.vue';
import $Loading from './src/Loading.js';

Loading.install = function (Vue) {
  Vue.component(Loading.name, Loading);
};

export default Loading;

export {$Loading}
