import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import docsConf from '../docs.config';

//文档路由
let DocRoutes = {
  path: '/docs',
  name: "Docs",
  component: r => require.ensure([], () => r(require(`../components/Docs.vue`))),
  children: []
};

let initRouter = (routers = [], parent) => {
  routers.forEach(router => {
    if (router.items) {
      let r = {
        path: router.path,
        name: router.name,
        component: r => require.ensure([], () => r(require(`../components/${router.name}.vue`))),
        children: []
      };
      initRouter(router.items, r);
      parent.children.push(r);
    } else {
      parent.children.push({
        path: router.path,
        name: router.name,
        component: r => require.ensure([], () => r(require(`../docs/${router.name}.md`)))
      });
    }
  });
};

initRouter(docsConf, DocRoutes);

export default new Router({
  routes: [{
    path: "/",
    redirect: "LayerFrame",
  }, DocRoutes]
});
