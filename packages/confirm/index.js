import $Confirm from './src/confirm.js';

const merge = require('webpack-merge');

const DefaultConfirmOptions = {
  alias: '$confirm'
};

const Confirm = {};

Confirm.install = function (Vue, options = DefaultConfirmOptions) {

  let opts = merge(DefaultConfirmOptions, options);

  let confirmAlias = opts.alias;
  if (typeof confirmAlias === 'string') {
    Vue.prototype[confirmAlias] = $Confirm;
  } else if (Array.isArray(confirmAlias)) {
    for (let idx in confirmAlias) {
      Vue.prototype[confirmAlias[idx]] = $Confirm;
    }
  } else {
    Vue.prototype[DefaultConfirmOptions.alias] = $Confirm;
  }

};

export default Confirm;

export {$Confirm}
