<template>
  <li :class="[itemClass]"
      @click.stop="handleClick"
  >
    <div :class="[titleClass, selectedClass, activeClass]"
         :style="[indentStyle]">
      <div v-if="hasSubMenu" :class="[titleArrowClass]">
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
        menuItem: this
      };
    },

    inject: {
      menu: {
        default: null
      }
    },

    data() {
      return {
        selected: this.value,
        expand: false,
        active: false,
        hasSubMenu: false,
        indentNum: 0
      };
    },

    props: {
      value: Boolean,
      disabled: Boolean,
      iconName: {
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
      titleInnerIconClass() {
        return `${this.prefixCls}-menu-item-title-inner-icon`;
      },
      titleInnerTextClass() {
        return `${this.prefixCls}-menu-item-title-inner-text`;
      },
      selectedClass() {
        return (!this.hasSubMenu && this.selected) ? 'is-selected' : undefined;
      },
      activeClass() {
        return (this.hasSubMenu && this.active) ? 'is-active' : undefined;
      },
      titleArrowClass() {
        return `${this.prefixCls}-menu-item-title-arrow`;
      },
      indentStyle() {
        return {
          paddingLeft: this.indentNum > 0 ? `${this.indentNum * 15}px` : undefined
        };
      }
    },

    watch: {
      value(v) {
        this.selected = v;
      },
      selected(v) {
        this.$emit('input', v);
      }
    },

    methods: {
      handleClick(e) {
        if (this.disabled) {
          return;
        }
        if (this.hasSubMenu) {
          this.expand = !this.expand;
          this.broadcast(`${this.prefixNameCls}Menu`, 'item-expand', {menu: this.menu, item: this});
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
      if (this.menu) {
        if (this.menu.indentNum !== undefined) {
          this.indentNum = this.menu.indentNum;
        }
      }
      this.$on('item-un-selected', this.handleItemUnSelected);
      this.$on('item-click', this.handleItemClick);
    }

  }
</script>
