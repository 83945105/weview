import TemplateTest from '../template/src/TemplateTest.vue';

TemplateTest.install = function (Vue) {
  Vue.component(TemplateTest.name, TemplateTest);
};

export default TemplateTest;
