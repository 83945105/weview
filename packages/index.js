/*!
 * Title:
 * Description:
 * author: 白超
 * qq: 83945105
 * wx: wx_83945105
 * date: 2018/4/19
 * version: v1.0
 */

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
import Radio from './radio/index.js';
import Menu from './menu/index.js';
import MenuItem from './menu-item/index.js';
import MenuItemGroup from './menu-item-group/index.js';
import Skeleton from './skeleton/index.js';
import {$Skeleton} from './skeleton/index.js';
import Tooltip from './tooltip/index.js';
import Popover from './popover/index.js';
import Table from './table/index.js';

import PopupManager from './src/utils/popup.js';

const components = [
  Animation,
  Button,
  Icon,
  Message,
  Loading,
  Layer,
  Alert,
  Confirm,
  Radio,
  Menu,
  MenuItem,
  MenuItemGroup,
  Skeleton,
  Tooltip,
  Popover,
  Table
];

const install = function (Vue, options = {}) {
  for (let idx in components) {
    components[idx].install(Vue, options[components[idx].optionName]);
  }

  const WEVIEW = {
    zIndex: options.zIndex || 1024,
    size: options.size || '',
    appendToBody: options.appendToBody || ''
  };
  PopupManager.zIndex = WEVIEW.zIndex;

  Vue.prototype.$WEVIEW = WEVIEW;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
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
  $Confirm,
  Radio,
  Menu,
  MenuItem,
  MenuItemGroup,
  Skeleton,
  $Skeleton,
  Tooltip,
  Popover,
  Table
}

export default install;
