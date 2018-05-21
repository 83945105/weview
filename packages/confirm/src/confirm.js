import Vue from 'vue';
import $Layer from '../../layer/src/layer.js';
import WeButton from '../../button/src/Button.vue';
import {isObject, isString} from "../../../web/src/utils/util.js";

const Default = {
  title: '确认',
  message: '',
  confirmButtonText: '确定',
  clickConfirm: undefined,
  cancelButtonText: '取消',
  clickCancel: undefined,
  onClose: undefined,
  escCloseable: false,
  maskClosable: false
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
    opts.footerRender = function (h) {
      let btn = [];
      btn.push(h(WeButton, {
        style: {
          marginRight: '3px'
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
      return h('div', [btn]);
    };
  }

  instance = $Layer({
    ...opts,
    render(h, props) {
      return h('div', {
        style: {
          padding: '15px'
        },
        domProps: {
          innerHTML: opts.message
        }
      });
    }
  });

  return instance;
};

export default Confirm;
