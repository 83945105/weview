<template>
  <!--<menu-collapse-transition>-->
  <div class="we-menu-external" style="width: 50px">
    <animation name="menuFadeIn">
      <scroll-bar v-show="show">

        <ul class="we-menu">
          <slot></slot>
        </ul>

      </scroll-bar>
    </animation>
  </div>
  <!--</menu-collapse-transition>-->
</template>

<script>

  import Conf from '../../src/mixins/conf.js';
  import Emitter from '../../src/mixins/emitter.js';

  import ScrollBar from '../../scroll-bar/src/ScrollBar.vue';
  import Animation from '../../animation/src/Animation.vue';
  import {addClass, removeClass, hasClass} from '../../src/utils/dom.js';

  export default {

    components: {
      ScrollBar: ScrollBar, Animation, 'menu-collapse-transition': {
        functional: true,
        render(createElement, context) {
          return createElement('transition', {
            props: {
              mode: 'out-in'
            },
            on: {
              beforeEnter(el) {
                el.style.opacity = 0.2;
              },

              enter(el) {
                addClass(el, 'we-opacity-transition');
                el.style.opacity = 1;
              },

              afterEnter(el) {
                removeClass(el, 'we-opacity-transition');
                el.style.opacity = '';
              },

              beforeLeave(el) {
                if (!el.dataset) el.dataset = {};

                if (hasClass(el, 'we-menu--collapse')) {
                  removeClass(el, 'we-menu--collapse');
                  el.dataset.oldOverflow = el.style.overflow;
                  el.dataset.scrollWidth = el.clientWidth;
                  addClass(el, 'we-menu--collapse');
                } else {
                  addClass(el, 'we-menu--collapse');
                  el.dataset.oldOverflow = el.style.overflow;
                  el.dataset.scrollWidth = el.clientWidth;
                  removeClass(el, 'we-menu--collapse');
                }

                el.style.width = el.scrollWidth + 'px';
                el.style.overflow = 'hidden';
              },

              leave(el) {
                addClass(el, 'horizontal-collapse-transition');
                el.style.width = el.dataset.scrollWidth + 'px';
              }
            }
          }, context.children);
        }
      }
    },

    name: `${Conf.prefixCls}-menu`,

    componentName: `${Conf.prefixNameCls}Menu`,

    optionName: `menu`,

    mixins: [Conf, Emitter],

    provide() {
      return {
        menu: this
      };
    },

    inject: {
      menuItem: {
        default: null
      }
    },

    data() {
      return {
        show: this.value,
        indentNum: undefined,
        root: false
      };
    },

    props: {
      value: {//菜单是否显示
        type: Boolean,
        default: true
      },
      mode: {//菜单模式  vertical - 垂直  horizontal - 水平
        type: String,
        default: 'vertical'
      },
      collapse: {//是否水平折叠,仅当mode为 vertical 时有效
        type: Boolean
      }
    },

    watch: {
      value(v) {
        this.show = v;
      },
      show(v) {
        this.$emit('input', v);
      }
    },

    methods: {
      handleItemClick({menu, item}) {
        if (this.root) {
          this.broadcast(`${this.prefixNameCls}MenuItem`, 'item-un-selected', {menu: menu, item: item});
        } else {
          //因为通知的是根节点,如果当前节点不是根节点,不符合预期效果
          throw new Error('this menu is not root.');
        }
      },
      handleItemExpand({menu, item}) {
        this.show = item.expand;
      }
    },

    created() {
      if (this.menuItem) {
        this.menuItem.hasSubMenu = true;
        this.menuItem.expand = this.value;
        this.indentNum = this.menuItem.indentNum + 1;
      } else {
        this.root = true;
      }
      this.$on('item-click', this.handleItemClick);
      this.$on('item-expand', this.handleItemExpand);
    }

  }
</script>
