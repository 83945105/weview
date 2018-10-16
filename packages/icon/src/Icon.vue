<template>
  <i :class="[iconClass, nameClass, typeClass, sizeClass, loadingClass]"></i>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  export default {

    name: `${Conf.prefixCls}-icon`,

    componentName: `${Conf.prefixNameCls}Icon`,

    mixins: [Conf],

    props: {
      name: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      loading: Boolean,
      loadingSpeed: Number
    },

    computed: {
      iconClass() {
        return `${this.prefixCls}-icon`;
      },
      nameClass() {
        return `${this.prefixCls}-icon-${this.name}`;
      },
      typeClass() {
        return `${this.prefixCls}-icon-type-${this.type}`;
      },
      iconSize() {
        return this.size || (this.$WEVIEW || {}).size;
      },
      sizeClass() {
        return this.iconSize ? `${this.prefixCls}-icon-size-${this.iconSize}` : undefined;
      },
      loadingClass() {
        return this.loading ? `${this.prefixCls}-icon-loading` : undefined;
      },
      _loadingSpeed() {
        return this.loadingSpeed ? `${this.loadingSpeed}s` : undefined;
      }
    }

  }
</script>
