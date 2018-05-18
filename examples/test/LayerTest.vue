<template>
  <div>
    <we-layer v-model="visible" :height="400" drag @click-confirm="confirm" :show-mask="false" position="center" title="点我可拖拽">


      <div style="width: 5000px;height: 600px;">+4566+46464646</div>

      <!--      <template slot-scope="{ width, height }">

              <iframe src="http://wwww.baidu.com" frameborder="0" width="100%" height="98%"></iframe>

            </template>-->

    </we-layer>

    <we-button @click="visible = true">使用组件打开弹层</we-button>
    <we-button @click="$layer('#dom1')">使用$layer打开弹层</we-button>
    <div id="dom1" style="width: 5000px;height: 600px;display: none">+4566+46464646</div>


  </div>
</template>

<script>
  export default {
    name: "layer-test",

    data() {
      return {
        visible: false
      };
    },

    methods: {
      confirm(e, close) {
        close();
      }
    }
  }
</script>

<style>

</style>
