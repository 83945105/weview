/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/26
 * version: v1.0
 */

import WebApiDocContent from './web-api-doc/content/index';
import WebApiDocHeadItem from './web-api-doc/head-item/index';
import WebApiDocHeadMenu from './web-api-doc/head-menu/index';
import WebApiDocLeftGroupOne from './web-api-doc/left-group-one/index';
import WebApiDocLeftGroupTwo from './web-api-doc/left-group-two/index';
import WebApiDocLeftItem from './web-api-doc/left-item/index';
import WebApiDocLeftMenu from './web-api-doc/left-menu/index';
import WebApiDocRightContent from './web-api-doc/right-content/index';

const components = [
  WebApiDocContent,
  WebApiDocHeadItem,
  WebApiDocHeadMenu,
  WebApiDocLeftGroupOne,
  WebApiDocLeftGroupTwo,
  WebApiDocLeftItem,
  WebApiDocLeftMenu,
  WebApiDocRightContent
];

const install = function (Vue, opts = {}) {

  components.map(component => Vue.component(component.name, component));

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  WebApiDocContent,
  WebApiDocHeadItem,
  WebApiDocHeadMenu,
  WebApiDocLeftGroupOne,
  WebApiDocLeftGroupTwo,
  WebApiDocLeftItem,
  WebApiDocLeftMenu,
  WebApiDocRightContent
}

export default install;
