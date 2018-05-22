import Layer from './src/Layer.vue';
import $Layer from './src/layer.js';
import LayerDirective from "./src/directive.js";

const DefaultLayerOptions = {
  alias: '$layer'
};

const merge = require('webpack-merge');

Layer.install = function (Vue, options = DefaultLayerOptions) {

  Vue.component(Layer.name, Layer);

  Vue.use(LayerDirective);

  let opts = merge(DefaultLayerOptions, options);

  let layerAlias = opts.alias;
  if (typeof layerAlias === 'string') {
    Vue.prototype[layerAlias] = $Layer;
  } else if (Array.isArray(layerAlias)) {
    for (let alias of layerAlias) {
      Vue.prototype[alias] = $Layer;
    }
  } else {
    Vue.prototype[DefaultLayerOptions.alias] = $Layer;
  }

};

export default Layer;

export {$Layer}
