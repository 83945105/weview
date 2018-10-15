<template>
  <li :class="[itemClass]"
      @click.stop="handleClick"
  >
    <slot name="panel">
      <div :class="[`${prefixCls}-menu-item-title`, hoverClass, activeClass, selectedClass, disabledClass]"
           :style="[{
            paddingLeft: `${indentNum * 15}px`,
            color: menu.textColor || rootMenu.textColor
           }, hoverStyle, activeStyle, selectedStyle, disabledStyle]"
           @mouseenter.stop.self="handleMouseEnter"
           @mouseleave.stop.self="handleMouseLeave"
      >
        <div v-if="showArrow && hasSubMenu" :class="[`${prefixCls}-menu-item-title-arrow`, {'is-opened': expand}]">
          <icon v-if="subMenuModeIsOpen" :name="isHorizontal ? 'angle-down' : 'angle-right'"></icon>
          <icon v-else :name="isHorizontal ? 'angle-right' : 'angle-down'"></icon>
        </div>
        <div :class="[`${prefixCls}-menu-item-title-inner`]">
          <div v-if="!isHorizontal" :class="[`${prefixCls}-menu-item-title-inner-icon`]">
            <slot name="icon">
              <icon :name="iconName"></icon>
            </slot>
          </div>
          <div :class="[`${prefixCls}-menu-item-title-inner-text`]">
            <slot></slot>
          </div>
        </div>
      </div>
      <div :class="[`${prefixCls}-common-clear`]"></div>

      <slot name="subMenu"></slot>

      <div v-if="isHorizontal" :class="[`${prefixCls}-menu-horizontal-line`]" :style="[horizontalLineStyle]"></div>
      <div v-else :class="[`${prefixCls}-menu-vertical-line`]" :style="[verticalLineStyle]"></div>

      <div :class="[`${prefixCls}-common-clear`]"></div>
    </slot>
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

    data() {
      return {
        isRoot: this === this.rootMenuItem,//是否是根菜单项
        hasSubMenu: false,//是否拥有子菜单
        subMenu: undefined,//子菜单
        subMenuModeIsOpen: this.menu.mode === 'horizontal' || this.menu.subMenuMode === 'open',//子菜单是否是打开模式
        subMenuTriggerIsHover: (this.menu.mode === 'horizontal' || this.menu.subMenuMode === 'open') && this.menu.subMenuTrigger === 'hover',//子菜单是否是悬浮触发
        subMenuHoverLeaveTimeIndex: undefined,
        showArrow: true,
        selected: false,//是否选中
        active: false,//是否激活
        expand: false,//是否展开
        hover: false,//是否悬浮
        isHorizontal: this.rootMenuItem === this && this.menu.mode === 'horizontal',        // 是否水平排列

        subMenuOpenX: 0,
        subMenuOpenY: 0
      };
    },

    props: {
      index: String,//唯一标识,如果不设置将自动生成
      value: Boolean,//是否选中
      disabled: Boolean,//是否禁用,优先级高于menu
      iconName: {//图标名称
        type: String,
        default: ''
      }
    },

    computed: {
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
      value(v) {
        this.selected = v;
      },
      selected(v) {
        if (this.value !== v) {
          this.$emit('input', v);
        }
      },
      expand(v) {
        if (v) {
          this.subMenu.showMenu(false);
        } else {
          this.subMenu.hideMenu(false);
        }
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
        if (this.disabled) {
          return;
        }
        /*        console.log(e.offsetX)
                console.log(e)
                this.subMenuOpenX = e.pageX - e.offsetX + this.menu.width;
                this.subMenuOpenY = e.y - e.offsetY;*/
        if (this.hasSubMenu) {
          if (this.subMenuTriggerIsHover || this.menu.collapse) {
            return;
          }
          this.expand = !this.expand;
          this.$emit('click', e, this);
          return;
        }
        if (this.selected) {
          return;
        }
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
          m.selected = false;
          m.active = false;
        });
        //如果有上级菜单项,使其激活
        if (this.parentMenuItem) {
          this.parentMenuItem.handleItemActive({menu: this.menu, item: this});
        }
        this.selected = true;
        this.$emit('click', e, this);
      },
      handleItemActive({menu, item}) {
        this.active = true;
        //如果有上级菜单项,使其激活
        if (this.parentMenuItem) {
          this.parentMenuItem.handleItemActive({menu: menu, item: item});
        }
      }
    },

    created() {
      this.menu.addMenuItem(this);
      this.menu.addAllMenuItem(this);
    },

    mounted() {
      if (this.value && !this.hasSubMenu) {
        this.selected = true;
        this.parentMenuItem.handleItemActive({menu: this.menu, item: this});
      }
    }
  }
</script>
