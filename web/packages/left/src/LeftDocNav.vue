<template>
  <div :class="[navClass]">
    <h3 v-if="label" :class="[labelClass, labelLevelClass, labelStyleClass, linkClass]">{{label}}</h3>
    <slot></slot>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import Emitter from '../../../src/mixins/emitter';

  export default {

    name: `${Conf.prefixCls}-left-doc-nav`,

    componentName: `${Conf.prefixNameCls}LeftDocNav`,

    mixins: [Conf, Emitter],

    props: {
      label: String,
      labelLevel: {
        type: Number,
        default: 1
      },
      labelStyle: String
    },

    computed: {
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
        return this.$slots.default ? undefined : `link`;
      }
    }
  }
</script>
