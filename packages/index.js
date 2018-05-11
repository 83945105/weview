/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/19
 * version: v1.0
 */

import TemplateDoc from '../web/packages/template-doc/index.js';
import TemplateTest from '../web/packages/template-test/index.js';

import LayerFrame from './layer-frame/index.js';
import LayerFrameTop from './layer-frame-top/index.js';
import LayerFrameBottom from './layer-frame-bottom/index.js';
import Button from './button/index.js';
import Icon from './icon/index.js';
import Message from './message/index.js';
import {$Message} from './message/index.js';
import Loading from './loading/index.js';
import {$Loading} from './loading/index.js';

const components = [

  TemplateDoc,
  TemplateTest,

  LayerFrame,
  LayerFrameTop,
  LayerFrameBottom,
  Button,
  Icon,
  Message,
  $Message,
  Loading,
  $Loading
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
  if (typeof messageAlias === 'string') {
    Vue.prototype[messageAlias] = $Message;
  } else if (Array.isArray(messageAlias)) {
    for (let alias of messageAlias) {
      Vue.prototype[alias] = $Message;
    }
  } else {
    Vue.prototype[WeViewOptions.message.alias] = $Message;
  }

  Vue.prototype.$WEVIEW = WEVIEW;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {

  TemplateDoc,
  TemplateTest,

  LayerFrame,
  LayerFrameTop,
  LayerFrameBottom,
  Button,
  Icon,
  Message,
  $Message,
  Loading,
  $Loading

}

export default install;
