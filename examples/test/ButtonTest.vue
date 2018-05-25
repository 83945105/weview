<template>
  <div style="margin: 10px 10px 10px 10px">
    <div class="first-title">普通风格按钮示例</div>
    <div class="module-main">
      <div class="module-content">
        <we-button>默认按钮</we-button>
        <we-button type="primary">主要按钮</we-button>
        <we-button type="success">成功按钮</we-button>
        <we-button type="info">提示按钮</we-button>
        <we-button type="warning">警告按钮</we-button>
        <we-button type="danger">危险按钮</we-button>
        <we-button icon-name="lock-o" type="primary">左边图标</we-button>
      </div>
    </div>
    <div class="first-title">普通风格(禁用)按钮示例</div>
    <div class="module-main">
      <div class="module-content">
        <we-button disabled>默认按钮</we-button>
        <we-button disabled type="primary">主要按钮</we-button>
        <we-button disabled type="success">成功按钮</we-button>
        <we-button disabled type="info">提示按钮</we-button>
        <we-button disabled type="warning">警告按钮</we-button>
        <we-button disabled type="danger">危险按钮</we-button>
        <we-button disabled icon-name="lock-o" type="primary">左边图标</we-button>
      </div>
    </div>
    <div class="first-title">朴素风格按钮示例</div>
    <div class="module-main">
      <div class="module-content">
        <we-button plain>默认按钮</we-button>
        <we-button type="primary" plain>主要按钮</we-button>
        <we-button type="success" plain>成功按钮</we-button>
        <we-button type="info" plain>提示按钮</we-button>
        <we-button type="warning" plain>警告按钮</we-button>
        <we-button type="danger" plain>危险按钮</we-button>
        <we-button plain icon-name="lock-o" type="primary">左边图标</we-button>
      </div>
    </div>
    <div class="first-title">朴素风格(禁用)按钮示例</div>
    <div class="module-main">
      <div class="module-content">
        <we-button disabled plain>默认按钮</we-button>
        <we-button disabled type="primary" plain>主要按钮</we-button>
        <we-button disabled type="success" plain>成功按钮</we-button>
        <we-button disabled type="info" plain>提示按钮</we-button>
        <we-button disabled type="warning" plain>警告按钮</we-button>
        <we-button disabled type="danger" plain>危险按钮</we-button>
        <we-button disabled plain icon-name="lock-o" type="primary">左边图标</we-button>
      </div>
    </div>
    <div class="first-title">圆角按钮示例</div>
    <div class="module-main">
      <div class="module-content">
        <we-button shape="circle" icon-name="search-o"></we-button>
        <we-button shape="circle" type="primary" icon-name="search-o"></we-button>
        <we-button shape="circle" type="success" icon-name="search-o"></we-button>
        <we-button shape="circle" type="info" icon-name="search-o"></we-button>
        <we-button shape="circle" type="warning" icon-name="search-o"></we-button>
      </div>
    </div>
    <div class="first-title">圆形按钮示例</div>
    <div class="module-main">
      <div class="module-content">
        <div>
          <we-button shape="round">默认按钮</we-button>
          <we-button type="primary" shape="round">主要按钮</we-button>
          <we-button type="success" shape="round">成功按钮</we-button>
          <we-button type="info" shape="round">提示按钮</we-button>
          <we-button type="warning" shape="round">警告按钮</we-button>
          <we-button type="danger" shape="round">危险按钮</we-button>
        </div>
        <div style="margin-top:15px;">
          <we-button shape="round" plain>默认按钮</we-button>
          <we-button type="primary" shape="round" plain>主要按钮</we-button>
          <we-button type="success" shape="round" plain>成功按钮</we-button>
          <we-button type="info" shape="round" plain>提示按钮</we-button>
          <we-button type="warning" shape="round" plain>警告按钮</we-button>
          <we-button type="danger" shape="round" plain>危险按钮</we-button>
        </div>
      </div>
    </div>
    <div class="first-title">矩形按钮示例</div>
    <div class="module-main">
      <div class="module-content">
        <div>
          <we-button shape="rectangle">默认按钮</we-button>
          <we-button type="primary" shape="rectangle">主要按钮</we-button>
          <we-button type="success" shape="rectangle">成功按钮</we-button>
          <we-button type="info" shape="rectangle">提示按钮</we-button>
          <we-button type="warning" shape="rectangle">警告按钮</we-button>
          <we-button type="danger" shape="rectangle">危险按钮</we-button>
        </div>
        <div style="margin-top:15px;">
          <we-button shape="rectangle" plain>默认按钮</we-button>
          <we-button type="primary" shape="rectangle" plain>主要按钮</we-button>
          <we-button type="success" shape="rectangle" plain>成功按钮</we-button>
          <we-button type="info" shape="rectangle" plain>提示按钮</we-button>
          <we-button type="warning" shape="rectangle" plain>警告按钮</we-button>
          <we-button type="danger" shape="rectangle" plain>危险按钮</we-button>
        </div>
      </div>
    </div>
    <div class="first-title">加载特效</div>
    <div class="module-main">
      <div class="module-content">
        <we-button :loading="true">加载中</we-button>
        <we-button :loading="true" loading-icon-name="lock">自定义加载图标</we-button>
      </div>
    </div>
    <div class="first-title">按钮尺寸</div>
    <div class="module-main">
      <div class="module-content">
        <div>
          <we-button type="primary" size="large" icon-name="search-o">大型按钮</we-button>
          <we-button type="primary" icon-name="search-o">默认尺寸</we-button>
          <we-button type="primary" size="small" icon-name="search-o">小型按钮</we-button>
          <we-button type="primary" size="mini" icon-name="search-o">超小按钮</we-button>
        </div>
        <div style="margin-top:15px;">
          <we-button type="primary" size="large">大型按钮</we-button>
          <we-button type="primary">默认尺寸</we-button>
          <we-button type="primary" size="small">小型按钮</we-button>
          <we-button type="primary" size="mini">超小按钮</we-button>
        </div>
      </div>
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
  .first-title{
    font-size:22px;
    font-weight:normal;
    margin:30px 0px 15px 0px;
    color:#333333;
  }
  .module-main{
    border:1px solid #EEEEEE;
  }
  .module-main:hover{
    box-shadow:0 0 5px rgba(0,0,0,0.1);
  }
  .module-content{
    padding:15px;
  }
  .module-code{
    padding:12px;
    background-color: #f9f9f9;
    border-top:1px solid #EEEEEE;
  }
  .module-fold{
    padding:12px;
    text-align:center;
    cursor:pointer;
    background-color:#FFFFFF;
    border-top:1px solid #EEEEEE;
    color:#999999;
  }
  .module-fold:hover{
    background-color:#fcfcfc;
  }
</style>
