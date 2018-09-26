import MenuItem from '../menu/src/MenuItem.vue';

MenuItem.install = function (Vue) {
  Vue.component(MenuItem.name, MenuItem);
};

export default MenuItem;
