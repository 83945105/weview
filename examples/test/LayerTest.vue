<template>
  <div>
    <we-layer :height="500">
      <div style="width: 50px;height: 600px;">+4566+46464646</div>
      <!--<iframe frameborder="0" name="layerFrame" scrolling="auto" width="100%" :height="frameHeight" src="http://wwww.baidu.com"></iframe>-->


      <template slot="footer">
        <we-button>确定</we-button>
        <we-button>确定</we-button>
        <we-button>确定</we-button>
      </template>

    </we-layer>
  </div>
</template>

<script>
  export default {
    name: "layer-test"
  }
</script>

<style scoped>

</style>
