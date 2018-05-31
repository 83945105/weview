!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wetemplate",[],t):"object"==typeof exports?exports.wetemplate=t():e.wetemplate=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=8)}([function(e,t){e.exports=function(e,t,n,a,l,o){var i,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(i=e,s=e.default);var c,u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),l&&(u._scopeId=l),o?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):a&&(c=a),c){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(e,t){return c.call(t),f(e,t)}):u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:i,exports:s,options:u}}},function(e,t,n){"use strict";Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];return isNaN(t)?e.toUpperCase():(t=parseInt(t),""+e.substring(0,t).toUpperCase()+e.substring(t))}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e=e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}("we-template"),1);t.a={prefixCls:"we-template",prefixNameCls:a,data:function(){return{prefixCls:"we-template"}},computed:{prefixNameCls:function(){return a}}}},function(e,t,n){"use strict";t.a={methods:{dispatch:function(e,t,n){for(var a=this.$parent||this.$root,l=a.$options.componentName;a&&(!l||l!==e);)(a=a.$parent)&&(l=a.$options.componentName);a&&a.$emit.apply(a,[t].concat(n))},dispatchRoot:function(e,t,n){for(var a=this.$parent||this.$root,l=void 0;a;)(a=a.$parent)&&e===a.$options.componentName&&(l=a);l&&l.$emit.apply(l,[t].concat(n))},broadcast:function(e,t,n){(function e(t,n,a){this.$children.forEach(function(l){l.$options.componentName===t?l.$emit.apply(l,[n].concat(a)):e.apply(l,[t,n].concat([a]))})}).call(this,e,t,n)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l={name:a.a.prefixCls+"-body-doc",componentName:a.a.prefixNameCls+"BodyDoc",computed:{bodyClass:function(){return this.prefixCls+"-main"}}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{class:[this.bodyClass]},[this._t("default")],2)},staticRenderFns:[]},i=n(0)(l,o,!1,null,null,null).exports;i.install=function(e){e.component(i.name,i)};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=n(2),o={name:a.a.prefixCls+"-header-doc",componentName:a.a.prefixNameCls+"HeaderDoc",mixins:[l.a,a.a],props:{logoSrc:{type:String},title:{type:String,default:"未命名项目"}},computed:{headerClass:function(){return this.prefixCls+"-header"},headerLogoClass:function(){return this.prefixCls+"-header-logo"},headerLogoImgClass:function(){return this.prefixCls+"-header-logo-img"},headerLogoText:function(){return this.prefixCls+"-header-logo-text"},navClass:function(){return this.prefixCls+"-nav"}},methods:{handleClickLogo:function(e){this.$emit("click-logo",e)}},created:function(){var e=this;this.$on("handleClickItem",function(){e.broadcast(e.prefixNameCls+"HeaderDocItem","handleUnSelected")})}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.headerClass]},[n("a",{class:[e.headerLogoClass],attrs:{href:"javascript:void(0)"},on:{click:e.handleClickLogo}},[e._t("logo",[n("img",{class:[e.headerLogoImgClass],attrs:{src:e.logoSrc}})]),e._v(" "),n("div",{class:[e.headerLogoText]},[e._v(e._s(e.title))])],2),e._v(" "),e.$slots.default?n("div",{class:[e.navClass]},[n("ul",[e._t("default")],2)]):e._e()])},staticRenderFns:[]},s=n(0)(o,i,!1,null,null,null).exports;s.install=function(e){e.component(s.name,s)};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=n(2),o={name:a.a.prefixCls+"-header-doc-item",componentName:a.a.prefixNameCls+"HeaderDocItem",mixins:[l.a,a.a],data:function(){return{selected:this.value}},props:{label:{type:String,default:"未命名项"},value:{type:Boolean,default:!1}},computed:{selectedClass:function(){return this.selected?"selected":void 0}},watch:{value:function(e){this.selected=e},selected:function(e){this.$emit("input",e)}},methods:{handleClick:function(e){this.dispatch(this.prefixNameCls+"HeaderDoc","handleClickItem"),this.selected=!0,this.$emit("click",e)}},created:function(){var e=this;this.$on("handleUnSelected",function(){e.selected=!1})}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("li",{class:[this.selectedClass]},[t("a",{attrs:{href:"javascript:void(0)"},on:{click:this.handleClick}},[this._v(this._s(this.label))])])},staticRenderFns:[]},s=n(0)(o,i,!1,null,null,null).exports;s.install=function(e){e.component(s.name,s)};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=n(2),o={name:a.a.prefixCls+"-layout",componentName:a.a.prefixNameCls+"Layout",mixins:[l.a,a.a],computed:{mainClass:function(){return this.prefixCls+"-layout-main"},leftClass:function(){return this.prefixCls+"-layout-left"},rightClass:function(){return this.prefixCls+"-layout-right"},rightContentClass:function(){return this.prefixCls+"-layout-right-content"}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.mainClass]},[e.$slots.left?n("div",{class:[e.leftClass]},[e._t("left")],2):e._e(),e._v(" "),e.$slots.right?n("div",{class:[e.rightClass]},[n("div",{class:[e.rightContentClass]},[e._t("right")],2)]):e._e()])},staticRenderFns:[]},s=n(0)(o,i,!1,null,null,null).exports;s.install=function(e){e.component(s.name,s)};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=n(2),o={name:a.a.prefixCls+"-left-doc-nav",componentName:a.a.prefixNameCls+"LeftDocNav",mixins:[a.a,l.a],data:function(){return{selected:this.value}},props:{label:String,labelLevel:{type:Number,default:1},labelStyle:String,value:Boolean},computed:{hasChildren:function(){return!!this.$slots.default},navClass:function(){return this.prefixCls+"-menu-item"},labelClass:function(){return this.prefixCls+"-menu-item-title"},labelLevelClass:function(){return"title-"+this.labelLevel},labelStyleClass:function(){if("mini"===this.labelStyle)return"mini-title"},linkClass:function(){return this.hasChildren?void 0:"link"},selectedClass:function(){return this.selected?"selected":void 0}},watch:{value:function(e){this.selected=e},selected:function(e){this.$emit("input",e)}},methods:{handleClick:function(e){this.hasChildren||(this.dispatchRoot(this.prefixNameCls+"LeftDocNav","handleClickItem"),this.selected=!0,this.$emit("click",e))}},created:function(){var e=this;this.$on("handleClickItem",function(){e.broadcast(e.prefixNameCls+"LeftDocNav","unSelected")}),this.$on("unSelected",function(){e.selected=!1,e.broadcast(e.prefixNameCls+"LeftDocNav","unSelected")})}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.navClass]},[e.label?n("h3",{class:[e.labelClass,e.labelLevelClass,e.labelStyleClass,e.linkClass,e.selectedClass],on:{click:e.handleClick}},[e._v(e._s(e.label))]):e._e(),e._v(" "),e._t("default")],2)},staticRenderFns:[]},s=n(0)(o,i,!1,null,null,null).exports;s.install=function(e){e.component(s.name,s)};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=n(3),o=n(4),i=n(5),s=n(6),r=n(7),c={components:{BodyDoc:l.default,HeaderDoc:o.default,HeaderDocItem:i.default,Layout:s.default,LeftDocNav:r.default},name:a.a.prefixCls+"-doc",componentName:a.a.prefixNameCls+"Doc",mixins:[a.a],props:{logoSrc:String,logoText:String,pageName:String,headerData:{type:Array,default:function(){return[]}},leftData:{type:Array,default:function(){return[]}}},methods:{handleLinkPage:function(e){var t=e.name;this.$router.push({name:t})},handleLinkRoute:function(e){var t=e.name;this.$router.push({name:t})},clickLogo:function(e){this.$emit("click-logo",e)}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("body-doc",[n("header-doc",{attrs:{"logo-src":e.logoSrc,title:e.logoText},on:{"click-logo":e.clickLogo}},[e._l(e.headerData,function(t,a){return[n("header-doc-item",{key:a,attrs:{label:t.desc,value:t.name===e.pageName},on:{click:function(n){e.handleLinkPage({name:t.name})}}})]})],2),e._v(" "),n("layout",[n("template",{slot:"left"},[n("left-doc-nav",{style:{marginBottom:"100px"}},[e._l(e.leftData,function(t){return[n("left-doc-nav",{key:t.name,style:{marginTop:"15px"},attrs:{value:t.name===e.$route.name,label:t.desc,"label-level":t.items?2:3},on:{click:function(n){e.handleLinkRoute({name:t.name})}}},[e._l(t.items,function(t){return[n("left-doc-nav",{key:t.name,style:{marginTop:"10px"},attrs:{value:t.name===e.$route.name,label:t.desc,"label-level":t.items?5:3,"label-style":t.items?"mini":""},on:{click:function(n){e.handleLinkRoute({name:t.name})}}},[e._l(t.items,function(t){return[n("left-doc-nav",{key:t.name,attrs:{value:t.name===e.$route.name,label:t.desc,"label-level":3},on:{click:function(n){e.handleLinkRoute({name:t.name})}}})]})],2)]})],2)]})],2)],1),e._v(" "),n("template",{slot:"right"},[n("router-view")],1)],2)],1)},staticRenderFns:[]},d=n(0)(c,u,!1,null,null,null).exports;d.install=function(e){e.component(d.name,d)};t.default=d}])});