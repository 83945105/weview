import $Confirm from './src/confirm.js';

const DefaultConfirmOptions = {
  alias: '$confirm'
};

const merge = require('webpack-merge');

const Confirm = {};

Confirm.install = function (Vue, options = DefaultConfirmOptions) {

  let opts = merge(DefaultConfirmOptions, options);

  let confirmAlias = opts.alias;
  if (typeof confirmAlias === 'string') {
    Vue.prototype[confirmAlias] = $Confirm;
  } else if (Array.isArray(confirmAlias)) {
    for (let alias of confirmAlias) {
      Vue.prototype[alias] = $Confirm;
    }
  } else {
    Vue.prototype[DefaultConfirmOptions.alias] = $Confirm;
  }

};

export default Confirm;

export {$Confirm}
