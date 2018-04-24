/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/19
 * version: v1.0
 */

import LayerFrame from './layer-frame/index';
import LayerFrameTop from './layer-frame-top/index';

const components = [
  LayerFrame,
  LayerFrameTop
];

const install = function (Vue, opts = {}) {

  components.map(component => Vue.component(component.name, component));

  const WEVIEW = {
    version: '1.0.0',
    size: opts.size || ''
  };

  Vue.prototype.$WEVIEW = WEVIEW;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  LayerFrame,
  LayerFrameTop
}

export default install;
