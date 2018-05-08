import TemplateDoc from '../template/src/TemplateDoc';

TemplateDoc.install = function (Vue) {
  Vue.component(TemplateDoc.name, TemplateDoc);
};

export default TemplateDoc;
