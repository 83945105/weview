!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("weview",[],t):"object"==typeof exports?exports.weview=t():e.weview=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=189)}({0:function(e,t,n){"use strict";var r=n(7),o=Object(r.d)(Object(r.c)("we"),1);t.a={prefixCls:"we",prefixNameCls:o,data:function(){return{prefixCls:"we"}},computed:{prefixNameCls:function(){return o}}}},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o={name:r.a.prefixCls+"-menu-group",componentName:r.a.prefixNameCls+"MenuGroup",optionName:"menuGroup",mixins:[r.a],provide:function(){return{menuGroup:this}},inject:{indentNum:{default:0},rootMenu:{default:null},menu:{default:null},menuItem:{default:null}},data:function(){return{showTitle:!0}},props:{title:String},computed:{indentStyle:function(){return{paddingLeft:this.indentNum>0?15*this.indentNum+50+"px":"50px"}}},watch:{"rootMenu.collapse":{handler:function(e){this.showTitle=!e},deep:!0}},created:function(){this.rootMenu&&(this.showTitle=!this.rootMenu.collapse)}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"we-menu-item-group"},[n("h3",{directives:[{name:"show",rawName:"v-show",value:e.showTitle&&e.title,expression:"showTitle && title"}],staticClass:"we-menu-item-group-title",style:[e.indentStyle]},[e._v(e._s(e.title))]),e._v(" "),n("ul",[e._t("default")],2)])},staticRenderFns:[]},u=n(2)(o,i,!1,null,null,null).exports;u.install=function(e){e.component(u.name,u)};t.default=u},2:function(e,t){e.exports=function(e,t,n,r,o,i){var u,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(u=e,s=e.default);var l,a="function"==typeof s?s.options:s;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId=o),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},a._ssrRegister=l):r&&(l=r),l){var p=a.functional,f=p?a.render:a.beforeCreate;p?(a._injectStyles=l,a.render=function(e,t){return l.call(t),f(e,t)}):a.beforeCreate=f?[].concat(f,l):[l]}return{esModule:u,exports:s,options:a}}},7:function(e,t,n){"use strict";function r(e){return"[object String]"===Object.prototype.toString.call(e)}function o(e){return"[object Object]"===Object.prototype.toString.call(e)}t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];if(isNaN(t))return e.toUpperCase();return t=parseInt(t),""+e.substring(0,t).toUpperCase()+e.substring(t)},t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e=e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},t.b=r,t.a=o;Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable}})});