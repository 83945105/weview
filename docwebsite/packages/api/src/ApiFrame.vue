<template>
  <div>
    <web-api-doc-head-menu>
      <web-api-doc-head-item :value="true"></web-api-doc-head-item>
      <web-api-doc-head-item></web-api-doc-head-item>
      <web-api-doc-head-item></web-api-doc-head-item>
    </web-api-doc-head-menu>
    <div class="we-api-main">
      <web-api-doc-left-menu>
        <web-api-doc-left-group-one>
          <web-api-doc-left-item :value="true"></web-api-doc-left-item>
        </web-api-doc-left-group-one>
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
      </web-api-doc-left-menu>
      <div class="we-api-content">
        <div class="we-wordwrap" style="height:2000px;">
          469464646
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import WebApiDocHeadMenu from "../../webapidoc/head/src/Menu";
  import WebApiDocHeadItem from "../../webapidoc/head/src/Item";
  import WebApiDocLeftMenu from "../../webapidoc/left/src/Menu";
  import WebApiDocLeftGroupOne from "../../webapidoc/left/src/GroupOne";
  import WebApiDocLeftItem from "../../webapidoc/left/src/Item";

  export default {
    components: {
      WebApiDocLeftItem,
      WebApiDocLeftGroupOne,
      WebApiDocLeftMenu,
      WebApiDocHeadItem,
      WebApiDocHeadMenu
    },
    name: "ApiFrame"
  }
</script>

<style lang="less" type="text/less">
  @import "../../../../docwebsite/packages/theme-chalk/api.less";
</style>
