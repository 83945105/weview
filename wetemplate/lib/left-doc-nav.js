!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wetemplate",[],t):"object"==typeof exports?exports.wetemplate=t():e.wetemplate=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){e.exports=function(e,t,n,o,i,r){var s,l=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,l=e.default);var c,u="function"==typeof l?l.options:l;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId=i),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=c):o&&(c=o),c){var p=u.functional,f=p?u.render:u.beforeCreate;p?(u._injectStyles=c,u.render=function(e,t){return c.call(t),f(e,t)}):u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:s,exports:l,options:u}}},function(e,t,n){"use strict";Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return isNaN(t)?e.toUpperCase():(t=parseInt(t),""+e.substring(0,t).toUpperCase()+e.substring(t))}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e=e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}("we-template"),1);t.a={prefixCls:"we-template",prefixNameCls:o,data:function(){return{prefixCls:"we-template"}},computed:{prefixNameCls:function(){return o}}}},function(e,t,n){"use strict";t.a={methods:{dispatch:function(e,t,n){for(var o=this.$parent||this.$root,i=o.$options.componentName;o&&(!i||i!==e);)(o=o.$parent)&&(i=o.$options.componentName);o&&o.$emit.apply(o,[t].concat(n))},dispatchRoot:function(e,t,n){for(var o=this.$parent||this.$root,i=void 0;o;)(o=o.$parent)&&e===o.$options.componentName&&(i=o);i&&i.$emit.apply(i,[t].concat(n))},broadcast:function(e,t,n){(function e(t,n,o){this.$children.forEach(function(i){i.$options.componentName===t?i.$emit.apply(i,[n].concat(o)):e.apply(i,[t,n].concat([o]))})}).call(this,e,t,n)}}}},,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),i=n(2),r={name:o.a.prefixCls+"-left-doc-nav",componentName:o.a.prefixNameCls+"LeftDocNav",mixins:[o.a,i.a],data:function(){return{selected:this.value}},props:{label:String,labelLevel:{type:Number,default:1},labelStyle:String,value:Boolean},computed:{hasChildren:function(){return!!this.$slots.default},navClass:function(){return this.prefixCls+"-menu-item"},labelClass:function(){return this.prefixCls+"-menu-item-title"},labelLevelClass:function(){return"title-"+this.labelLevel},labelStyleClass:function(){if("mini"===this.labelStyle)return"mini-title"},linkClass:function(){return this.hasChildren?void 0:"link"},selectedClass:function(){return this.selected?"selected":void 0}},watch:{value:function(e){this.selected=e},selected:function(e){this.$emit("input",e)}},methods:{handleClick:function(e){this.hasChildren||(this.dispatchRoot(this.prefixNameCls+"LeftDocNav","handleClickItem"),this.selected=!0,this.$emit("click",e))}},created:function(){var e=this;this.$on("handleClickItem",function(){e.broadcast(e.prefixNameCls+"LeftDocNav","unSelected")}),this.$on("unSelected",function(){e.selected=!1,e.broadcast(e.prefixNameCls+"LeftDocNav","unSelected")})}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.navClass]},[e.label?n("h3",{class:[e.labelClass,e.labelLevelClass,e.labelStyleClass,e.linkClass,e.selectedClass],on:{click:e.handleClick}},[e._v(e._s(e.label))]):e._e(),e._v(" "),e._t("default")],2)},staticRenderFns:[]},l=n(0)(r,s,!1,null,null,null).exports;l.install=function(e){e.component(l.name,l)};t.default=l}])});