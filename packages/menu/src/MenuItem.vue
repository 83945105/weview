<template>
  <li :class="[itemClass]" :style="[showStyle]" @click.stop="handleClick">
    <div :class="[titleClass, selectedClass, activeClass]"
         :style="[indentStyle, titleInnerStyle, selectedStyle, activeStyle]"
         @mouseenter="handleMouseEnter"
         @mouseleave="handleMouseLeave">
      <div v-if="showArrow && hasSubMenu" :class="[titleArrowClass, {'is-opened':expand}]">
        <icon v-if="isAccordion" :name="isHorizontal ? 'angle-left' : 'angle-up'"></icon>
        <icon v-else :name="isHorizontal ? 'angle-up' : 'angle-left'"></icon>
      </div>
      <div :class="[titleInnerClass]">
        <div v-if="hasDefaultIcon" :class="[titleInnerIconClass]">
          <slot name="icon">
            <icon :name="iconName"></icon>
          </slot>
        </div>
        <div :class="[titleInnerTextClass]">
          <slot></slot>
        </div>
      </div>
    </div>

    <slot name="subMenu" :menu-item-width="menuItemWidth" :menu-item-height="menuItemHeight"></slot>

    <div v-if="isHorizontal" :class="[horizontalLineClass]" :style="[horizontalLineStyle]"></div>
    <div v-else :class="[verticalLineClass]" :style="[verticalLineStyle]"></div>

    <div class="we-common-clear"></div>

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
      colors: ['colors'],
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
        isRoot: this === this.rootMenuItem,
        menuItemWidth: undefined,
        menuItemHeight: undefined,
        menuItemTitleWidth: undefined,
        menuMode: this.menu.mode,
        hasSubMenu: false,
        //是否是手风琴排版,根据所属菜单排版确定,如果不是手风琴排版,必须固定高度
        isAccordion: this.menu.isAccordion,
        selected: this.value,
        expand: false,
        active: false,
        hover: false,
        showArrow: true,
        hoverTextColorCache: undefined,
        hoverBackgroundColorCache: undefined,
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
      // 是否水平排列
      isHorizontal() {
        return this.rootMenuItem === this && this.menuMode === 'horizontal';
      },
      showStyle() {
        if (this.isAccordion) {
          return undefined;
        }
        return {
          height: `50px`
        };
      },
      hasDefaultIcon() {
        return this.rootMenu.mode !== 'horizontal';
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
      titleClass() {
        return `${this.prefixCls}-menu-item-title`;
      },
      titleInnerClass() {
        return `${this.prefixCls}-menu-item-title-inner`;
      },
      titleInnerStyle() {
        return {
          color: this.colors.textColor
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
          color: this.colors.selectedTextColor,
          backgroundColor: this.colors.selectedBackgroundColor
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
          color: this.colors.activeTextColor,
          backgroundColor: this.colors.activeBackgroundColor
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
        if (!this.active || (!this.isRoot && this.isAccordion)) {
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
          backgroundColor: this.colors.activeTextColor
        };
      },
      horizontalLineClass() {
        return `${this.prefixCls}-menu-horizontal-line`;
      },
      horizontalLineStyle() {
        if (!this.hover && !this.selected && !this.active) {
          return {
            bottom: 0,
            width: 0,
            opacity: 0
          };
        }
        return {
          bottom: 0,
          width: `${this.menuItemTitleWidth + (this.hasSubMenu ? 20 : 0)}px`,
          opacity: 1,
          backgroundColor: this.colors.activeTextColor
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
          this.showArrow = !v;
        },
        deep: true
      }
    },

    methods: {
      handleMouseEnter(e) {
        this.hover = true;
        this.hoverBackgroundColorCache = e.currentTarget.style.backgroundColor;
        this.hoverTextColorCache = e.currentTarget.style.color;
        e.currentTarget.style.color = this.colors.hoverTextColor;
        e.currentTarget.style.backgroundColor = this.colors.hoverBackgroundColor;
      },
      handleMouseLeave(e) {
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
      if (this.rootMenu) {
        this.showArrow = !this.rootMenu.collapse;
      }
      this.$on('item-un-selected', this.handleItemUnSelected);
      this.$on('item-active', this.handleItemActive);
    },

    mounted() {
      this.menuItemWidth = this.$el.scrollWidth;
      this.menuItemHeight = this.$el.scrollHeight;
      this.menuItemTitleWidth = this.$el.getElementsByTagName('div')[0].scrollWidth;
    }

  }
</script>
