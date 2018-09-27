<template>
  <div>
    <div class="we-scroll-bar-wrap" style="height: 200px; width: 400px; border: 1px solid #dddddd">
      <div style="background-color: #f0f0f0;height: 300px; width: 100%;"></div>
      <div class="we-scroll-bar is-vertical"></div>
      <div class="we-scroll-bar is-vertical"></div>
    </div>

    <div @click="isShow =! isShow" style="height: 40px;background-color: #f0f0f0">test</div>
    <we-animation name="fadeDown">
      <ul v-if="isShow" class="testUl">
        <li>11111</li>
        <li>22222</li>
        <li>33333</li>
      </ul>
    </we-animation>
    <ul class="testUl">
      <li>11111</li>
      <li>22222</li>
      <li>33333</li>
    </ul>
  </div>
</template>

<script>
  import WeIcon from "../../packages/icon/src/Icon.vue";
  import WeButton from "../../packages/button/src/Button.vue";
  import WeScrollBar from "../../packages/scroll-bar/src/ScrollBar.vue";
  import WeAnimation from "../../packages/animation/src/Animation.vue";

  export default {
    name: "scroll-bar-test",

    components: {
      weIcon: WeIcon,
      weButton: WeButton,
      weScrollBar: WeScrollBar,
      weAnimation: WeAnimation
    },
    data() {
      return {
        isShow: false
      }
    },

    computed: {

    },

    methods: {

    }
  }
</script>

<style scoped>
  .testUl li{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e5e5e5;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
