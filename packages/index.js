/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/19
 * version: v1.0
 */

/*基础组件相关*/
const WebComponents = [
];
/*基础组件相关*/

import LayerFrame from './layer-frame/index';
import LayerFrameTop from './layer-frame-top/index';
import LayerFrameBottom from './layer-frame-bottom/index';
import Button from './button/index';
import Message from './message/index';
import {$Message} from './message/index';

const components = [
  LayerFrame,
  LayerFrameTop,
  LayerFrameBottom,
  Button,
  Message,

  WebComponents
];

const register = function (Vue, components) {
  components.map(component => {
    if (Array.isArray(component)) {
      register(Vue, component);
    } else {
      Vue.component(component.name, component);
    }
  });
};

const WeViewOptions = {
  size: '',
  message: {
    alias: '$message'
  }
};

const merge = require('webpack-merge');

const install = function (Vue, options = {}) {

  let opts = merge(WeViewOptions, options);

  register(Vue, components);

  const WEVIEW = {
    version: '1.0.0',
    size: opts.size || ''
  };

  let messageAlias = opts.message.alias;
  if(typeof messageAlias === 'string') {
    Vue.prototype[messageAlias] = $Message;
  }else if(Array.isArray(messageAlias)) {
    for (let alias of messageAlias) {
      Vue.prototype[alias] = $Message;
    }
  }else {
    Vue.prototype[WeViewOptions.message.alias] = $Message;
  }

  Vue.prototype.$WEVIEW = WEVIEW;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  LayerFrame,
  LayerFrameTop,
  LayerFrameBottom,
  Button,
  Message,

  WebComponents
}

export default install;
