import Vue from 'vue';
import WeMessage from './Message.vue';
import Conf from '../../../src/mixins/conf';

let seed = 1;
let instance;
let instances = [];

const Message = function (opts = {}) {
  if (Vue.prototype.$isServer) {
    return;
  }
  if (typeof opts === 'string') {
    opts = {
      message: opts
    };
  }

  let id = `message-${seed++}`;

  let vm = new Vue({
    render(h) {
      return h(WeMessage, {
        props: {
          value: true,
          ...opts
        },
        on: {
          input(v) {
            if (!v) {
              vm.$children[0].destroy();
            }
          },
          destroy(id) {
            Message.close(id);
          }
        }
      });
    }
  }).$mount();

  document.body.appendChild(vm.$el);

  instance = vm.$children[0];

  instance.id = id;

  instances.push(instance);

  return instance;
};

export const MessageType = {
  "default": {
    method: "open",
    cls: `${Conf.prefixCls}-message-tac`,
    icon: null
  },
  "success": {
    method: "success",
    cls: `${Conf.prefixCls}-message-bg`,
    icon: `${Conf.prefixCls}-chenggong ${Conf.prefixCls}-message-icon ${Conf.prefixCls}-message-icon-success`
  },
  "fail": {
    method: "fail",
    cls: `${Conf.prefixCls}-message-bg`,
    icon: `${Conf.prefixCls}-shibai ${Conf.prefixCls}-message-icon ${Conf.prefixCls}-message-icon-danger`
  },
  "error": {
    method: "error",
    cls: `${Conf.prefixCls}-message-bg`,
    icon: `${Conf.prefixCls}-shibai ${Conf.prefixCls}-message-icon ${Conf.prefixCls}-message-icon-danger`
  },
  "warn": {
    method: "warn",
    cls: `${Conf.prefixCls}-message-bg`,
    icon: `${Conf.prefixCls}-chenggong ${Conf.prefixCls}-message-icon ${Conf.prefixCls}-message-icon-warning`
  },
  "info": {
    method: "info",
    cls: `${Conf.prefixCls}-message-bg`,
    icon: `${Conf.prefixCls}-chenggong ${Conf.prefixCls}-message-icon`
  },
  "lock": {
    method: "lock",
    cls: `${Conf.prefixCls}-message-bg`,
    icon: `${Conf.prefixCls}-chenggong ${Conf.prefixCls}-message-icon`
  },
  "unLock": {
    method: "unLock",
    cls: `${Conf.prefixCls}-message-bg`,
    icon: `${Conf.prefixCls}-chenggong ${Conf.prefixCls}-message-icon`
  }
};

for (let type in MessageType) {
  Message[MessageType[type].method] = (opts = {}) => {
    if (typeof opts === 'string') {
      opts = {
        message: opts,
        type: type
      };
    } else {
      opts.type = type;
    }
    return Message(opts);
  };
}

Message.close = function (id) {
  for (let i = 0; i < instances.length; i++) {
    if (instances[i].id === id) {
      instances.splice(i, 1);
      break;
    }
  }
};

Message.closeAll = function () {
  for (let ist of instances) {
    ist.close();
  }
};

export default Message;
