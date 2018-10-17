import Skeleton from './src/Skeleton.vue';
import $Skeleton from './src/skeleton.js';
// import LoadingDirective from './src/directive.js';

const merge = require('webpack-merge');

const DefaultLoadingOptions = {
  alias: '$skeleton'
};

Skeleton.install = function (Vue, options = DefaultLoadingOptions) {

  Vue.component(Skeleton.name, Skeleton);

  // Vue.use(LoadingDirective);

  let opts = merge(DefaultLoadingOptions, options);

  let loadingAlias = opts.alias;
  if (typeof loadingAlias === 'string') {
    Vue.prototype[loadingAlias] = $Skeleton;
  } else if (Array.isArray(loadingAlias)) {
    for (let idx in loadingAlias) {
      Vue.prototype[loadingAlias[idx]] = $Skeleton;
    }
  } else {
    Vue.prototype[DefaultLoadingOptions.alias] = $Skeleton;
  }

};

export default Skeleton;

export {$Skeleton}
