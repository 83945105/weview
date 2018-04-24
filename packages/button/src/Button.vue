<template>
  <button
    class="we-button we-button-primary we-button-default"
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
  export default {
    name: "we-button",

    componentName: 'WeButton',

    methods: {
      handleClick(e) {
        this.$emit('click', e);
      }
    }
  }
</script>
<style lang="less" type="text/less">
  @import "../../theme-chalk/button.less";
</style>
