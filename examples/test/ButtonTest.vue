<template>
  <div style="margin: 10px 10px 10px 10px">
    <div style="font-size: 20px;margin: 10px 0px 10px 0px;font-weight: bold">普通风格按钮示例</div>
    <div>
      <we-button icon-position="right" :loading="true" icon-name="lock">默认按钮</we-button>
      <we-button type="primary">主要按钮</we-button>
      <we-button type="success">成功按钮</we-button>
      <we-button type="info">提示按钮</we-button>
      <we-button type="warning">警告按钮</we-button>
      <we-button type="danger">危险按钮</we-button>
    </div>
    <div style="font-size: 20px;margin: 10px 0px 10px 0px;font-weight: bold">普通风格(禁用)按钮示例</div>
    <div style="margin-top: 10px">
      <we-button disabled>默认按钮</we-button>
      <we-button disabled type="primary">主要按钮</we-button>
      <we-button disabled type="success">成功按钮</we-button>
      <we-button disabled type="info">提示按钮</we-button>
      <we-button disabled type="warning">警告按钮</we-button>
      <we-button disabled type="danger">危险按钮</we-button>
    </div>
    <div style="font-size: 20px;margin: 10px 0px 10px 0px;font-weight: bold">朴素风格按钮示例</div>
    <div style="margin-top: 10px">
      <we-button plain>默认按钮</we-button>
      <we-button type="primary" plain>主要按钮</we-button>
      <we-button type="success" plain>成功按钮</we-button>
      <we-button type="info" plain>提示按钮</we-button>
      <we-button type="warning" plain>警告按钮</we-button>
      <we-button type="danger" plain>危险按钮</we-button>
    </div>
    <div style="font-size: 20px;margin: 10px 0px 10px 0px;font-weight: bold">朴素风格(禁用)按钮示例</div>
    <div style="margin-top: 10px">
      <we-button disabled plain>默认按钮</we-button>
      <we-button disabled type="primary" plain>主要按钮</we-button>
      <we-button disabled type="success" plain>成功按钮</we-button>
      <we-button disabled type="info" plain>提示按钮</we-button>
      <we-button disabled type="warning" plain>警告按钮</we-button>
      <we-button disabled type="danger" plain>危险按钮</we-button>
    </div>
  </div>
</template>

<script>

  import WeButton from "../../packages/button/src/Button";

  export default {
    components: {
      WeButton
    },
    name: "button-test"
  }
</script>

<style scoped>

</style>
