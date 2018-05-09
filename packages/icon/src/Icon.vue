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
      size: {
        type: String,
        default: 'large'
      },
      loading: Boolean
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
        return `${this.prefixCls}-icon-${this.size}`;
      },
      loadingClass() {
        return this.loading ? `${this.prefixCls}-icon-loading` : undefined;
      }
    }

  }
</script>
