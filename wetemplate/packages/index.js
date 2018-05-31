/*!
 * Title:
 * Description:
 * author: 白超
 * date: 2018/4/26
 * version: v1.0
 */

import TemplateDoc from './template-doc/index.js';
import TemplateTest from './template-test/index.js';

const components = [
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
  TemplateDoc,
  TemplateTest
}

export default install;
