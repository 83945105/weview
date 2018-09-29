<template>
  <li :class="[itemClass]"
      @click.stop="handleClick"
  >
    <div :class="[titleClass, selectedClass, activeClass]"
         :style="[indentStyle, titleInnerStyle, selectedStyle, activeStyle]"
         @mouseenter="handleMouseEnter"
         @mouseleave="handleMouseLeave"
    >
      <div v-if="$_showArrow_ && hasSubMenu" :class="[titleArrowClass]">
        <icon :name="expand ? 'angle-down' : 'angle-up'"></icon>
      </div>
      <div :class="[titleInnerClass]">
        <div v-if="$_hasIcon_" :class="[titleInnerIconClass]">
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
        rootMenuItem: this.rootMenuItem,
        menuItem: this
      };
    },

    inject: {
      $_colors_: ['$_colors_'],
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
        selected: this.value,
        expand: false,
        active: false,
        hover: false,
        hasSubMenu: false,
        $_showArrow_: true,
        $_hoverTextColorCache_: undefined,
        $_hoverBackgroundColorCache_: undefined
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
      $_hasIcon_() {
        return this.rootMenu.mode !== 'horizontal';
      },
      itemClass() {
        let cls = `${this.prefixCls}-menu-item`;
        if (this.rootMenuItem === this && this.rootMenu.mode === 'horizontal') {
          cls += ' is-horizontal';
        }
        return cls;
      },
      titleClass() {
        return `${this.prefixCls}-menu-item-title`;
      },
      titleInnerClass() {
        return `${this.prefixCls}-menu-item-title-inner`;
      },
      titleInnerStyle() {
        return {
          color: this.$_colors_.textColor
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
          color: this.$_colors_.selectedTextColor,
          backgroundColor: this.$_colors_.selectedBackgroundColor
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
          color: this.$_colors_.activeTextColor,
          backgroundColor: this.$_colors_.activeBackgroundColor
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
          backgroundColor: this.$_colors_.activeTextColor
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
      'rootMenu.collapse': {
        handler(v) {
          this.$_showArrow_ = !v;
        },
        deep: true
      }
    },

    methods: {
      handleMouseEnter(e) {
        this.hover = true;

        this.$_hoverBackgroundColorCache_ = e.currentTarget.style.backgroundColor;
        this.$_hoverTextColorCache_ = e.currentTarget.style.color;

        e.currentTarget.style.color = this.$_colors_.hoverTextColor;
        e.currentTarget.style.backgroundColor = this.$_colors_.hoverBackgroundColor;

      },
      handleMouseLeave(e) {
        this.hover = false;
        e.currentTarget.style.backgroundColor = this.$_hoverBackgroundColorCache_;
        e.currentTarget.style.color = this.$_hoverTextColorCache_;
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
        this.$_showArrow_ = !this.rootMenu.collapse;
      }
      this.$on('item-un-selected', this.handleItemUnSelected);
      this.$on('item-click', this.handleItemClick);
    },

    mounted() {
      // console.log(this.$_colors_)
    }

  }
</script>
