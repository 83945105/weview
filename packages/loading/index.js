import Loading from './src/Loading.vue';
import $Loading from './src/Loading.js';
import LoadingDirective from './src/directive.js';

const merge = require('webpack-merge');

const DefaultLoadingOptions = {
  alias: '$loading'
};

Loading.install = function (Vue, options = DefaultLoadingOptions) {

  Vue.component(Loading.name, Loading);

  Vue.use(LoadingDirective);

  let opts = merge(DefaultLoadingOptions, options);

  let loadingAlias = opts.alias;
  if (typeof loadingAlias === 'string') {
    Vue.prototype[loadingAlias] = $Loading;
  } else if (Array.isArray(loadingAlias)) {
    for (let idx in loadingAlias) {
      Vue.prototype[loadingAlias[idx]] = $Loading;
    }
  } else {
    Vue.prototype[DefaultLoadingOptions.alias] = $Loading;
  }

};

export default Loading;

export {$Loading}
