import Vue from 'vue';
import $Layer from '../../layer/src/layer.js';
import WeButton from '../../button/src/Button.vue';
import {isObject, isString} from "../../../web/src/utils/util.js";
import Conf from "../../../src/mixins/conf";

const Default = {
  title: '确认',
  message: '',
  confirmButtonText: '确定',
  clickConfirm: undefined,
  cancelButtonText: '取消',
  clickCancel: undefined,
  onClose: undefined,
  escCloseable: false,
  maskClosable: false,
  iconName: 'help-circle-o',
  footerAlign: 'right'
};

const merge = require('webpack-merge');

const Confirm = function (opts) {
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
      let btn = [];
      btn.push(h(WeButton, {
        style: {
          marginRight: '8px'
        },
        on: {
          click(e) {
            opts.clickCancel && opts.clickCancel(e);
            $Layer.close(instance);
          }
        }
      }, opts.cancelButtonText));
      btn.push(h(WeButton, {
        props: {
          type: 'primary'
        },
        on: {
          click(e) {
            opts.clickConfirm && opts.clickConfirm(e, () => {
              $Layer.close(instance);
            });
          }
        }
      }, opts.confirmButtonText));
      return h('div', {
        'class': cls
      },
        [btn]);
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

Confirm.close = function (target) {
  $Layer.close(target);
};

Confirm.closeAll = function () {
  $Layer.closeAll();
};

export default Confirm;
