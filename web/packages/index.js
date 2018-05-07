/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/26
 * version: v1.0
 */

import BodyDoc from './body-doc/index.js';
import HeadDoc from './header-doc/index.js';
import HeadDocItem from './header-doc-item/index.js';
import Layout from './layout/index.js';
import LeftDocNav from './left-doc-nav/index.js';
import TemplateDoc from './template-doc/index.js';
import TemplateTest from './template-test/index.js';

const components = [
  BodyDoc,
  HeadDoc,
  HeadDocItem,
  Layout,
  LeftDocNav,
  TemplateDoc,
  TemplateTest
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
  LeftDocNav,
  TemplateDoc,
  TemplateTest
}

export default install;
