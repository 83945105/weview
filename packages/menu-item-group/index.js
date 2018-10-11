import MenuItemGroup from '../menu/src/MenuItemGroup.vue';

MenuItemGroup.install = function (Vue) {
  Vue.component(MenuItemGroup.name, MenuItemGroup);
};

export default MenuItemGroup;
