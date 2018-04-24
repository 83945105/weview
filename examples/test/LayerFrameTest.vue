<template>
  <div>
    <button @click.stop="right = true">右方弹出</button>
    <button @click.stop="left = true">左方弹出</button>
    <button @click.stop="top = true">上方弹出</button>
    <button @click.stop="bottom = true">下方弹出</button>
    <button @click.stop="all = true">完整示例</button>
    <we-layer-frame v-model="right" :custom-class="rightClass" :esc-closeable="false"></we-layer-frame>
    <we-layer-frame v-model="left" position="left" width="90%"></we-layer-frame>
    <we-layer-frame v-model="top" position="top" height="70%"></we-layer-frame>
    <we-layer-frame v-model="bottom" position="bottom" height="90%"></we-layer-frame>
    <we-layer-frame v-model="all">
      <we-layer-frame-top>
      </we-layer-frame-top>
    </we-layer-frame>
  </div>
</template>

<script>

  export default {
    name: "layer-frame-test",

    data() {
      return {
        right: false,
        left: false,
        top: false,
        bottom: false,
        all: false
      };
    },

    computed: {
      rightClass() {
        return 'right-custom-class';
      }
    },

    created() {
      console.log(this.$WEVIEW)
    }
  }
</script>

<style>

  .right-custom-class {
    box-shadow: -3px 16px 18px 20px rgba(0, 0, 0, .2);
  }

</style>
