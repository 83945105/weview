<template>
  <div>
    <we-layer
      v-model="visible"
      :width="50"
      :height="40"
      drag
      :drag-out-the-screen="false"
      :show-header="true"
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

    <we-button @click="layer01">弹出指定文本</we-button>

    <we-button @click="alert">警告框</we-button>
    <we-button @click="showConfirm">确认框</we-button>

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
      },
      layer01() {
        this.$layer('<div style="color: red">这是一段HTML文本</div>')
      },
      alert() {
        this.$alert({
          title: '提示',
          showHeader: true,
          message: '<div style="color: red">这是一个警告内容</div>',
          showClose: false,
          confirmButtonText: '知道啦',
          onClose() {
            this.$message('警告框关闭');
          }
        });
      },
      showConfirm() {
        this.$confirm({
          message: '<div style="color: red">这是一个询问内容</div>',
          clickConfirm(e, close) {
            close();
          }
        });
      }
    },

    created() {
    }
  }
</script>

<style>

</style>
