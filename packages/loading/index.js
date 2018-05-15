import Loading from './src/Loading.vue';
import $Loading from './src/Loading.js';
import LoadingDirective from './src/directive.js';

Loading.install = function (Vue) {
  Vue.use(LoadingDirective);
  Vue.component(Loading.name, Loading);
};

export default Loading;

export {$Loading, LoadingDirective}
