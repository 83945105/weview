<template>
  <div class="we-main">
    <div class="we-header">
      <div class="we-header-logo">
        <img :src="logoSrc" class="we-header-logo-img" />
        <div class="we-header-logo-text">weview</div>
      </div>
      <div class="we-nav">
        <ul>
          <li class="selected">
            <a href="#">指南</a>
          </li>
          <li>
            <a href="#">组件</a>
          </li>
          <li>
            <a href="#">资源</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="we-layout-main">
      <div class="we-layout-left">
        <div class="we-menu">
          <div class="we-menu-group">
            <h2 class="we-menu-group-title">更新日志</h2>
          </div>

          <div class="we-menu-group">
            <h2 class="we-menu-group-title selected">开发指南</h2>
          </div>

          <div class="we-menu-group">
            <h2 class="we-menu-group-title spacing">组件</h2>
            <div class="we-menu-item">
              <h3 class="we-menu-item-title">Basic</h3>
              <ul class="we-menu-item-list">
                <li>
                  <a href="#" class="selected">Icon 图标</a>
                </li>
                <li>
                  <a href="#">Button 按钮</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="we-layout-right">
        <div class="we-layout-right-content">
          <div style="height:2000px">right</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    const LogoSrc = require('../assets/weview_logo.png');
    export default {
        name: '',

        computed: {
          logoSrc() {
            return LogoSrc;
          }
        }
    }
</script>

<style lang="less" type="text/less">
  @import "../../web/packages/theme-chalk/index";
</style>
