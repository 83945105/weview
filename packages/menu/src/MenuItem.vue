<template>
  <li :class="[itemClass]"
      @click.stop="handleClick"
  >
    <div :class="[titleClass, selectedClass, activeClass]"
         :style="[indentStyle]">
      <div v-if="hasSubMenu" :class="[titleArrowClass]">
        <icon :name="expand ? 'angle-down' : 'angle-up'"></icon>
      </div>
      <div class="we-menu-item-title-inner">
        <div class="we-menu-item-title-inner-icon">
          <icon name="edit"></icon>
        </div>
        <div class="we-menu-item-title-inner-text">
          <slot></slot>
        </div>
      </div>
    </div>

    <animation name="menuFadeIn">
      <slot name="subMenu"></slot>
    </animation>

  </li>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';
  import Emitter from '../../src/mixins/emitter.js';

  import Icon from '../../icon/src/Icon.vue';
  import Animation from '../../animation/src/Animation.vue';

  export default {

    components: {Icon: Icon, Animation: Animation},

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
        expand: this.value,
        active: false,
        hasSubMenu: false,
        indentNum: 0
      };
    },

    props: {
      value: Boolean,
      disabled: Boolean
    },

    computed: {
      itemClass() {
        return `${this.prefixCls}-menu-item`;
      },
      titleClass() {
        return `${this.prefixCls}-menu-item-title`;
      },
      selectedClass() {
        return this.selected ? 'is-selected' : undefined;
      },
      activeClass() {
        return this.active ? 'is-active' : undefined;
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
          this.$emit('click', e, this);
          return
        }
        this.dispatch(`${this.prefixNameCls}Menu`, 'item-click', this);
        this.selected = true;
        this.$emit('click', e, this);
      }
    },

    created() {
      if (this.menu) {
        if (this.menu.indentNum !== undefined) {
          this.indentNum = this.menu.indentNum;
        }
      }
    }

  }
</script>
