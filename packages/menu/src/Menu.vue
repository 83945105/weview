<template>
  <menu-collapse-transition>
    <div v-show="show" :class="[menuExternalClass]" :style="[menuStyle, showStyle]">
      <scroll-bar>
        <ul :class="[menuClass]" :style="[menuStyle]">
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
                if (!el.dataset) el.dataset = {};
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
                el.style.height = el.dataset.oldHeight;
                el.style.overflow = el.dataset.oldOverflow;
              },
              enterCancelled(el) {
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
                  el.style.height = 0;
                  el.style.paddingTop = 0;
                  el.style.paddingBottom = 0;
                }
              },
              afterLeave(el) {
                el.style.height = el.dataset.oldHeight;
                el.style.overflow = el.dataset.oldOverflow;
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
              },
              leaveCancelled(el) {
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
        colors: {
          textColor: this.textColor || this.parentColors.textColor,
          backgroundColor: this.backgroundColor || this.parentColors.backgroundColor,
          activeTextColor: this.activeTextColor || this.parentColors.activeTextColor,
          activeBackgroundColor: this.activeBackgroundColor || this.parentColors.activeBackgroundColor,
          selectedTextColor: this.selectedTextColor || this.parentColors.selectedTextColor,
          selectedBackgroundColor: this.selectedBackgroundColor || this.parentColors.selectedBackgroundColor,
          hoverTextColor: this.hoverTextColor || this.parentColors.hoverTextColor,
          hoverBackgroundColor: this.hoverBackgroundColor || this.parentColors.hoverBackgroundColor,
        },
        indentNum: (this.indent && this.isAccordion) ? this.indentNum + 1 : this.indentNum,
        rootMenu: this.rootMenu,
        menu: this
      };
    },

    inject: {
      parentColors: {
        from: 'colors',
        default() {
          return {};
        }
      },
      indentNum: {//缩进号
        default: -1
      },
      rootMenu: {//根菜单,默认自身
        default() {
          return this;
        }
      },
      parentMenu: {//父级菜单
        from: 'menu',
        default: null
      },
      rootMenuItem: {//所属根菜单项
        default: null
      },
      menuItem: {//所属menuItem
        default: null
      }
    },

    data() {
      return {
        show: this.value,
        isRoot: false,
        opacityCache: undefined,
        showCache: undefined,
        collapseWidthCache: undefined,
        bgc: this.backgroundColor || this.parentColors.backgroundColor,
        isAccordion: this.accordion && this.mode === 'vertical'
      };
    },

    props: {
      index: String,//唯一标识
      value: {//菜单是否显示
        type: Boolean,
        default: true
      },
      mode: {//菜单模式  vertical - 垂直  horizontal - 水平
        type: String,
        default: 'vertical',
        validator(value) {
          return [
            'vertical',
            'horizontal'
          ].indexOf(value) !== -1
        }
      },
      accordion: {//手风琴模式, 当菜单模式为 horizontal 模式时,强制关闭手风琴模式
        type: Boolean,
        default: true
      },
      collapse: Boolean,//是否水平折叠,仅当mode为 vertical 时有效
      collapseDelay: {//折叠延迟
        type: Number,
        default: 0
      },
      indent: {//是否开启缩进
        type: Boolean,
        default: true
      },
      textColor: String,//菜单文本颜色
      backgroundColor: String,//菜单背景颜色
      activeTextColor: String,//文本激活颜色
      activeBackgroundColor: String,//激活背景色
      selectedTextColor: String,//菜单选中文本颜色
      selectedBackgroundColor: String,//菜单选中背景颜色
      hoverTextColor: String,//悬停文本颜色
      hoverBackgroundColor: String//悬停背景颜色
    },

    computed: {
      showStyle() {
        if (!this.menuItem) {
          return undefined;
        }
        if (this.menuItem.isAccordion) {
          return undefined;
        }
        return {
          left: `${this.menuItem.menuItemWidth + 20}px`,
          top: `${0 - 50}px`,
          width: `${this.menuItem.menuItemWidth}px`
        }
      },
      menuExternalClass() {
        return `${this.prefixCls}-menu-external`;
      },
      menuClass() {
        return `${this.prefixCls}-menu`;
      },
      menuStyle() {
        return {
          backgroundColor: this.bgc
        };
      }
    },

    watch: {
      value(v) {
        if (this.menuItem) {
          this.menuItem.expand = v;
        } else {
          this.show = v;
        }
      },
      show(v) {
        if (this.menuItem) {
          this.menuItem.expand = v;
        }
        this.$emit('input', v);
      },
      collapse(v) {
        if (v) {
          this._collapse();
        } else {
          this._expand();
        }
      }
    },

    methods: {
      handleItemClick({menu, item}) {
        if (this.isRoot) {
          this.broadcast(`${this.prefixNameCls}MenuItem`, 'item-un-selected', {menu: menu, item: item});
        } else {
          //因为通知的是根节点,如果当前节点不是根节点,不符合预期效果
          throw new Error('menu is not root.');
        }
      },
      handleItemExpand({menu, item}) {
        this.show = true;
      },
      handleItemUnExpand({menu, item}) {
        this.show = false;
      },
      /**
       * 展开指定菜单
       * @param index 菜单唯一标识
       */
      open(index) {
        if (this.index === index) {
          this.handleMenuShow(index);
          return;
        }
        this.broadcast(`${this.prefixNameCls}Menu`, 'menu-show', index);
      },
      handleMenuShow(index) {
        if (this.index === index) {
          this.show = true;
        }
      },
      /**
       * 收起指定菜单
       * @param index 菜单唯一标识
       */
      close(index) {
        if (this.index === index) {
          this.handleMenuUnShow(index);
          return;
        }
        this.broadcast(`${this.prefixNameCls}Menu`, 'menu-un-show', index);
      },
      handleMenuUnShow(index) {
        if (this.index === index) {
          this.show = false;
        }
      },
      /**
       * 打开所有子菜单
       * @param restore 恢复收起前状态
       */
      openAllSubMenu(restore = true) {
        this.broadcast(`${this.prefixNameCls}Menu`, 'all-subMenu-show', restore);
      },
      handleAllSubMenuShow(restore) {
        if (restore === true) {
          if (this.showCache === true) {
            this.showCache = undefined;
            //缓存为打开状态,此时应该打开
            this.show = true;
          }
        } else if (restore === false) {
          this.show = true;
        }
        setTimeout(() => {
          this.broadcast(`${this.prefixNameCls}Menu`, 'all-subMenu-show', restore);
        }, 300);
      },
      /**
       * 收起所有子菜单
       */
      closeAllSubMenu(memory = true) {
        this.broadcast(`${this.prefixNameCls}Menu`, 'all-subMenu-un-show', memory);
      },
      handleAllSubMenuUnShow(memory) {
        if (memory === true && this.showCache === undefined) {
          this.showCache = this.show;
        }
        this.broadcast(`${this.prefixNameCls}Menu`, 'all-subMenu-un-show', memory);
        this.show = false;
      },
      /**
       * 折叠
       * 仅当mode为vertical时生效
       * @private
       */
      _collapse() {
        this.closeAllSubMenu(true);
        setTimeout(() => {
          this.$el.style.width = '50px';
        }, this.collapseDelay);
      },
      /**
       * 展开
       * 仅当mode为vertical时生效
       * @private
       */
      _expand() {
        this.$el.style.width = this.collapseWidthCache;
        this.openAllSubMenu(true);
      }
    },

    created() {
      if (this.menuItem) {
        this.menuItem.hasSubMenu = true;
        this.menuItem.expand = this.value;
        this.menuItem.isAccordion = this.isAccordion;
      } else {
        this.isRoot = true;
      }
      this.$on('item-click', this.handleItemClick);
      this.$on('item-expand', this.handleItemExpand);
      this.$on('item-un-expand', this.handleItemUnExpand);
      this.$on('menu-show', this.handleMenuShow);
      this.$on('menu-un-show', this.handleMenuUnShow);
      this.$on('all-subMenu-show', this.handleAllSubMenuShow);
      this.$on('all-subMenu-un-show', this.handleAllSubMenuUnShow);

    },

    mounted() {
      this.collapseWidthCache = this.$el.style.width;
      if (this.collapse) {
        this.opacityCache = this.$el.style.opacity;
        this.$el.style.opacity = 0;
        this.$nextTick(() => {
          this._collapse();
          setTimeout(() => {
            this.$el.style.opacity = this.opacityCache;
          }, this.collapseDelay + 300);
        });
      }
    }

  }
</script>
