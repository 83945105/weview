<template>
  <div>
    <we-button @click.stop="right = true">右方弹出</we-button>
    <we-button @click.stop="left = true">左方弹出</we-button>
    <we-button @click.stop="top = true">上方弹出</we-button>
    <we-button @click.stop="bottom = true">下方弹出</we-button>
    <we-button @click.stop="all = true">完整示例</we-button>
    <we-layer-frame v-model="right" :custom-class="rightClass" custom-mask-class="right-mask-custom-class" :esc-closeable="false"></we-layer-frame>
    <we-layer-frame v-model="left" position="left" width="90%"></we-layer-frame>
    <we-layer-frame v-model="top" position="top" height="70%"></we-layer-frame>
    <we-layer-frame v-model="bottom" position="bottom" height="90%"></we-layer-frame>
    <we-layer-frame v-model="all">
      <we-layer-frame-header></we-layer-frame-header>
      <div class="we-layer-frame-content">1111111</div>
      <we-layer-frame-footer slot="bottom" @confirm="(e, close) => {close()}"></we-layer-frame-footer>
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
    }
  }
</script>

<style>

  .right-custom-class {
    box-shadow: -3px 16px 18px 20px rgba(0, 0, 0, .2);
  }

  .right-mask-custom-class {
    background-color: #00a04d;
  }

</style>
