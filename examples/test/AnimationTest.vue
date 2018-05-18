<template>
  <div>
    <we-button type="info" @click="isShow = !isShow">动画测试</we-button>
    <transition name="we-animation-bounce">
      <div v-if="isShow" style="height:200px;width:200px;background-color:#ff0000">
          123
      </div>
    </transition>
  </div>
</template>

<script>
  import WeButton from "../../packages/button/src/Button";

  export default {
    components:{WeButton},

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
