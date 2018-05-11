<template>
  <i :class="[iconClass, nameClass, typeClass, sizeClass, loadingClass]"></i>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

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
        return `${this.prefixCls}-${this.name}`;
      },
      typeClass() {
        return `${this.prefixCls}-icon-${this.type}`;
      },
      sizeClass() {
        return this.size ? `${this.prefixCls}-icon-${this.size}` : undefined;
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
