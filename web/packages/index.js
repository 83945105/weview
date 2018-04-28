/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/26
 * version: v1.0
 */

//TODO 待删除开始
import WebApiDocContent from './web-api-doc/content/index';
import WebApiDocHeadItem from './web-api-doc/head-item/index';
import WebApiDocHeadMenu from './web-api-doc/head-menu/index';
import WebApiDocLeftGroupOne from './web-api-doc/left-group-one/index';
import WebApiDocLeftGroupTwo from './web-api-doc/left-group-two/index';
import WebApiDocLeftItem from './web-api-doc/left-item/index';
import WebApiDocLeftMenu from './web-api-doc/left-menu/index';
import WebApiDocRightContent from './web-api-doc/right-content/index';
//TODO 待删除结束

import HeadDoc from './head-doc/index.js';
import HeadDocItem from './head-doc-item/index.js';
import Layout from './layout/index.js';
import MenuLeft from './menu-left/index.js';

const components = [
  WebApiDocContent,
  WebApiDocHeadItem,
  WebApiDocHeadMenu,
  WebApiDocLeftGroupOne,
  WebApiDocLeftGroupTwo,
  WebApiDocLeftItem,
  WebApiDocLeftMenu,
  WebApiDocRightContent,

  HeadDoc,
  HeadDocItem,
  Layout,
  MenuLeft
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
  WebApiDocRightContent,

  HeadDoc,
  HeadDocItem,
  Layout,
  MenuLeft
}

export default install;
