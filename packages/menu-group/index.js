import MenuGroup from '../menu/src/MenuGroup.vue';

MenuGroup.install = function (Vue) {
  Vue.component(MenuGroup.name, MenuGroup);
};

export default MenuGroup;
