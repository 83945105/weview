import Message from '../message/src/Message.vue';
import $Message from '../message/src/message.js';

Message.install = function (Vue) {
  Vue.component(Message.name, Message);
};

export default Message;

export {$Message}
