/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/26
 * version: v1.0
 */

import BodyDoc from './body-doc/index.js';
import HeadDoc from './head-doc/index.js';
import HeadDocItem from './head-doc-item/index.js';
import Layout from './layout/index.js';
import LeftDocNav from './left-doc-nav/index.js';

const components = [
  BodyDoc,
  HeadDoc,
  HeadDocItem,
  Layout,
  LeftDocNav
];

const install = function (Vue, opts = {}) {

  components.map(component => Vue.component(component.name, component));

};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  BodyDoc,
  HeadDoc,
  HeadDocItem,
  Layout,
  LeftDocNav
}

export default install;
