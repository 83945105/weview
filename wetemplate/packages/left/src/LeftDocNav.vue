<template>
  <div :class="[navClass]">
    <h3
      v-if="label"
      :class="[labelClass, labelLevelClass, labelStyleClass, linkClass, selectedClass]"
      @click="handleClick"
    >{{label}}</h3>
    <slot></slot>
  </div>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  import Emitter from '../../src/mixins/emitter.js';

  export default {

    name: `${Conf.prefixCls}-left-doc-nav`,

    componentName: `${Conf.prefixNameCls}LeftDocNav`,

    mixins: [Conf, Emitter],

    data() {
      return {
        selected: this.value
      };
    },

    props: {
      label: String,
      labelLevel: {
        type: Number,
        default: 1
      },
      labelStyle: String,
      value: Boolean
    },

    computed: {
      hasChildren() {
        return this.$slots.default ? true : false;
      },
      navClass() {
        return `${this.prefixCls}-menu-item`;
      },
      labelClass() {
        return `${this.prefixCls}-menu-item-title`;
      },
      labelLevelClass() {
        return `title-${this.labelLevel}`;
      },
      labelStyleClass() {
        if (this.labelStyle === 'mini') {
          return `mini-title`;
        }
        return undefined;
      },
      linkClass() {
        return this.hasChildren ? undefined : `link`;
      },
      selectedClass() {
        return this.selected ? `selected` : undefined;
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
        if (!this.hasChildren) {
          this.dispatchRoot(`${this.prefixNameCls}LeftDocNav`, 'handleClickItem');
          this.selected = true;
          this.$emit('click', e);
        }
      }
    },

    created() {
      this.$on('handleClickItem', () => {
        this.broadcast(`${this.prefixNameCls}LeftDocNav`, 'unSelected');
      });
      this.$on('unSelected', () => {
        this.selected = false;
        this.broadcast(`${this.prefixNameCls}LeftDocNav`, 'unSelected');
      });
    }
  }
</script>
