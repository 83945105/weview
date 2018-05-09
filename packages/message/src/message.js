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
    iconName: null,
    iconType: null
  },
  "success": {
    method: "success",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `success-circle-o`,
    iconType: `success`
  },
  "fail": {
    method: "fail",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `crying-face-o`,
    iconType: `danger`
  },
  "error": {
    method: "error",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `error-circle-o`,
    iconType: `danger`
  },
  "warn": {
    method: "warn",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `warning-circle-o`,
    iconType: `warning`
  },
  "info": {
    method: "info",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `info-circle-o`,
    iconType: `info`
  },
  "lock": {
    method: "lock",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `lock-o`,
    iconType: `info`
  },
  "unLock": {
    method: "unLock",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `unlock`,
    iconType: `info`
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
