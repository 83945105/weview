<template>
  <button
    class="we-button we-button-default"
    :class="[typeClass]"
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
  export default {
    name: "we-button",

    componentName: 'WeButton',

    props: {
      size: {
        type: String,
        default: 'default'
      },
      type: {
        type: String,
        default: 'default'
      },
      round: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      sizeClass() {
        return ``;
      },
      typeClass() {
        return `we-button-${this.type}`;
      }
    },

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
