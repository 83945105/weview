import Vue from 'vue';
import $Layer from '../../layer/src/layer.js';
import WeButton from '../../button/src/Button.vue';
import {isObject, isString} from "../../src/utils/util.js";
import Conf from "../../src/mixins/conf.js";
import merge from "../../src/utils/merge.js";

const Default = {
  title: '确认',
  content: '',
  confirmButtonText: '确定',
  onClickConfirmButton: () => {
  },
  cancelButtonText: '取消',
  onClickCancelButton: () => {
  },
  escCloseable: false,
  maskClosable: false,
  iconName: 'help-circle-o',
  footerAlign: 'right'
};

const Confirm = function (properties = {}) {
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

  let Confirm;
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
      const cancelButtonOptions = merge({}, properties.cancelButtonOptions);
      if (!cancelButtonOptions.type) {
        cancelButtonOptions.type = 'text';
      }
      const confirmButtonOptions = merge({}, properties.confirmButtonOptions);
      if (!confirmButtonOptions.type) {
        confirmButtonOptions.type = 'primary';
      }
      return h('div', {
        'class': cls
      }, [h(WeButton, {
        props: cancelButtonOptions,
        on: {
          click(e) {
            const rs = properties.onClickCancelButton(e, Confirm);
            if (rs === false) return;
            $Layer.close(Confirm);
          }
        }
      }, properties.cancelButtonText), h(WeButton, {
        props: confirmButtonOptions,
        on: {
          click(e) {
            properties.onClickConfirmButton(e, Confirm);
          }
        }
      }, properties.confirmButtonText)]);
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
  Confirm = $Layer(properties);
  return Confirm;
};

Confirm.close = function (target) {
  $Layer.close(target);
};

Confirm.closeAll = function () {
  $Layer.closeAll();
};

export default Confirm;
