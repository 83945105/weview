<template>
  <li :class="[itemClass]"
  >
    <slot name="panel">
      <div :class="[`${prefixCls}-menu-item-title`, hoverClass, activeClass, selectedClass, disabledClass]"
           :style="[{
            paddingLeft: `${indentNum * 15}px`,
            color: menu.textColor || rootMenu.textColor
           }, hoverStyle, activeStyle, selectedStyle, disabledStyle]"
           @click.stop="handleClick"
           @mouseenter.stop.self="handleMouseEnter"
           @mouseleave.stop.self="handleMouseLeave"
      >
        <div v-show="showArrow"
             :class="[`${prefixCls}-menu-item-title-arrow`, {'is-opened': expand}]">
          <icon v-if="subMenuModeIsOpen" :name="isHorizontal ? 'angle-down' : 'angle-right'" size="default"></icon>
          <icon v-else :name="isHorizontal ? 'angle-right' : 'angle-down'" size="default"></icon>
        </div>

        <div v-show="showPrompt" :class="[`${prefixCls}-menu-item-title-prompt`]">{{prompt}}</div>

        <div :class="[`${prefixCls}-menu-item-title-inner`]">
          <div v-if="showIcon" :class="[`${prefixCls}-menu-item-title-inner-icon`]">
            <slot name="icon">
              <icon :name="iconName" size="default"></icon>
            </slot>
          </div>
          <slot name="content">
            <div :class="[
                  `${prefixCls}-menu-item-title-inner-text`,
                  {'is-left': !showIcon && !isHorizontal, 'is-right': !showArrow && !showPrompt && !isHorizontal}
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
      indentNum: {
        default: 0
      },
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
      icon: {//是否显示图标,仅对菜单为水平排列有效
        Boolean,
        default: true
      },
      iconName: {//图标名称
        type: String,
        default: ''
      },
      subMenuMode: {//子菜单模式 local 在当前节点上展开 open 新打开菜单 当 mode 为 horizontal 时强制使用open
        type: String,
        validator(value) {
          return [
            'local',
            'open'
          ].indexOf(value) !== -1
        }
      },
      subMenuTrigger: {//子菜单打开触发方式 hover - 悬浮 click - 点击
        type: String,
        validator(value) {
          return ['hover', 'click'].indexOf(value) !== -1
        }
      }
    },

    data() {
      return {
        isRoot: this === this.rootMenuItem,//是否是根菜单项
        hasSubMenu: false,//是否拥有子菜单
        subMenu: undefined,//子菜单
        //子菜单是否是打开模式
        //1、所属菜单是水平 => true
        //2、当前subMenuMode === undefined => 根据所属菜单的subMenuMode是否为open来判断
        //3、当前subMenuMode !== undefined => 根据当前subMenuMode是否为open来判断
        subMenuModeIsOpen: this.menu.mode === 'horizontal' || (this.subMenuMode === void 0 ? this.menu.subMenuMode === 'open' : this.subMenuMode === 'open'),
        //子菜单是否是悬浮触发
        //1、当前subMenuTrigger === undefined => 根据所属菜单的subMenuTrigger是否为hover来判断
        //2、当前subMenuTrigger !== undefined => 根据当前subMenuTrigger是否为hover来判断
        subMenuTriggerIsHover: this.subMenuTrigger === void 0 ? this.menu.subMenuTrigger === 'hover' : this.subMenuTrigger === 'hover',
        subMenuHoverLeaveTimeIndex: undefined,
        showRight: !this.menu.isCollapse,//是否显示右侧
        selected: this.value,//是否选中
        active: false,//是否激活
        expand: false,//是否展开
        hover: false,//是否悬浮
        isHorizontal: this.rootMenuItem === this && this.menu.mode === 'horizontal',        // 是否水平排列

        subMenuOpenX: 0,
        subMenuOpenY: 0
      };
    },

    computed: {
      showArrow() {
        return this.arrow && this.showRight && this.hasSubMenu;
      },
      showPrompt() {
        return !this.showArrow && this.prompt && this.showRight;
      },
      showIcon() {
        return this.icon && !this.isHorizontal;
      },
      disabledClass() {
        return this.disabled ? `is-disabled` : undefined;
      },
      disabledStyle() {
        if (!this.disabled) {
          return;
        }
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
        if (!this.selected || this.disabled) {
          return undefined;
        }
        return {
          color: this.menu.selectedTextColor || this.rootMenu.selectedTextColor,
          backgroundColor: this.menu.selectedBackgroundColor || this.rootMenu.selectedBackgroundColor
        };
      },
      activeClass() {
        return (this.hasSubMenu && this.active) ? 'is-active' : undefined;
      },
      activeStyle() {
        if (!this.active || this.disabled) {
          return undefined;
        }
        return {
          color: this.menu.activeTextColor || this.rootMenu.activeTextColor,
          backgroundColor: this.menu.activeBackgroundColor || this.rootMenu.activeBackgroundColor
        };
      },
      hoverClass() {
        return this.hover ? 'is-hover' : undefined;
      },
      hoverStyle() {
        if (!this.hover) {
          return undefined;
        }
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
      expand(val) {
        if (val) {
          this.subMenu.showMenu(false);
        } else {
          this.subMenu.hideMenu(false);
        }
      },
      'menu.isCollapse': {
        handler(v) {
          this.showRight = !v;
        },
        deep: true
      }
    },

    methods: {
      handleMouseEnter(e) {
        if (this.disabled) {
          return;
        }
        this.hover = true;
        if (this.hasSubMenu) {
          if (!this.subMenuTriggerIsHover || this.menu.collapse) {
            return;
          }
          this.clearSubMenuHoverLeaveTimeToRoot();
          this.expand = true;
        }
      },
      handleMouseLeave(e) {
        if (this.disabled) {
          return;
        }
        this.hover = false;
        if (this.hasSubMenu) {
          if (!this.subMenuTriggerIsHover || this.menu.collapse) {
            return;
          }
          //离开关闭的时候给一个定时延迟,这样当子菜单触发进入事件,就取消定时,当子菜单触发离开事件继续启动延迟
          this.subMenuHoverLeaveTimeIndex = setTimeout(() => {
            this.expand = false;
          }, 500);
        }
      },
      clearSubMenuHoverLeaveTimeToRoot() {
        if (this.subMenuTriggerIsHover) {
          window.clearTimeout(this.subMenuHoverLeaveTimeIndex);
        }
        if (this.parentMenuItem) {
          this.parentMenuItem.clearSubMenuHoverLeaveTimeToRoot();
        }
      },
      startSubMenuHoverLeaveTimeToRoot() {
        if (this.subMenuTriggerIsHover) {
          this.subMenuHoverLeaveTimeIndex = setTimeout(() => {
            this.expand = false;
          }, 500);
        }
        if (this.parentMenuItem) {
          this.parentMenuItem.startSubMenuHoverLeaveTimeToRoot();
        }
      },
      handleClick(e) {
        if (this.disabled || this.$slots.panel) {
          return;
        }
        if (this.hasSubMenu) {
          if (this.subMenuTriggerIsHover || this.menu.collapse) {
            return;
          }
          this.expand = !this.expand;
          return;
        }
        if (!this.selected) {
          this.selected = true;
        }
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
