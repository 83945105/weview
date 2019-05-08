<!--<template>
  <menu-accordion-transition>
    <div v-show="visible"
         :index="index"
         :class="[`${prefixCls}-menu-external`,
         {
          'is-collapse': openCollapseTransition,
          'is-accordion': openAccordionTransition,
          'is-accordion-collapse': openCollapseTransition && openAccordionTransition
         }]"
         :style="[{
          width: menuVerticalWidth,
          height: menuHorizontalHeight,
          overflow: collapsing ? 'hidden' : undefined,
          zIndex: nextZIndex
         }]"
         @mouseenter.stop.self="handleMouseEnter"
         @mouseleave.stop.self="handleMouseLeave"
         v-transfer-restore-dom="{value: isAppendToBody}"
    >
      <ul :class="[`${prefixCls}-menu`, sizeClass]">
        <slot></slot>
      </ul>
      <div :class="[`${prefixCls}-common-clear`]"></div>
    </div>
  </menu-accordion-transition>
</template>-->

<script type="text/jsx">

  import Conf from '../../src/mixins/conf.js';
  import Emitter from '../../src/mixins/emitter.js';
  import Popper from '../../src/mixins/popper.js';
  import PopupManager from '../../src/utils/popup.js';
  import TransferRestoreDom from '../../src/directives/transfer-restore-dom.js';
  import {isFunction} from "../../src/utils/util.js";

  export default {

    components: {
      'menu-accordion-transition': {
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
                  el.style.height = `${context.parent.height || el.scrollHeight}px`;
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

    mixins: [Conf, Emitter, Popper],

    directives: {TransferRestoreDom},

    inject: {
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

    provide() {
      return {
        rootMenu: this.rootMenu,
        menu: this
      };
    },

    props: {
      index: String,//唯一标识
      value: Boolean,//菜单是否显示
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
      placement: {//出现的位置
        type: String,
        default() {
          if (!this.parentMenu) return 'right-start';
          return this.parentMenu.mode === 'vertical' ? 'right-start' : 'bottom-start';
        },
        validator(value) {
          return [
            "top",
            "top-start",
            "top-end",
            "bottom",
            "bottom-start",
            "bottom-end",
            "left",
            "left-start",
            "left-end",
            "right",
            "right-start",
            "right-end"
          ].indexOf(value) !== -1;
        }
      },
      size: String,//菜单尺寸
      placements: {
        type: Array,
        default() {
          return ['left', 'right'];
        }
      },
      width: {//菜单宽度,仅当mode为 vertical 时有效
        type: [Number, String],
        default: 240
      },
      height: [Number, String],// 菜单高度,仅当mode为 horizontal 时有效
      zIndex: Number,//层级
      subMenuMode: {//子菜单模式 auto 自动(菜单折叠 - open 菜单展开 - local) local 在当前节点上展开 open 新打开菜单 当 mode 为 horizontal 时强制使用open
        type: String,
        default: 'auto',
        validator(value) {
          return [
            'auto',
            'local',
            'open'
          ].indexOf(value) !== -1
        }
      },
      subMenuTrigger: {//子菜单打开触发方式 hover - 悬浮 click - 点击 manual - 手动
        type: String,
        default: 'click',
        validator(value) {
          return ['hover', 'click', 'manual'].indexOf(value) !== -1
        }
      },
      accordion: {//手风琴模式, 开启后每次至多展开一个子菜单
        type: Boolean,
        default: false
      },
      collapse: Boolean,//是否水平折叠,仅当mode为 vertical 时有效
      collapseDelay: {//水平折叠延迟
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
      appendToBody: Boolean,
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
      disabledBackgroundColor: String,//菜单禁用背景颜色
      groupLineColor: String//分组线颜色
    },

    data() {
      return {
        nextZIndex: this.zIndex,
        locked: false,//是否锁定,锁定后无法进行任何操作
        subMenus: [],//当前菜单下的子菜单
        allSubMenus: [],//当前菜单下所有子菜单
        menuItems: [],//当前菜单下的菜单项
        allMenuItems: [],//当前菜单下的所有菜单项
        menuItemGroups: [],//当前菜单下的分组
        isAccordion: this.accordion && this.mode === 'vertical',//是否是手风琴模式
        openAccordionTransition: false,//是否开启手风琴动画
        openCollapseTransition: false,//是否开启折叠动画
        isRoot: this === this.rootMenu,//是否是根节点
        isOpen: false,//是否是打开模式,由所属menuItem决定
        isAppendToBody: false,//是否插入到body下
        visible: this === this.rootMenu,//是否显示当前菜单,根菜单默认显示,子菜单默认隐藏
        showCache: this.value,
        isCollapse: this.collapse,//是否折叠当前菜单
        collapsing: false,//是否折叠中
        hideContent: false,//是否隐藏内容
        collapsingTimeIndex: undefined,
        hideContentTimeIndex: undefined,
        collapseDelayTimeIndex: undefined,
        createPopperTimeIndex: undefined
      };
    },

    computed: {
      indentNum() {
        return (this.isOpen || this.isRoot || !this.indent) ? 0 : this.parentMenu.indentNum + 1;
      },
      menuSize() {
        return this.size || (this.$WEVIEW || {}).size;
      },
      sizeClass() {
        return this.menuSize ? `${this.prefixCls}-menu-size-${this.menuSize}` : undefined;
      },
      iconWidth() {// 图标宽度 控制 折叠后的宽度
        if (this.menuSize === 'mini') return 32;
        if (this.menuSize === 'small') return 40;
        if (this.menuSize === 'large') return 60;
        return 50;
      },
      menuVerticalWidth() {
        if (this.mode !== 'vertical') return undefined;
        if (this.isCollapse) return `${this.iconWidth}px`;
        if (!isNaN(this.width)) return `${this.width}px`;
        return this.width;
      },
      menuHorizontalHeight() {
        if (this.mode !== 'horizontal') return undefined;
        let height = this.height || this.iconWidth;
        if (!isNaN(height)) return `${height}px`;
        return height;
      }
    },

    watch: {
      value(val) {
        this.visible = val;
      },
      visible(val) {
        if (this.menuItem) this.menuItem.showSubMenu = val;
        if (this.value !== val) this.$emit('input', val);
        if (val) {
          this.nextZIndex = this.zIndex ? this.zIndex : PopupManager.nextZIndex();
          this.updateOpenPopper();
        }
        this.updateAllSubMenusPopper();
      },
      collapse(val) {
        //这里不直接赋值给isCollapse是因为要先收起 再根据 设置的延迟 再 collapse 所以调用方法
        if (this.mode === 'horizontal') return;
        if (val) {
          this.collapseMenu();
        } else {
          this.expandMenu();
        }
      },
      isCollapse(val) {
        if (this.collapsingTimeIndex) {
          window.clearTimeout(this.collapsingTimeIndex);
          this.collapsingTimeIndex = undefined;
        }
        this.collapsing = true;
        this.collapsingTimeIndex = setTimeout(() => {
          this.collapsing = false;
          // 更新所有子菜单的popper
          this.updateAllSubMenusPopper();
        }, 300);

        if (val) {
          this.hideContent = true;
        } else {
          if (this.hideContentTimeIndex) {
            window.clearTimeout(this.hideContentTimeIndex);
            this.hideContentTimeIndex = undefined;
          }
          this.hideContentTimeIndex = setTimeout(() => this.hideContent = false, 50);
        }
      },
      isOpen(val) {
        if (this.createPopperTimeIndex) {
          window.clearTimeout(this.createPopperTimeIndex);
          this.createPopperTimeIndex = undefined;
        }
        if (val) {
          this.createPopperTimeIndex = setTimeout(() => {
            this.isAppendToBody = this.appendToBody;

            let placements = [];
            if (!this.isRoot && this.parentMenu.mode === 'vertical') {
              placements = ['left', 'right'];
            } else if (!this.isRoot && this.parentMenu.mode === 'horizontal') {
              placements = ['top', 'bottom'];
            }
            this.updatePopper({positionFixed: true, placements: placements});
          }, 350);
        } else {
          if (!this.isRoot) {
            this.parentMenu.hideContent = true;
            this.createPopperTimeIndex = setTimeout(() => this.parentMenu.hideContent = false, 50);
          }
          this.isAppendToBody = false;
          this.destroyPopper();
        }
      }
    },

    methods: {
      updateOpenPopper() {
        if (!this.isOpen) return;
        this.updatePopper();
      },
      handleMouseEnter(e) {
        if (!this.isRoot && this.menuItem.subMenuTriggerIsHover) {
          //清除所属 子菜单open 模式的菜单项至根菜单项的关闭定时
          this.menuItem.clearSubMenuHoverLeaveTimeToRoot();
        }
      },
      handleMouseLeave(e) {
        if (!this.isRoot && this.menuItem.subMenuTriggerIsHover) {
          //启动所属 子菜单open 模式的菜单项至根菜单项的关闭定时
          this.menuItem.startSubMenuHoverLeaveTimeToRoot();
        }
      },
      updateSubMenusPopper() {
        this.subMenus.forEach(sm => sm.updateOpenPopper());
      },
      updateAllSubMenusPopper() {
        this.allSubMenus.forEach(sm => sm.updateOpenPopper());
      },
      addSubMenu(subMenu) {
        this.subMenus.push(subMenu);
      },
      addAllSubMenu(subMenu) {
        this.allSubMenus.push(subMenu);
        if (this.parentMenu) this.parentMenu.addAllSubMenu(subMenu);
      },
      addMenuItem(menuItem) {
        this.menuItems.push(menuItem);
      },
      addAllMenuItem(menuItem) {
        this.allMenuItems.push(menuItem);
        if (this.parentMenu) this.parentMenu.addAllMenuItem(menuItem);
      },
      addMenuItemGroup(menuItemGroup) {
        this.menuItemGroups.push(menuItemGroup);
      },
      lockMenu() {
        if (this.locked) return;
        this.locked = true;
      },
      unLockMenu() {
        if (!this.locked) return;
        this.locked = false;
      },
      lockToRootMenu() {
        this.lockMenu();
        if (this.isRoot) return;
        this.parentMenu.lockToRootMenu();
      },
      unLockToRootMenu() {
        this.unLockMenu();
        if (this.isRoot) return;
        this.parentMenu.unLockToRootMenu();
      },
      hideMenu(cache = true) {
        if (this.locked || !this.visible) return;
        if (cache) this.showCache = this.visible;
        this.visible = false;
      },
      hideSubMenus(cache = true) {
        this.subMenus.forEach(sm => sm.hideMenu(cache));
      },
      hideAllSubMenus(cache = true) {
        this.allSubMenus.forEach(sm => sm.hideMenu(cache));
      },
      hideOpenSubMenus() {
        this.subMenus.forEach(sm => {
          if (!sm.isOpen) return true;
          sm.hideMenu(false);
        });
      },
      hideAllOpenSubMenus() {
        this.allSubMenus.forEach(sm => {
          if (!sm.isOpen) return true;
          sm.hideMenu(false);
        });
      },
      hideMenuAndSubMenus(cache = true) {
        if (this.locked || !this.visible) return;
        this.showCache = undefined;
        if (cache) this.showCache = this.visible;
        this.hideSubMenus(cache);
        this.visible = false;
      },
      hideMenuAndAllSubMenus(cache = true) {
        if (this.locked || !this.visible) return;
        if (cache) this.showCache = this.visible;
        this.hideAllSubMenus(cache);
        this.visible = false;
      },
      hideMenuAndOpenSubMenus(cache = true) {
        if (this.locked || !this.visible) return;
        this.showCache = undefined;
        if (cache) this.showCache = this.visible;
        this.hideOpenSubMenus();
        this.visible = false;
      },
      hideMenuAndAllOpenSubMenus(cache = true) {
        if (this.locked || !this.visible) return;
        this.showCache = undefined;
        if (cache) this.showCache = this.visible;
        this.hideAllOpenSubMenus();
        this.visible = false;
      },
      restoreMenu() {
        if (this.locked || this.showCache === undefined) return;
        this.visible = this.showCache;
        this.showCache = undefined;
      },
      showMenu() {
        if (this.locked || this.visible) return;
        if (!this.isRoot) {
          if (this.parentMenu.isAccordion) {
            setTimeout(() => {
              //当父菜单是手风琴模式时,关闭所有兄弟菜单及其子菜单
              this.parentMenu.subMenus.forEach(sm => {
                if (sm === this) return true;
                //应该是关闭所有兄弟菜单及其所有子菜单
                sm.hideMenuAndAllSubMenus(false)
              });
            }, 0);
          }
          if (this.isOpen) {
            setTimeout(() => {
              //如果菜单是打开模式,应该将当前菜单到根菜单之外的所有open菜单关闭
              //先将不需要关闭的菜单锁定,关闭其余菜单后在解除锁定
              this.lockToRootMenu();
              this.rootMenu.allSubMenus.forEach(sm => {
                if (!sm.isOpen || sm === this) return true;
                sm.hideMenu(false);
              });
              this.unLockToRootMenu();
            }, 0);
          }
        }
        this.visible = true;
      },
      restoreSubMenus() {
        this.subMenus.forEach(sm => {
          if (sm.isOpen) return true;
          sm.restoreMenu();
        });
      },
      restoreAllSubMenus() {
        this.allSubMenus.forEach(sm => {
          if (sm.isOpen) return true;
          sm.restoreMenu();
        });
      },
      collapseMenu() {
        if (this.locked || this.isCollapse) return;
        if (this.collapseDelayTimeIndex) {
          window.clearTimeout(this.collapseDelayTimeIndex);
          this.collapseDelayTimeIndex = undefined;
        }
        this.menuItems.forEach(m => m.showRight = false);
        this.menuItemGroups.forEach(m => m.showTitle = false);
        this.subMenus.forEach(sm => sm.hideMenuAndAllSubMenus(true));
        this.collapseDelayTimeIndex = setTimeout(() => this.isCollapse = true, this.collapseDelay);
      },
      expandMenu() {
        if (this.locked || !this.isCollapse) return;
        if (this.collapseDelayTimeIndex) {
          window.clearTimeout(this.collapseDelayTimeIndex);
          this.collapseDelayTimeIndex = undefined;
        }
        this.menuItems.forEach(m => m.showRight = true);
        this.menuItemGroups.forEach(m => m.showTitle = true);
        this.hideAllOpenSubMenus();
        this.restoreAllSubMenus();
        this.isCollapse = false;
      }
    },

    created() {
      if (!this.isRoot) {
        this.parentMenu.addSubMenu(this);
        this.parentMenu.addAllSubMenu(this);
        //将所属的菜单项 相关数据初始化
        this.menuItem.hasSubMenu = true;
        this.menuItem.subMenu = this;
      }
    },

    render(h) {
      return h('menu-accordion-transition', [
        h('div', {
          style: [{
            display: this.visible ? 'inline' : 'none',
            width: this.menuVerticalWidth,
            height: this.menuHorizontalHeight,
            overflow: this.collapsing ? 'hidden' : undefined,
            zIndex: this.nextZIndex
          }],
          attrs: {
            index: this.index
          },
          'class': [`${this.prefixCls}-menu-external`,
            {
              'is-collapse': this.openCollapseTransition,
              'is-accordion': this.openAccordionTransition,
              'is-accordion-collapse': this.openCollapseTransition && this.openAccordionTransition
            }],
          directives: [{
            name: 'transfer-restore-dom',
            value: this.isAppendToBody
          }]
        }, [
          h('ul', {
            'class': [`${this.prefixCls}-menu`, this.sizeClass]
          }, [this.$slots.default]),
          h('div', {
            'class': [`${this.prefixCls}-common-clear`]
          })
        ])
      ]);
    },

    mounted() {
      if (this.isRoot) {
        //如果是根菜单,是否显示根据value判断
        this.visible = this.value;
      } else {
        //如果不是根菜单, 当父菜单折叠 或 是子菜单 时 强制置为不显示
        if (this.parentMenu.isCollapse || this.menuItem.subMenuModeIsOpen) {
          this.visible = false;
        } else {
          this.visible = this.value;
        }
        this.menuItem.showSubMenu = this.visible;
        this.referenceEl = this.menuItem.$el;
        this.popperEl = this.$el;
      }
      this.$nextTick(() => {
        this.openAccordionTransition = this.accordionTransition;
        this.openCollapseTransition = this.collapseTransition;
      });
    },

    beforeDestroy() {
      if (isFunction(this.destroyPopper)) this.destroyPopper();
    }

  }
</script>
