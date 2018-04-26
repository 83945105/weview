import Item from '../left/src/Item';

Item.install = function (Vue) {
  Vue.component(Item.name, Item);
};

export default Item;
