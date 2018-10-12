<template>
  <menu-accordion-transition>
    <div v-show="isShow"
         :class="[`${prefixCls}-menu-external`, [isInit? `${prefixCls}-common-position-init` : undefined],
         {
          'is-collapse': openAccordionTransition
         }]"
         :style="[showStyle, menuStyle,
         {
          width: menuWidth,
          height: menuHeight,
          overflow: collapsing ? 'hidden' : undefined
         }]">
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
  import ScrollBar from '../../scrollbar/index.js';

  export default {
    /*
        render(h) {
          const component = (
            <div v-show={this.isShow}
                 class={[`${this.prefixCls}-menu-external`, [this.isInit ? `${this.prefixCls}-common-position-init` : undefined]]}
                 style={[this.showStyle, this.menuStyle, {width: this.menuWidth, height: this.menuHeight}]}>
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
        indentNum: (this.isRoot || !this.indent) ? this.indentNum : this.menuItem.subMenuModeIsOpen ? 0 : this.indentNum + 1,
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
      height: {
        type: [Number, String],//菜单高度,仅当mode为 horizontal 时有效
        default: 50
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
      accordion: {//手风琴模式, 开启后每次至多展开一个子菜单
        type: Boolean,
        default: false
      },
      collapse: Boolean,//是否水平折叠,仅当mode为 vertical 时有效
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
      activeLineColor: String,//激活线颜色
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
        subMenus: [],//当前菜单下的子菜单
        allSubMenus: [],//当前菜单下所有子菜单
        menuItems: [],//当前菜单下的菜单项
        allMenuItems: [],//当前菜单下的所有菜单项
        menuItemGroups: [],//当前菜单下的分组
        collapseWidth: 50,//折叠后的宽度
        isAccordion: this.accordion && this.mode === 'vertical',//是否是手风琴模式
        openAccordionTransition: false,//是否开启手风琴动画
        openCollapseTransition: false,//是否开启折叠动画
        isRoot: this === this.rootMenu,//是否是根节点
        isShow: true,//是否显示当前菜单
        showCache: this.value,
        isCollapse: this.collapse,//是否折叠当前菜单
        collapsing: false,//是否折叠中
        collapsingTimeIndex: undefined
      };
    },

    computed: {
      menuWidth() {
        if (this.mode !== 'vertical') {
          return undefined;
        }
        if (this.isCollapse) {
          return `${this.collapseWidth}px`;
        }
        if (!isNaN(this.width)) {
          return `${this.width}px`;
        }
        return this.width;
      },
      menuHeight() {
        if (this.mode !== 'horizontal') {
          return undefined;
        }
        if (!isNaN(this.height)) {
          return `${this.height}px`;
        }
        return this.height;
      },
      showStyle() {
        if (this.isRoot) {
          //根节点在原始位置显示
          return undefined;
        }
        if (!this.menuItem.subMenuModeIsOpen) {
          //如果所属菜单项设置的子菜单模式不是打开 则在原位置显示
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
        if (this.value !== v) {
          this.$emit('input', v);
        }
      },
      collapse(v) {
        if (this.mode === 'horizontal') {
          return;
        }
        if (v) {
          this.collapseMenu();
        } else {
          this.expandMenu();
        }
      },
      isCollapse() {
        window.clearTimeout(this.collapsingTimeIndex);
        this.collapsing = true;
        this.collapsingTimeIndex = setTimeout(() => this.collapsing = false, 300);
      }
    },

    methods: {
      addSubMenu(subMenu) {
        this.subMenus.push(subMenu);
      },
      addAllSubMenu(subMenu) {
        this.allSubMenus.push(subMenu);
        if (this.parentMenu) {
          this.parentMenu.addAllSubMenu(subMenu);
        }
      },
      addMenuItem(menuItem) {
        this.menuItems.push(menuItem);
      },
      addAllMenuItem(menuItem) {
        this.allMenuItems.push(menuItem);
        if (this.parentMenu) {
          this.parentMenu.addAllMenuItem(menuItem);
        }
      },
      addMenuItemGroup(menuItemGroup) {
        this.menuItemGroups.push(menuItemGroup);
      },
      handleItemClick({menu, item}) {
        if (this.isRoot) {
          this.broadcast(`${this.prefixNameCls}MenuItem`, 'item-un-selected', {menu: menu, item: item});
        } else {
          //因为通知的是根节点,如果当前节点不是根节点,不符合预期效果
          throw new Error('menu is not root.');
        }
      },
      restoreMenu() {
        if (this.showCache === undefined) {
          return;
        }
        this.isShow = this.showCache;
      },
      showMenu() {
        if (this.isShow) {
          return;
        }
        if (!this.isRoot) {
          if (!this.isInit && this.parentMenu.isAccordion) {
            this.parentMenu.subMenus.forEach(sm => {
              if (sm !== this) {
                sm.hideMenu(false);
              }
            });
          }
          if (this.menuItem.subMenuModeIsOpen) {
            //如果菜单是打开模式,应该将所有打开的菜单关闭
            this.rootMenu.allSubMenus.forEach(sm => {
              if (sm !== this && sm.menuItem.subMenuModeIsOpen) {
                sm.hideMenu(false);
              }
            });
          }
        }
        this.isShow = true;
      },
      hideMenu(cache = true) {
        if (!this.isShow) {
          return;
        }
        this.showCache = undefined;
        if (cache) {
          this.showCache = this.isShow;
        }
        //隐藏菜单时需要将所有open方式的子菜单也隐藏
        this.allSubMenus.forEach(sm => {
          if (sm.menuItem.subMenuModeIsOpen) {
            sm.hideMenu();
          }
        });
        this.isShow = false;
      },
      restoreSubMenu() {
        this.subMenus.forEach(sm => {
          if (!sm.menuItem.subMenuModeIsOpen) {
            sm.restoreMenu();
          }
        });
      },
      showSubMenu() {
        this.subMenus.forEach(sm => {
          if (!sm.menuItem.subMenuModeIsOpen) {
            sm.showMenu();
          }
        });
      },
      hideSubMenu(cache = true) {
        this.subMenus.forEach(m => m.hideMenu(cache));
      },
      collapseMenu() {
        this.menuItems.forEach(m => m.showArrow = false);
        this.menuItemGroups.forEach(m => m.showTitle = false);
        this.hideSubMenu(true);
        this.isCollapse = true;
      },
      expandMenu() {
        this.menuItems.forEach(m => m.showArrow = true);
        this.menuItemGroups.forEach(m => m.showTitle = true);
        setTimeout(() => {
          this.restoreSubMenu();
        }, 0);
        this.isCollapse = false;
      }
    },

    created() {
      this.$on('item-click', this.handleItemClick);
      if (!this.isRoot) {
        this.parentMenu.addSubMenu(this);
        this.parentMenu.addAllSubMenu(this);
        //将所属的菜单项 相关数据初始化
        this.menuItem.hasSubMenu = true;
        this.menuItem.subMenu = this;
      }
    },

    mounted() {
      if (this.isRoot) {
        //如果是根菜单,是否显示根据value判断
        this.isShow = this.value;
      } else {
        //如果不是根菜单, 当父菜单折叠 或 value 为false 时 置为不显示
        this.isShow = !this.parentMenu.isCollapse && this.value && !this.menuItem.subMenuModeIsOpen;
        this.menuItem.expand = this.isShow;
      }
      if (this.isCollapse) {
        this.collapseMenu();
        this.menuItems.forEach(m => m.showArrow = false);
        this.menuItemGroups.forEach(m => m.showTitle = false);
      } else {
        this.menuItems.forEach(m => m.showArrow = true);
        this.menuItemGroups.forEach(m => m.showTitle = true);
      }
      setTimeout(() => {
        this.isInit = false;
        this.openAccordionTransition = true;
      }, 300);
    }

  }
</script>
