<template>
  <button
    class="we-btn"
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
