<template>
  <menu-collapse-transition>
    <div v-show="show" class="we-menu-external">
      <scroll-bar>

        <ul class="we-menu">
          <slot></slot>
        </ul>

      </scroll-bar>
    </div>
  </menu-collapse-transition>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';
  import Emitter from '../../src/mixins/emitter.js';

  import ScrollBar from '../../scroll-bar/src/ScrollBar.vue';
  import Animation from '../../animation/src/Animation.vue';
  import {addClass, removeClass, hasClass, getStyle} from '../../src/utils/dom.js';

  export default {

    components: {
      ScrollBar: ScrollBar, 'menu-collapse-transition': {
        functional: true,
        render(createElement, context) {
          return createElement('transition', {
            props: {
              mode: 'out-in'
            },
            on: {
              beforeEnter(el) {
                // addClass(el, 'we-menu-transition');
                if (!el.dataset) el.dataset = {};

                console.log(el.style)


                el.dataset.oldHeight = el.style.height;
                el.dataset.oldPaddingTop = el.style.paddingTop;
                el.dataset.oldPaddingBottom = el.style.paddingBottom;

                el.style.height = '0';
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
              },

              enter(el) {
                el.dataset.oldOverflow = el.style.overflow;
                if (el.scrollHeight !== 0) {
                  el.style.height = el.scrollHeight + 'px';
                  el.style.paddingTop = el.dataset.oldPaddingTop;
                  el.style.paddingBottom = el.dataset.oldPaddingBottom;
                } else {
                  el.style.height = '';
                  el.style.paddingTop = el.dataset.oldPaddingTop;
                  el.style.paddingBottom = el.dataset.oldPaddingBottom;
                }

                el.style.overflow = 'hidden';
              },

              afterEnter(el) {
                // for safari: remove class then reset height is necessary
                // removeClass(el, 'we-menu-transition');
                el.style.height = el.dataset.oldHeight;
                el.style.overflow = el.dataset.oldOverflow;
              },

              beforeLeave(el) {
                if (!el.dataset) el.dataset = {};

                el.dataset.oldHeight = el.style.height;
                el.dataset.oldPaddingTop = el.style.paddingTop;
                el.dataset.oldPaddingBottom = el.style.paddingBottom;
                el.dataset.oldOverflow = el.style.overflow;

                el.style.height = el.scrollHeight + 'px';
                el.style.overflow = 'hidden';
              },

              leave(el) {
                if (el.scrollHeight !== 0) {
                  // for safari: add class after set height, or it will jump to zero height suddenly, weired
                  // addClass(el, 'we-menu-transition');
                  el.style.height = 0;
                  el.style.paddingTop = 0;
                  el.style.paddingBottom = 0;
                }
              },

              afterLeave(el) {
                // removeClass(el, 'we-menu-transition');
                el.style.height = el.dataset.oldHeight;
                el.style.overflow = el.dataset.oldOverflow;
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
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
