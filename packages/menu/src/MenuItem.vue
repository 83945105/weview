<template>
  <li :class="[itemClass]"
      @click.stop="handleClick"
  >
    <slot name="panel">
      <div :class="[`${prefixCls}-menu-item-title`, selectedClass, activeClass, disabledClass]"
           :style="[{
            paddingLeft: `${indentNum * 15}px`,
            color: menu.textColor || rootMenu.textColor
           }, selectedStyle, activeStyle, disabledStyle]"
           @mouseenter="handleMouseEnter"
           @mouseleave="handleMouseLeave"
      >
        <div v-if="showArrow && hasSubMenu" :class="[`${prefixCls}-menu-item-title-arrow`, {'is-opened': expand}]">
          <icon v-if="subMenuModeIsOpen" :name="isHorizontal ? 'angle-up' : 'angle-left'"></icon>
          <icon v-else :name="isHorizontal ? 'angle-left' : 'angle-up'"></icon>
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
        menuItem: this
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
      menuGroup: {
        default: null
      }
    },

    data() {
      return {
        isRoot: this === this.rootMenuItem,//是否是根菜单项
        hasSubMenu: false,//是否拥有子菜单
        subMenu: undefined,//子菜单
        showArrow: true,
        selected: this.value,//是否选中
        active: false,//是否激活
        expand: false,//是否展开
        hover: false,//是否悬浮
        subMenuModeIsOpen: this.menu.mode === 'horizontal' || this.menu.subMenuMode === 'open',//子菜单是否是打开模式
        isHorizontal: this.rootMenuItem === this && this.menu.mode === 'horizontal',        // 是否水平排列
        hoverTextColorCache: undefined,
        hoverBackgroundColorCache: undefined,
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
      verticalLineStyle() {
        if (this.isRoot && this.active) {
          return {
            top: 0,
            height: `50px`,
            opacity: 1,
            backgroundColor: this.menu.activeLineColor || this.rootMenu.activeLineColor
          };
        }
        return {
          top: 0,
          height: 0,
          opacity: 0
        };
      },
      horizontalLineStyle() {
        if (this.hover || this.selected || this.active) {
          return {
            bottom: 0,
            opacity: 1,
            backgroundColor: this.menu.activeLineColor || this.rootMenu.activeLineColor
          };
        }
        return {
          bottom: 0,
          width: 0,
          opacity: 0
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
        this.subMenu.isShow = v;
      }
    },

    methods: {
      handleMouseEnter(e) {
        if (this.disabled) {
          return;
        }
        this.hover = true;
        this.hoverBackgroundColorCache = e.currentTarget.style.backgroundColor;
        this.hoverTextColorCache = e.currentTarget.style.color;
        e.currentTarget.style.color = this.menu.hoverTextColor || this.rootMenu.hoverTextColor;
        e.currentTarget.style.backgroundColor = this.menu.hoverBackgroundColor || this.rootMenu.hoverBackgroundColor;
      },
      handleMouseLeave(e) {
        if (this.disabled) {
          return;
        }
        this.hover = false;
        e.currentTarget.style.backgroundColor = this.hoverBackgroundColorCache;
        e.currentTarget.style.color = this.hoverTextColorCache;
      },
      handleClick(e) {
        if (this.disabled) {
          return;
        }
        if (this.hasSubMenu) {
          if (this.menu.collapse) {
            return;
          }
          this.expand = !this.expand;
          this.$emit('click', e, this);
          return;
        }
        //通知根菜单
        this.dispatchRoot(`${this.prefixNameCls}Menu`, 'item-click', {menu: this.menu, item: this});
        //通知菜单项激活
        this.dispatch(`${this.prefixNameCls}MenuItem`, 'item-active', {menu: this.menu, item: this});
        this.selected = true;
        this.$emit('click', e, this);
      },
      handleItemUnSelected({menu, item}) {
        if (this.hasSubMenu) {
          this.active = false;
        } else {
          this.selected = false;
        }
        this.broadcast(`${this.prefixNameCls}MenuItem`, 'item-un-selected', {menu: menu, item: item});
      },
      handleItemActive({menu, item}) {
        if (this.hasSubMenu) {
          this.active = true;
          this.dispatch(`${this.prefixNameCls}MenuItem`, 'item-active', {menu: this.menu, item: this});
        }
      }
    },

    created() {
      this.$on('item-un-selected', this.handleItemUnSelected);
      this.$on('item-active', this.handleItemActive);
      if (this.rootMenu === this.menu) {
        this.menu.menuItems.push(this);
        this.menu.allMenuItems.push(this);
      } else {
        this.rootMenu.allMenuItems.push(this);
        this.menu.menuItems.push(this);
        this.menu.allMenuItems.push(this);
      }
    },

    mounted() {
      if (this.selected) {
        //通知菜单项激活
        this.dispatch(`${this.prefixNameCls}MenuItem`, 'item-active', {menu: this.menu, item: this});
      }

    }

  }
</script>
