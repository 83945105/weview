import Message from '../message/src/Message';

Message.install = function (Vue) {
  Vue.component(Message.name, Message);
};

export default Message;
