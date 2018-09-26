import Menu from './src/Menu.vue';

Menu.install = function (Vue) {
  Vue.component(Menu.name, Menu);
};

export default Menu;
