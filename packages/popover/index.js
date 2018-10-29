import Popover from './src/Popover.vue';

Popover.install = function (Vue) {
  Vue.component(Popover.name, Popover);
};

export default Popover;
