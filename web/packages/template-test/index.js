import TemplateTest from '../template/src/TemplateTest';

TemplateTest.install = function (Vue) {
  Vue.component(TemplateTest.name, TemplateTest);
};

export default TemplateTest;
