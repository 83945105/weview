import ScrollBar from '../scroll-bar/src/ScrollBar.vue';

ScrollBar.install = function (Vue) {
  Vue.component(ScrollBar.name, ScrollBar);
};

export default ScrollBar;
