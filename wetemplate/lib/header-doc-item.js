!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wetemplate",[],t):"object"==typeof exports?exports.wetemplate=t():e.wetemplate=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t){e.exports=function(e,t,n,o,r,i){var s,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,a=e.default);var p,l="function"==typeof a?a.options:a;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r),i?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=p):o&&(p=o),p){var u=l.functional,f=u?l.render:l.beforeCreate;u?(l._injectStyles=p,l.render=function(e,t){return p.call(t),f(e,t)}):l.beforeCreate=f?[].concat(f,p):[p]}return{esModule:s,exports:a,options:l}}},function(e,t,n){"use strict";Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return isNaN(t)?e.toUpperCase():(t=parseInt(t),""+e.substring(0,t).toUpperCase()+e.substring(t))}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e=e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}("we-template"),1);t.a={prefixCls:"we-template",prefixNameCls:o,data:function(){return{prefixCls:"we-template"}},computed:{prefixNameCls:function(){return o}}}},function(e,t,n){"use strict";t.a={methods:{dispatch:function(e,t,n){for(var o=this.$parent||this.$root,r=o.$options.componentName;o&&(!r||r!==e);)(o=o.$parent)&&(r=o.$options.componentName);o&&o.$emit.apply(o,[t].concat(n))},dispatchRoot:function(e,t,n){for(var o=this.$parent||this.$root,r=void 0;o;)(o=o.$parent)&&e===o.$options.componentName&&(r=o);r&&r.$emit.apply(r,[t].concat(n))},broadcast:function(e,t,n){(function e(t,n,o){this.$children.forEach(function(r){r.$options.componentName===t?r.$emit.apply(r,[n].concat(o)):e.apply(r,[t,n].concat([o]))})}).call(this,e,t,n)}}}},,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=n(2),i={name:o.a.prefixCls+"-header-doc-item",componentName:o.a.prefixNameCls+"HeaderDocItem",mixins:[r.a,o.a],data:function(){return{selected:this.value}},props:{label:{type:String,default:"未命名项"},value:{type:Boolean,default:!1}},computed:{selectedClass:function(){return this.selected?"selected":void 0}},watch:{value:function(e){this.selected=e},selected:function(e){this.$emit("input",e)}},methods:{handleClick:function(e){this.dispatch(this.prefixNameCls+"HeaderDoc","handleClickItem"),this.selected=!0,this.$emit("click",e)}},created:function(){var e=this;this.$on("handleUnSelected",function(){e.selected=!1})}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("li",{class:[this.selectedClass]},[t("a",{attrs:{href:"javascript:void(0)"},on:{click:this.handleClick}},[this._v(this._s(this.label))])])},staticRenderFns:[]},a=n(0)(i,s,!1,null,null,null).exports;a.install=function(e){e.component(a.name,a)};t.default=a}])});