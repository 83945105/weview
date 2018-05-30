/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/19
 * version: v1.0
 */

import TemplateDoc from '../web/packages/template-doc/index.js';
import TemplateTest from '../web/packages/template-test/index.js';
import Animation from './animation/index.js';
import Button from './button/index.js';
import Icon from './icon/index.js';
import Message from './message/index.js';
import {$Message} from './message/index.js';
import Loading from './loading/index.js';
import {$Loading} from './loading/index.js';
import Layer from './layer/index.js';
import {$Layer} from './layer/index.js';
import Alert from './alert/index.js';
import {$Alert} from './alert/index.js';
import Confirm from './confirm/index.js';
import {$Confirm} from './confirm/index.js';

const components = [

  TemplateDoc,
  TemplateTest,

  Animation,
  Button,
  Icon,
  Message,
  Loading,
  Layer,
  Alert,
  Confirm
];

const install = function (Vue, options = {}) {

  for (let idx in components) {
    components[idx].install(Vue, options[components[idx].optionName]);
  }

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {

  TemplateDoc,
  TemplateTest,

  Animation,
  Button,
  Icon,
  Message,
  $Message,
  Loading,
  $Loading,
  Layer,
  $Layer,
  $Alert,
  $Confirm
}

export default install;
