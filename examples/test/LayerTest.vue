<template>
  <div>
    <we-layer
      v-model="visible"
      :width="50"
      :height="40"
      drag
      :show-mask="true"
      position="center"
      title="点我可拖拽"
      @click-confirm="confirm"
    >


      <div style="width: 5000px;height: 600px;">+4566+46464646</div>

      <!--      <template slot-scope="{ width, height }">

              <iframe src="http://wwww.baidu.com" frameborder="0" width="100%" height="98%"></iframe>

            </template>-->

    </we-layer>

    <we-button @click="visible = true">使用组件打开弹层</we-button>
    <we-button @click="$layer({target:'#dom1', drag: true, height: 400})">使用$layer打开弹层</we-button>
    <div id="dom1" style="display: none">
      <div style="width: 5000px;height: 100px;">+4566+46464646</div>
      <div style="width: 5000px;height: 100px;">+4566+46464646</div>
      <div style="width: 5000px;height: 100px;">+4566+46464646</div>
      <div style="width: 5000px;height: 100px;">+4566+46464646</div>
      <div style="width: 5000px;height: 100px;">+4566+46464646</div>
    </div>


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
