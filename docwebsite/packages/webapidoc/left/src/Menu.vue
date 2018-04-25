<template>
  <div class="we-api-menu">
    <slot></slot>
  </div>
</template>

<script>

  import Emitter from '../../../../src/mixins/emitter';

  export default {
    name: "web-api-doc-left-menu",

    componentName: `WebApiDocLeftMenu`,

    mixins: [Emitter],

    created() {
      this.$on('handleClickItem', () => {
        this.broadcast(`WebApiDocLeftItem`, 'unSelectedItem');
      });
    }
  }
</script>
