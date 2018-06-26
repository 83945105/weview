import $Alert from './src/alert.js';

const merge = require('webpack-merge');

const DefaultAlertOptions = {
  alias: '$alert'
};

const Alert = {};

Alert.install = function (Vue, options = DefaultAlertOptions) {

  let opts = merge(DefaultAlertOptions, options);

  let alertAlias = opts.alias;
  if (typeof alertAlias === 'string') {
    Vue.prototype[alertAlias] = $Alert;
  } else if (Array.isArray(alertAlias)) {
    for (let idx in alertAlias) {
      Vue.prototype[alertAlias[idx]] = $Alert;
    }
  } else {
    Vue.prototype[DefaultAlertOptions.alias] = $Alert;
  }

};

export default Alert;

export {$Alert}
