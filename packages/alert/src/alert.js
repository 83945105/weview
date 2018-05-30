import Vue from 'vue';
import $Layer from '../../layer/src/layer.js';
import WeButton from '../../button/src/Button.vue';
import {isObject, isString} from "../../../web/src/utils/util";
import Conf from "../../src/mixins/conf";

const Default = {
  title: '警告',
  message: '',
  confirmButtonText: '确定',
  onClose: undefined,
  escCloseable: false,
  maskClosable: false,
  footerAlign: 'right',
  iconName: 'warning-circle-o'
};

const merge = require('webpack-merge');

const Alert = function (opts) {
  if (Vue.prototype.$isServer) {
    return;
  }

  let message;
  if (isString(opts)) {
    message = opts;
    opts = merge(Default, {
      message: message
    });
  } else if (isObject(opts)) {
    opts = merge(Default, opts);
  } else {
    opts = merge(Default, {});
  }

  let instance;

  if (!opts.footerRender) {
    let cls={};
    cls[`${Conf.prefixCls}-layer-footer-inner`] = true;
    if(opts.footerAlign === "right"){
      cls[`${Conf.prefixCls}-layer-footer-inner tar`] = true;
    }else if(opts.footerAlign === "center"){
      cls[`${Conf.prefixCls}-layer-footer-inner tac`] = true;
    }else if(opts.footerAlign === "left"){
      cls[`${Conf.prefixCls}-layer-footer-inner tal`] = true;
    }

    opts.footerRender = function (h) {
      return h('div', {
        'class': cls
      },[
        h(WeButton, {
          props: {
            type: 'primary'
          },
          on: {
            click() {
              $Layer.close(instance);
            }
          }
        }, opts.confirmButtonText)
      ]);
    };
  }

  if (!opts.render) {
    opts.render = function (h) {
      return h('div', {
        style: {
          padding: '15px'
        },
        domProps: {
          innerHTML: opts.message
        }
      });
    };
  }

  instance = $Layer(opts);

  return instance;
};

Alert.close = function (target) {
  $Layer.close(target);
};

Alert.closeAll = function () {
  $Layer.closeAll();
};

export const AlertType = {
  "default": {
    method: "open",
    cls: `${Conf.prefixCls}-message-tac`,
    iconName: null,
    iconType: null,
    title: '警告'
  },
  "success": {
    method: "success",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `success-circle-o`,
    iconType: `success`,
    title: '成功'
  },
  "fail": {
    method: "fail",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `crying-face-o`,
    iconType: `danger`,
    title: '失败'
  },
  "error": {
    method: "error",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `error-circle-o`,
    iconType: `danger`,
    title: '错误'
  },
  "warn": {
    method: "warn",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `warning-circle-o`,
    iconType: `warning`,
    title: '警告'
  },
  "info": {
    method: "info",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `info-circle-o`,
    iconType: `info`,
    title: '提示'
  },
  "lock": {
    method: "lock",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `lock-o`,
    iconType: `info`,
    title: '锁定'
  },
  "unLock": {
    method: "unLock",
    cls: `${Conf.prefixCls}-message-bg`,
    iconName: `unlock-o`,
    iconType: `info`,
    title: '解锁'
  }
};

for (let type in AlertType) {
  Alert[AlertType[type].method] = (opts = {}) => {
    if (isString(opts)) {
      opts = {
        title: AlertType[type].title,
        message: opts,
        iconName: AlertType[type].iconName,
        iconType: AlertType[type].iconType
      };
    } else if (isObject(opts)) {
      opts = merge({
        title: AlertType[type].title,
        iconName: AlertType[type].iconName,
        iconType: AlertType[type].iconType
      }, opts);
    }
    return Alert(opts);
  };
}

export default Alert;
