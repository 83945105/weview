<template>
  <li :class="[itemClass]"
      @click.stop="handleClick"
  >
    <div :class="[titleClass, selectedClass, activeClass]"
         :style="[indentStyle, titleInnerStyle, selectedStyle, activeStyle]"
         @mouseenter="handleMouseEnter"
         @mouseleave="handleMouseLeave"
    >
      <div v-if="showArrow && hasSubMenu" :class="[titleArrowClass]">
        <icon :name="expand ? 'angle-down' : 'angle-up'"></icon>
      </div>
      <div :class="[titleInnerClass]">
        <div :class="[titleInnerIconClass]">
          <slot name="icon">
            <icon :name="iconName"></icon>
          </slot>
        </div>
        <div :class="[titleInnerTextClass]">
          <slot></slot>
        </div>
      </div>
    </div>
    <slot name="subMenu"></slot>
    <div :class="[verticalLineClass]"
         :style="[verticalLineStyle]"
    ></div>
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
        rootMenu: this.rootMenu,
        menuItem: this
      };
    },

    inject: {
      rootMenu: {
        default: null
      },
      menu: {
        default: null
      }
    },

    data() {
      return {
        showArrow: true,
        selected: this.value,
        expand: false,
        active: false,
        hasSubMenu: false,
        indentNum: 0,
        textColor: undefined,
        backgroundColor: undefined,
        activeTextColor: undefined,
        activeBackgroundColor: undefined,
        selectedTextColor: undefined,
        selectedBackgroundColor: undefined,
        hoverTextColor: undefined,
        hoverBackgroundColor: undefined,
        hover: false,
        hoverOldTextColor: undefined,
        hoverOldBackgroundColor: undefined
      };
    },

    props: {
      value: Boolean,//是否选中
      disabled: Boolean,//是否禁用
      iconName: {//图标名称
        type: String,
        default: ''
      }
    },

    computed: {
      itemClass() {
        return `${this.prefixCls}-menu-item`;
      },
      titleClass() {
        return `${this.prefixCls}-menu-item-title`;
      },
      titleInnerClass() {
        return `${this.prefixCls}-menu-item-title-inner`;
      },
      titleInnerStyle() {
        return {
          color: this.textColor
        };
      },
      titleInnerIconClass() {
        return `${this.prefixCls}-menu-item-title-inner-icon`;
      },
      titleInnerTextClass() {
        return `${this.prefixCls}-menu-item-title-inner-text`;
      },
      selectedClass() {
        return (!this.hasSubMenu && this.selected) ? 'is-selected' : undefined;
      },
      selectedStyle() {
        if (!this.selected) {
          return undefined;
        }
        return {
          color: this.selectedTextColor,
          backgroundColor: this.selectedBackgroundColor
        };
      },
      activeClass() {
        return (this.hasSubMenu && this.active) ? 'is-active' : undefined;
      },
      activeStyle() {
        if (!this.active) {
          return undefined;
        }
        return {
          color: this.activeTextColor,
          backgroundColor: this.activeBackgroundColor
        };
      },
      titleArrowClass() {
        return `${this.prefixCls}-menu-item-title-arrow`;
      },
      indentStyle() {
        return {
          paddingLeft: this.indentNum > 0 ? `${this.indentNum * 15}px` : undefined
        };
      },
      verticalLineClass() {
        return `${this.prefixCls}-menu-vertical-line`;
      },
      verticalLineStyle() {
        if (!this.active) {
          return {
            top: 0,
            height: 0,
            opacity: 0
          };
        }
        return {
          top: 0,
          height: `50px`,
          opacity: 1,
          backgroundColor: this.activeTextColor
        };
      }
    },

    watch: {
      value(v) {
        this.selected = v;
      },
      selected(v) {
        this.$emit('input', v);
      },
      expand(v) {
        if (v) {
          this.broadcast(`${this.prefixNameCls}Menu`, 'item-expand', {menu: this.menu, item: this});
        } else {
          this.broadcast(`${this.prefixNameCls}Menu`, 'item-un-expand', {menu: this.menu, item: this});
        }
      },
      'menu.collapse': {
        handler(v) {
          this.showArrow = !v;
        },
        deep: true
      }
    },

    methods: {
      handleMouseEnter(e) {

        this.hover = true;

        this.hoverOldBackgroundColor = e.currentTarget.style.backgroundColor;
        this.hoverOldTextColor = e.currentTarget.style.color;

        e.currentTarget.style.color = this.hoverTextColor;
        e.currentTarget.style.backgroundColor = this.hoverBackgroundColor;

      },
      handleMouseLeave(e) {
        this.hover = false;
        e.currentTarget.style.backgroundColor = this.hoverOldBackgroundColor;
        e.currentTarget.style.color = this.hoverOldTextColor;
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
          return
        }
        //通知根菜单
        this.dispatchRoot(`${this.prefixNameCls}Menu`, 'item-click', {menu: this.menu, item: this});
        //通知根菜单项激活
        this.dispatchRoot(`${this.prefixNameCls}MenuItem`, 'item-click', {menu: this.menu, item: this});
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
      handleItemClick({menu, item}) {
        this.active = true;
      }
    },

    created() {
      if (this.rootMenu) {
        this.showArrow = !this.rootMenu.collapse;
      }
      if (this.menu) {
        this.textColor = this.menu.tc;
        this.backgroundColor = this.menu.bgc;
        this.activeTextColor = this.menu.atc;
        this.activeBackgroundColor = this.menu.aBgc;
        this.selectedTextColor = this.menu.stc;
        this.selectedBackgroundColor = this.menu.sBgc;
        this.hoverTextColor = this.menu.htc;
        this.hoverBackgroundColor = this.menu.hBgc;
        if (this.menu.indentNum !== undefined) {
          this.indentNum = this.menu.indentNum;
        }
      }
      this.$on('item-un-selected', this.handleItemUnSelected);
      this.$on('item-click', this.handleItemClick);
    }

  }
</script>
