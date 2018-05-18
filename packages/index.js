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
import Button from './button/index.js';
import Icon from './icon/index.js';
import Message from './message/index.js';
import {$Message} from './message/index.js';
import Loading from './loading/index.js';
import {$Loading} from './loading/index.js';
import Layer from './layer/index.js';
import {$Layer} from './layer/index.js';

const components = [

  TemplateDoc,
  TemplateTest,

  LayerFrame,
  Button,
  Icon,
  Message,
  Loading,
  Layer
];

const install = function (Vue, options = {}) {

  for (let component of components) {
    component.install(Vue, options[component.optionName]);
  }

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {

  TemplateDoc,
  TemplateTest,

  LayerFrame,
  Button,
  Icon,
  Message,
  $Message,
  Loading,
  $Loading,
  Layer,
  $Layer
}

export default install;
