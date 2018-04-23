<template>
  <div>
    <div class="we-api-header">
      <div class="we-api-logo">
        <!--<img class="we-api-logo-img" src="../../../lib/static/images/weview_logo.png"/>-->
        <div class="we-api-logo-text">weview</div>
      </div>
      <ul class="we-api-nav">
        <li>
          <a>首页</a>
        </li>
        <li class="selected">
          <a>指南</a>
        </li>
        <li>
          <a>组件</a>
        </li>
      </ul>
    </div>
    <div class="we-api-main">
      <div class="we-api-menu">
        <h3 class="we-api-menu-level-one">开发指南</h3>
        <ul class="we-api-menu-list">
          <li>
            <a href="#" class="selected">安装</a>
          </li>
          <li>
            <a href="#">快速上手</a>
          </li>
        </ul>
        <h3 class="we-api-menu-level-one">组件</h3>
        <div class="we-api-menu-level-two">Basic</div>
        <ul class="we-api-menu-list">
          <li>
            <a href="#">Layout 布局</a>
          </li>
          <li>
            <a href="#">Container 布局容器</a>
          </li>
          <li>
            <a href="#">Color 色彩</a>
          </li>
        </ul>
        <div class="we-api-menu-level-two">Form</div>
        <ul class="we-api-menu-list">
          <li>
            <a href="#">Radio 单选框</a>
          </li>
          <li>
            <a href="#">Checkbox 多选框</a>
          </li>
          <li>
            <a href="#">Input 输入框</a>
          </li>
          <li>
            <a href="#">Select 输入框</a>
          </li>
          <li>
            <a href="#">Slider 滑块</a>
          </li>
          <li>
            <a href="#">Rate 评分</a>
          </li>
        </ul>
        <div class="we-api-menu-level-two">Notice</div>
        <ul class="we-api-menu-list">
          <li>
            <a href="#">Layer 弹层</a>
          </li>
          <li>
            <a href="#">Message 消息提示</a>
          </li>
          <li>
            <a href="#">Input 输入框</a>
          </li>
          <li>
            <a href="#">Select 输入框</a>
          </li>
          <li>
            <a href="#">Slider 滑块</a>
          </li>
          <li>
            <a href="#">Rate 评分</a>
          </li>
        </ul>
      </div>
      <div class="we-api-content">
        <div class="we-wordwrap" style="height:2000px;">
          <layer-frame></layer-frame>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LayerFrameTest from "../../../examples/test/LayerFrameTest";
  import LayerFrame from "../../layer/src/LayerFrame";

  export default {
    name: "ApiFrame",
    components: {LayerFrame, LayerFrameTest}
  }
</script>

<style scoped type="text/less">
</style>
