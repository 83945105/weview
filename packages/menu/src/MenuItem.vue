<template>
  <li :class="[itemClass]"
      :style="{
        backgroundColor: menu.backgroundColor || rootMenu.backgroundColor
      }"
  >
    <slot name="panel">
      <div :class="[`${prefixCls}-menu-item-title`, hoverClass, activeClass, selectedClass, disabledClass]"
           :style="[{
            paddingLeft: `${menu.indentNum * 15}px`,
            color: menu.textColor || rootMenu.textColor
           }, hoverStyle, activeStyle, selectedStyle, disabledStyle]"
           @click.stop="handleClick"
           @mouseenter.stop.self="handleMouseEnter"
           @mouseleave.stop.self="handleMouseLeave"
      >
        <div v-show="showArrow"
             :class="[`${prefixCls}-menu-item-title-arrow`,
             {
              'is-h-arrow': isHorizontal,
              'is-opened': showSubMenu,
              'we-menu-take-up': menu.hideContent
             }]">
          <icon v-if="subMenuModeIsOpen" :name="isHorizontal ? 'angle-down' : 'angle-right'" size="default"></icon>
          <icon v-else :name="isHorizontal ? 'angle-right' : 'angle-down'" size="default"></icon>
        </div>

        <div v-show="showPrompt" :class="[`${prefixCls}-menu-item-title-prompt`]">{{prompt}}</div>

        <div :class="[`${prefixCls}-menu-item-title-inner`,
        {
          'is-h-left': isHorizontal && !icon,
          'is-h-right': isHorizontal && !showArrow
        }]"
        >
          <div v-if="icon" :class="[`${prefixCls}-menu-item-title-inner-icon`]">
            <slot name="icon">
              <icon :name="iconName" size="default"></icon>
            </slot>
          </div>
          <slot name="content">
            <div :class="[
                  `${prefixCls}-menu-item-title-inner-text`,
                  {'is-left': !icon && !isHorizontal, 'is-right': !showArrow && !showPrompt && !isHorizontal, 'we-menu-take-up': menu.hideContent}
                 ]">
              <slot></slot>
            </div>
          </slot>
        </div>
      </div>
      <div :class="[`${prefixCls}-common-clear`]"></div>

      <div v-if="isHorizontal" :class="[`${prefixCls}-menu-horizontal-line`]" :style="[horizontalLineStyle]"></div>
      <div v-else :class="[`${prefixCls}-menu-vertical-line`]" :style="[verticalLineStyle]"></div>

    </slot>

    <slot name="subMenu"></slot>

    <div :class="[`${prefixCls}-common-clear`]"></div>
  </li>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';
  import Emitter from '../../src/mixins/emitter.js';

  import Icon from '../../icon/src/Icon.vue';

  export default {

    components: {Icon: Icon},

    name: `${Conf.prefixCls}-menu-item`,

    componentName: `${Conf.prefixNameCls}MenuItem`,

    optionName: `menuItem`,

    mixins: [Conf, Emitter],

    provide() {
      return {
        rootMenuItem: this.rootMenuItem,
        menuItem: this,
        menuItemGroup: null//阻止向下传递
      };
    },

    inject: {
      rootMenu: ['rootMenu'],
      menu: ['menu'],
      rootMenuItem: {
        default() {
          return this;
        }
      },
      parentMenuItem: {
        from: 'menuItem',
        default: null
      },
      menuItemGroup: {
        default: null
      }
    },

    props: {
      index: String,//唯一标识,如果不设置将自动生成
      value: Boolean,//是否选中
      arrow: {//是否显示箭头
        type: Boolean,
        default: true
      },
      prompt: String,//提示
      disabled: Boolean,//是否禁用,优先级高于menu
      icon: {//是否显示图标,如果所属菜单是根菜单且不是水平模式则显示
        type: Boolean,
        default() {
          return this.menu.isRoot && this.menu.mode !== 'horizontal';
        }
      },
      iconName: String,//图标名称
      subMenuMode: {//子菜单模式 auto 自动(菜单折叠 - open 菜单展开 - local) local 在当前节点上展开 open 新打开菜单 当 mode 为 horizontal 时强制使用open
        type: String,
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
        validator(value) {
          return ['hover', 'click', 'manual'].indexOf(value) !== -1
        }
      }
    },

    data() {
      return {
        isRoot: this === this.rootMenuItem,//是否是根菜单项
        hasSubMenu: false,//是否拥有子菜单
        subMenu: undefined,//子菜单
        subMenuHoverLeaveTimeIndex: undefined,
        showRight: !this.menu.isCollapse,//是否显示右侧
        selected: this.value,//是否选中
        active: false,//是否激活
        showSubMenu: false,//是否显示子菜单
        hover: false,//是否悬浮
        // 是否水平排列
        isHorizontal: this.rootMenuItem === this && this.menu.mode === 'horizontal'
      };
    },

    computed: {
      subMenuTriggerIsHover() {
        return this.subMenuTrigger === void 0 ? this.menu.subMenuTrigger === 'hover' : this.subMenuTrigger === 'hover';
      },
      subMenuTriggerIsClick() {
        return this.subMenuTrigger === void 0 ? this.menu.subMenuTrigger === 'click' : this.subMenuTrigger === 'click';
      },
      subMenuTriggerIsManual() {
        return this.subMenuTrigger === void 0 ? this.menu.subMenuTrigger === 'manual' : this.subMenuTrigger === 'manual';
      },
      subMenuModeIsOpen() {
        if (this.menu.mode === 'horizontal') return true;
        if (this.subMenuMode === void 0) {
          if (this.menu.subMenuMode === 'open') return true;
          return !!(this.menu.subMenuMode === 'auto' && this.menu.isCollapse);
        }
        if (this.subMenuMode === 'open') return true;
        return !!(this.subMenuMode === 'auto' && this.menu.isCollapse);
      },
      showArrow() {
        return this.arrow && this.showRight && this.hasSubMenu;
      },
      showPrompt() {
        return !this.showArrow && this.prompt && this.showRight;
      },
      disabledClass() {
        return this.disabled ? `is-disabled` : undefined;
      },
      disabledStyle() {
        if (!this.disabled) return;
        return {
          color: this.menu.disabledTextColor || this.rootMenu.disabledTextColor,
          backgroundColor: this.menu.disabledBackgroundColor || this.rootMenu.disabledBackgroundColor
        };
      },
      itemClass() {
        let cls = `${this.prefixCls}-menu-item`;
        if (this.isHorizontal) {
          cls += ' is-horizontal';
          if (this.hasSubMenu) {
            cls += ' is-arrow';
          }
        }
        return cls;
      },
      selectedClass() {
        return (!this.hasSubMenu && this.selected) ? 'is-selected' : undefined;
      },
      selectedStyle() {
        if (!this.selected || this.disabled) return undefined;
        return {
          color: this.menu.selectedTextColor || this.rootMenu.selectedTextColor,
          backgroundColor: this.menu.selectedBackgroundColor || this.rootMenu.selectedBackgroundColor
        };
      },
      activeClass() {
        return (this.hasSubMenu && this.active) ? 'is-active' : undefined;
      },
      activeStyle() {
        if (!this.active || this.disabled) return undefined;
        return {
          color: this.menu.activeTextColor || this.rootMenu.activeTextColor,
          backgroundColor: this.menu.activeBackgroundColor || this.rootMenu.activeBackgroundColor
        };
      },
      hoverClass() {
        return this.hover ? 'is-hover' : undefined;
      },
      hoverStyle() {
        if (!this.hover) return undefined;
        return {
          color: this.menu.hoverTextColor || this.rootMenu.hoverTextColor,
          backgroundColor: this.menu.hoverBackgroundColor || this.rootMenu.hoverBackgroundColor
        };
      },
      verticalLineStyle() {
        if (this.isRoot && this.active) {
          return {
            transform: "scaleX(1)",
            backgroundColor: this.menu.activeLineColor || this.rootMenu.activeLineColor
          };
        }
        return {
          transform: "scaleX(0)",
          backgroundColor: 'transparent'
        };
      },
      horizontalLineStyle() {
        if (this.hover || this.selected || this.active) {
          return {
            transform: "scaleX(1)",
            backgroundColor: this.menu.activeLineColor || this.rootMenu.activeLineColor
          };
        }
        return {
          transform: "scaleX(0)",
          backgroundColor: 'transparent'
        };
      }
    },

    watch: {
      value(val) {
        this.selected = val;
      },
      selected: {
        immediate: true,
        handler(val) {
          if (this.value !== val) {
            this.$emit('input', val);
          }
          if (val) {
            this.handleItemSelected();
            this.$emit('selected', val, this);
          } else {
            this.$emit('un-selected', val, this);
          }
        }
      },
      showSubMenu(val) {
        if (val) {
          this.subMenu.showMenu();
        } else {
          this.subMenu.hideMenuAndAllSubMenus(false);
        }
      },
      subMenuModeIsOpen(val) {
        if (!this.subMenu) return;
        if (val) {
          this.subMenu.isOpen = val;
        } else {
          this.subMenu.isOpen = val;
        }
      },
      subMenu(sm) {
        sm.isOpen = this.subMenuModeIsOpen;
      }
    },

    methods: {
      handleMouseEnter(e) {
        if (this.disabled) return;
        this.hover = true;
        if (this.hasSubMenu && this.subMenuTriggerIsHover) {
          this.clearSubMenuHoverLeaveTimeToRoot();
          this.showSubMenu = true;
        }
      },
      handleMouseLeave(e) {
        if (this.disabled) return;
        this.hover = false;
        if (this.hasSubMenu && this.subMenuTriggerIsHover) {
          //离开关闭的时候给一个定时延迟,这样当子菜单触发进入事件,就取消定时,当子菜单触发离开事件继续启动延迟
          this.subMenuHoverLeaveTimeIndex = setTimeout(() => {
            this.showSubMenu = false;
          }, 500);
        }
      },
      clearSubMenuHoverLeaveTimeToRoot() {
        if (this.subMenuTriggerIsHover) {
          window.clearTimeout(this.subMenuHoverLeaveTimeIndex);
          this.subMenuHoverLeaveTimeIndex = undefined;
        }
        if (this.parentMenuItem) {
          this.parentMenuItem.clearSubMenuHoverLeaveTimeToRoot();
        }
      },
      startSubMenuHoverLeaveTimeToRoot() {
        if (this.subMenuTriggerIsHover) {
          this.subMenuHoverLeaveTimeIndex = setTimeout(() => {
            this.showSubMenu = false;
          }, 500);
        }
        if (this.parentMenuItem) {
          this.parentMenuItem.startSubMenuHoverLeaveTimeToRoot();
        }
      },
      handleClick(e) {
        if (this.disabled || this.$slots.panel) return;
        if (this.hasSubMenu && this.subMenuTriggerIsClick) {
          this.showSubMenu = !this.showSubMenu;
          return;
        }
        if (!this.selected) this.selected = true;
      },
      handleItemSelected() {
        //关闭所在菜单到根菜单之外所有打开的菜单
        this.menu.lockToRootMenu();
        this.rootMenu.allSubMenus.forEach(sm => {
          if (sm !== this.menu && sm.menuItem.subMenuModeIsOpen) {
            sm.hideMenu(false);
          }
        });
        this.menu.unLockToRootMenu();
        //取消所有菜单项选中效果
        this.rootMenu.allMenuItems.forEach(m => {
          if (m !== this) {
            m.selected = false;
            m.active = false;
          }
        });
        //如果有上级菜单项,使其激活
        if (this.parentMenuItem) {
          this.parentMenuItem.handleItemActiveToRoot({menu: this.menu, item: this});
        }
      },
      handleItemActiveToRoot({menu, item}) {
        this.active = true;
        //如果有上级菜单项,使其激活
        if (this.parentMenuItem) {
          this.parentMenuItem.handleItemActiveToRoot({menu: menu, item: item});
        }
      }
    },

    created() {
      this.menu.addMenuItem(this);
      this.menu.addAllMenuItem(this);
    }

  }
</script>
