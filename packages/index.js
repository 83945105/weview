/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/19
 * version: v1.0
 */

/*网站组件相关*/
import WebApiDocContent from '../web/packages/web-api-doc/content/index';
import WebApiDocHeadItem from '../web/packages/web-api-doc/head-item/index';
import WebApiDocHeadMenu from '../web/packages/web-api-doc/head-menu/index';
import WebApiDocLeftGroupOne from '../web/packages/web-api-doc/left-group-one/index';
import WebApiDocLeftGroupTwo from '../web/packages/web-api-doc/left-group-two/index';
import WebApiDocLeftItem from '../web/packages/web-api-doc/left-item/index';
import WebApiDocLeftMenu from '../web/packages/web-api-doc/left-menu/index';
import WebApiDocRightContent from '../web/packages/web-api-doc/right-content/index';
/*网站组件相关*/

/*基础组件相关*/
const WebComponents = [
  WebApiDocContent,
  WebApiDocHeadItem,
  WebApiDocHeadMenu,
  WebApiDocLeftGroupOne,
  WebApiDocLeftGroupTwo,
  WebApiDocLeftItem,
  WebApiDocLeftMenu,
  WebApiDocRightContent
];
/*基础组件相关*/

import LayerFrame from './layer-frame/index';
import LayerFrameTop from './layer-frame-top/index';

const components = [
  LayerFrame,
  LayerFrameTop,
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

const install = function (Vue, opts = {}) {

  register(Vue, components);

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
  LayerFrameTop,
  WebComponents
}

export default install;
