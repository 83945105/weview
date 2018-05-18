<template>
  <div>
    <we-layer v-model="visible" :height="400" drag>


      <div style="width: 5000px;height: 600px;">+4566+46464646</div>

      <!--      <template slot-scope="{ width, height }">

              <iframe src="http://wwww.baidu.com" frameborder="0" width="100%" height="98%"></iframe>

            </template>-->

    </we-layer>

    <we-button @click="visible = true">打开弹层</we-button>
    <we-button @click="visible = false">关闭弹层</we-button>

  </div>
</template>

<script>
  export default {
    name: "layer-test",

    data() {
      return {
        visible: true
      };
    }
  }
</script>

<style scoped>

</style>
