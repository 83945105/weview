<template>
  <div>
    <we-button type="info" @click="isShow = !isShow">动画测试</we-button>
    <we-animation name="fadeIn">
      <div v-if="isShow" style="position:fixed;bottom:350px;top:350px;left:350px;right:350px;z-index:999;background-color:#ff6600">
        fadeIn
      </div>
    </we-animation>
    <we-animation name="fadeRight">
      <div v-if="isShow" style="position:fixed;top:0;bottom:0;right:0;width:200px;z-index:999;background-color:#ff0000">
        fadeRight
      </div>
    </we-animation>
    <we-animation name="fadeLeft">
      <div v-if="isShow" style="position:fixed;top:0;bottom:0;left:0;width:200px;z-index:999;background-color:#ff0000">
        fadeLeft
      </div>
    </we-animation>
    <we-animation name="fadeUp">
      <div v-if="isShow" style="position:fixed;top:0;right:0;left:0;height:100px;z-index:999;background-color:#ff6600">
        fadeUp
      </div>
    </we-animation>
    <we-animation name="fadeDown">
      <div v-if="isShow" style="position:fixed;bottom:0;right:0;left:0;height:100px;z-index:999;background-color:#ff6600">
        fadeDown
      </div>
    </we-animation>
  </div>
</template>

<script>
  import WeButton from "../../packages/button/src/Button";
  import weAnimation from "../../packages/animation/src/Animation.vue";

  export default {
    components:{WeButton,weAnimation},

    name: "animation-test",

    data(){
      return {
        isShow:false
      }
    }
  }
</script>

<style scoped>

</style>
