import Message from './src/Message.vue';
import $Message from './src/message.js';

const DefaultMessageOptions = {
  alias: '$message'
};

const merge = require('webpack-merge');

Message.install = function (Vue, options = DefaultMessageOptions) {

  Vue.component(Message.name, Message);

  let opts = merge(DefaultMessageOptions, options);

  let messageAlias = opts.alias;
  if (typeof messageAlias === 'string') {
    Vue.prototype[messageAlias] = $Message;
  } else if (Array.isArray(messageAlias)) {
    for (let alias of messageAlias) {
      Vue.prototype[alias] = $Message;
    }
  } else {
    Vue.prototype[DefaultMessageOptions.alias] = $Message;
  }

};

export default Message;

export {$Message}
