/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/19
 * version: v1.0
 */

import LayerRight from './layer/index.js';
import Alert from './alert/index.js';

const components = [
  LayerRight,
  Alert
];

const install = function (Vue) {
  components.map(component => Vue.component(component.name, component));
  // Vue.prototype.$loading = WLoadingBar
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  LayerRight,
  Alert
}
