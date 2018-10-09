<template>
  <menu-accordion-transition>
    <div v-show="isShow"
         :class="[`${prefixCls}-menu-external`, [isInit? `${prefixCls}-common-position-init` : undefined]]"
         :style="[showStyle, menuStyle, {width: menuWidth}]">
      <scroll-bar>
        <ul :class="[`${prefixCls}-menu`]"
            :style="[menuStyle]">
          <slot></slot>
        </ul>
      </scroll-bar>
      <div :class="[`${prefixCls}-common-clear`]"></div>
    </div>
  </menu-accordion-transition>
</template>

<script type="text/jsx">

  import Conf from '../../src/mixins/conf.js';
  import Emitter from '../../src/mixins/emitter.js';
  import ScrollBar from '../../scroll-bar/src/ScrollBar.vue';

  export default {

/*    render(h) {
      const component = (
        <div v-show={this.isShow}
             class={[`${this.prefixCls}-menu-external`, [this.isInit ? `${this.prefixCls}-common-position-init` : undefined]]}
             style={[this.showStyle, this.menuStyle, {width: this.menuWidth}]}>
          <scroll-bar>
            <ul class={`${this.prefixCls}-menu`}
                style={this.menuStyle}>
              {this.$slots.default}
            </ul>
          </scroll-bar>
          <div class={`${this.prefixCls}-common-clear`}></div>
        </div>
      );
      if (this.openAccordionTransition) {
        return (
          <menu-accordion-transition>
            {component}
          </menu-accordion-transition>
        );
      }
      return component;
    },*/

    components: {
      ScrollBar: ScrollBar, 'menu-accordion-transition': {
        functional: true,
        render(createElement, context) {
          return createElement('transition', {
            props: {
              mode: 'out-in',
              appear: true
            },
            on: {
              beforeAppear(el) {
                console.log(5555)
              },
              beforeEnter(el) {
                console.log(el)
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
                  el.style.height = `${el.scrollHeight}px`;
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
                el.style.height = `${el.scrollHeight}px`;
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
        indentNum: (this.isRoot || !this.indent) ? this.indentNum : this.parentMenu.subMenuModeIsOpen ? 0 : this.indentNum + 1,
        rootMenu: this.rootMenu,
        menu: this
      };
    },

    inject: {
      indentNum: {//缩进号
        default: 0
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
      width: {//菜单宽度,仅当mode为 vertical 时有效
        type: [Number, String],
        default: 240
      },
      subMenuMode: {//子菜单模式 local 在当前节点上展开 open 新打开菜单 当 mode 为 horizontal 时强制使用open
        type: String,
        default: 'local',
        validator(value) {
          return [
            'local',
            'open'
          ].indexOf(value) !== -1
        }
      },
      subMenuHorizontalShift: {//子菜单水平位移
        type: Number,
        default: 0
      },
      subMenuVerticalShift: {//子菜单垂直位移
        type: Number,
        default: 0
      },
      /*      accordion: {//手风琴模式, 开启后每次至多展开一个子菜单
              type: Boolean,
              default: true
            },*/
      collapse: Boolean,//是否水平折叠,仅当mode为 vertical 时有效
      collapseDelay: {//折叠延迟
        type: Number,
        default: 0
      },
      indent: {//是否开启缩进
        type: Boolean,
        default: true
      },
      accordionTransition: {//是否开启手风琴动画
        type: Boolean,
        default: true
      },
      collapseTransition: {//是否开启折叠动画
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
      hoverBackgroundColor: String,//悬停背景颜色
      disabledTextColor: String,//菜单禁用文本颜色
      disabledBackgroundColor: String//菜单禁用背景颜色
    },

    data() {
      return {
        isInit: true,//是否是初始化
        subMenus: [],
        allSubMenus: [],
        menuItems: [],
        allMenuItems: [],
        collapseWidth: 50,
        openAccordionTransition: true,
        openCollapseTransition: false,
        isRoot: this === this.rootMenu,
        isShow: true,
        showCache: undefined,
        isCollapse: this.collapse,
        modeIsHorizontal: this.mode === 'horizontal',
        subMenuModeIsOpen: this.mode === 'horizontal' || this.subMenuMode === 'open',
        //是否是手风琴
        // isAccordion: this.accordion && this.mode === 'vertical'
      };
    },

    computed: {
      menuWidth() {
        if (this.mode !== 'vertical') {
          return undefined;
        }
        if (this.collapse) {
          return `${this.collapseWidth}px`;
        }
        if (!isNaN(this.width)) {
          return `${this.width}px`;
        }
        return this.width;
      },
      showStyle() {
        if (this.isRoot) {
          //根节点在原始位置显示
          return undefined;
        }
        if (!this.parentMenu.subMenuModeIsOpen) {
          //如果上级菜单设置的子菜单模式不是打开 则在原位置显示
          return undefined;
        }
        if (this.parentMenu.mode === 'vertical') {
          //如果父菜单是垂直模式, 那么应该水平弹出
          return {
            position: 'absolute',
            left: `${this.parentMenu.width + this.subMenuHorizontalShift}px`,
            top: `${this.subMenuVerticalShift}px`
          }
        }
        //如果父菜单是水平模式, 那么应该垂直弹出
        return {
          position: 'absolute',
          left: `${this.subMenuHorizontalShift}px`,
          top: `${50 + this.subMenuVerticalShift}px`
        }
      },
      menuStyle() {
        return {
          backgroundColor: this.backgroundColor || this.rootMenu.backgroundColor
        };
      }
    },

    watch: {
      value(v) {
        this.isShow = v;
      },
      isShow(v) {
        if (this.menuItem) {
          this.menuItem.expand = v;
        }
        this.$emit('input', v);
      },
      collapse(v) {
        if (v) {
          this.closeAll();
        } else {
          this.openAll();
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
        this.isShow = true;
      },
      handleItemUnExpand({menu, item}) {
        this.isShow = false;
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
      /**
       * 打开所有菜单
       * @private
       */
      openAll() {
        this.allSubMenus.forEach(m => m.isShow = true);
      },
      /**
       * 关闭所有菜单
       * @private
       */
      closeAll() {
        this.allSubMenus.forEach(m => m.isShow = false);
      }
    },

    mounted() {
      this.$on('item-click', this.handleItemClick);
      this.$on('item-expand', this.handleItemExpand);
      this.$on('item-un-expand', this.handleItemUnExpand);

      this.isShow = this.value;
      if (!this.isRoot && this.rootMenu.collapse) {
      }

      /*      if (this.collapse) {
              this.$nextTick(() => {
                // this.closeAll();
                this.isShow = this.value;
              });
            } else {
              this.isShow = this.value;
              this.openAccordionTransition = this.accordionTransition;
              this.openCollapseTransition = this.collapseTransition;
            }*/
      if (!this.isRoot) {
        if (this.rootMenu === this.parentMenu) {
          this.parentMenu.subMenus.push(this);
          this.parentMenu.allSubMenus.push(this);
        } else {
          this.rootMenu.allSubMenus.push(this);
          this.parentMenu.subMenus.push(this);
          this.parentMenu.allSubMenus.push(this);
        }
      }

      setTimeout(() => {
        if (this.menuItem) {
          this.menuItem.hasSubMenu = true;
          this.menuItem.expand = this.isShow;
        }
        if (this.collapse) {
          this.closeAll();
          this.allSubMenus.forEach(m => m.isInit = false);
        }
      }, 0);

    }

  }
</script>
