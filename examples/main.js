// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Index from './Index'
import router from './router'

Vue.config.productionTip = false;

import wetemplate from 'wetemplate';
import 'wetemplate/lib/theme-chalk/index.css';

Vue.use(wetemplate);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

import weview from '../packages/index.js';
// import '../lib/theme-chalk/index.css';
Vue.use(weview, {
  // size: 'large',
});


import DemoBlock from './components/demo-block';

Vue.component(DemoBlock.name, DemoBlock);

/* eslint-disable no-new */
new Vue({
  el: '#index',
  router,
  components: {Index},
  template: '<Index/>'
});
