import $Alert from './src/alert.js';

const DefaultAlertOptions = {
  alias: '$alert'
};

const merge = require('webpack-merge');

const Layer = {};

Layer.install = function (Vue, options = DefaultAlertOptions) {

  let opts = merge(DefaultAlertOptions, options);

  let alertAlias = opts.alias;
  if (typeof alertAlias === 'string') {
    Vue.prototype[alertAlias] = $Alert;
  } else if (Array.isArray(alertAlias)) {
    for (let alias of alertAlias) {
      Vue.prototype[alias] = $Alert;
    }
  } else {
    Vue.prototype[DefaultAlertOptions.alias] = $Alert;
  }

};

export default Layer;

export {$Alert}
