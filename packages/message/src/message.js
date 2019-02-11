import Vue from 'vue';
import WeMessage from './Message.vue';
import merge from "../../src/utils/merge.js";
import Conf from '../../src/mixins/conf.js';
import {isObject, isString} from "../../src/utils/util.js";

const Default = {content: ''};

let seed = 0;
let instances = [];

export const getId = function () {
  return `message-${seed++}`;
};

export const getInstance = function (id) {
  for (let i in instances) {
    if (instances[i].id === id) {
      return instances[i];
    }
  }
  return undefined;
};

export const addInstance = function (instance) {
  instances.push(instance);
};

export const removeInstance = function (instance) {
  for (let i = 0; i < instances.length; i++) {
    if (instances[i].id === instance.id) {
      instances.splice(i, 1);
      break;
    }
  }
};

const Message = (properties = {}) => {
  if (Vue.prototype.$isServer) return;

  const __props__ = {};
  if (isString(properties)) {
    merge(__props__, Default, {
      content: properties
    });
  } else if (isObject(properties)) {
    merge(__props__, Default, properties);
  } else {
    merge(__props__, Default);
  }

  let component = new Vue({
    render(h) {
      __props__.value = true;
      return h(WeMessage, {
        props: __props__,
        on: {
          afterLeave(el, vm) {
            vm.destroy();
          }
        }
      });
    }
  }).$mount();

  document.body.appendChild(component.$el);

  return component.$children[0];
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
    iconName: `unlock-o`,
    iconType: `info`
  }
};

for (let type in MessageType) {
  Message[MessageType[type].method] = (properties = {}) => {
    if (isString(properties)) {
      properties = {
        content: properties,
        type: type
      };
    } else {
      properties.type = type;
    }
    return Message(properties);
  };
}

Message.close = function (target) {
  for (let i = 0; i < instances.length; i++) {
    if (isString(target) && instances[i].id === target) {
      instances[i].close();
      break;
    }
    if (target instanceof Vue && instances[i].id === target.id) {
      instances[i].close();
      break;
    }
  }
};

Message.closeAll = function () {
  [...instances].forEach(instance => instance.close());
};

export default Message;
