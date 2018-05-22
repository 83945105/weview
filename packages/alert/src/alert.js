import Vue from 'vue';
import $Layer from '../../layer/src/layer.js';
import WeButton from '../../button/src/Button.vue';
import {isObject, isString} from "../../../web/src/utils/util";

const Default = {
  title: '警告',
  message: '',
  confirmButtonText: '确定',
  onClose: undefined,
  escCloseable: false,
  maskClosable: false,
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
    opts.footerRender = function (h) {
      return h('div', [
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

export default Alert;
