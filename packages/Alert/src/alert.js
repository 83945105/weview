import $Layer from '../../layer/src/layer.js';
import WeButton from '../../button/src/Button.vue';
import {isObject, isString} from "../../../web/src/utils/util";

const Default = {
  title: '警告',
  confirmButtonText: '确定'
};

const merge = require('webpack-merge');

const Alert = function (opts) {

  if(isString(opts)) {

  }else if(isObject(opts)) {
    opts = merge(Default, opts);
  }

  if(!opts.footerRender) {
    opts.footerRender = function (h) {
      return h('div', [
        h(WeButton, {
          props: {
            type: 'primary'
          }
        }, opts.confirmButtonText)
      ]);
    };
  }

  $Layer({
    render(h, props) {
      return h('div', {
        style: {
          padding: '15px'
        }
      }, '2');
    },
    footerRender: opts.footerRender
  });

};

export default Alert;
