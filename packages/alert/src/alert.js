import Vue from 'vue';
import $Layer from '../../layer/src/layer.js';
import WeButton from '../../button/src/Button.vue';
import {isObject, isString} from "../../src/utils/util.js";
import Conf from "../../src/mixins/conf.js";
import merge from "../../src/utils/merge.js";

const Default = {
  title: '警告',
  content: '',
  confirmButtonText: '确定',
  onClickConfirmButton: () => {
  },
  escCloseable: false,
  maskClosable: false,
  footerAlign: 'right',
  iconName: 'warning-circle-o'
};

const Alert = function (properties = {}) {
  if (Vue.prototype.$isServer) {
    return;
  }
  let content;
  if (isString(properties)) {
    content = properties;
    properties = merge({}, Default, {
      content: content
    });
  } else if (isObject(properties)) {
    properties = merge({}, Default, properties);
  } else {
    properties = merge({}, Default);
  }
  let Alert;
  if (!properties.footerRender) {
    let cls = {};
    cls[`${Conf.prefixCls}-layer-footer-inner`] = true;
    if (properties.footerAlign === "right") {
      cls[`${Conf.prefixCls}-layer-footer-inner tar`] = true;
    } else if (properties.footerAlign === "center") {
      cls[`${Conf.prefixCls}-layer-footer-inner tac`] = true;
    } else if (properties.footerAlign === "left") {
      cls[`${Conf.prefixCls}-layer-footer-inner tal`] = true;
    }
    properties.footerRender = function (h) {
      const confirmButtonOptions = merge({}, properties.confirmButtonOptions);
      if (!confirmButtonOptions.type) {
        confirmButtonOptions.type = 'primary';
      }
      return h('div', {
        'class': cls
      }, [
        h(WeButton, {
          props: confirmButtonOptions,
          on: {
            click(e) {
              const rs = properties.onClickConfirmButton(e, Alert);
              if (rs === false) return;
              $Layer.close(Alert);
            }
          }
        }, properties.confirmButtonText)
      ]);
    };
  }
  if (!properties.render) {
    properties.render = function (h) {
      return h('div', {
        style: {
          padding: '15px'
        },
        domProps: {
          innerHTML: properties.content
        }
      });
    };
  }
  Alert = $Layer(properties);
  return Alert;
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
        content: opts,
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
