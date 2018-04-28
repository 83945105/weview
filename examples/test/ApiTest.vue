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

          <div class="we-menu-item">
            <div class="we-menu-item">
              <h3 class="we-menu-item-title title-2 link">一級</h3>
            </div>

            <div class="we-menu-item">
              <h3 class="we-menu-item-title title-2 link selected">一級</h3>
            </div>

            <div class="we-menu-item spacing">
              <h3 class="we-menu-item-title title-2"><a>二級</a></h3>

              <div class="we-menu-item spacing-mini">
                <h3 class="we-menu-item-title title-5 mini-title">二級</h3>
                <div class="we-menu-item">
                  <div class="we-menu-item">
                    <h3 class="we-menu-item-title title-4 link">三級</h3>
                  </div>
                  <div class="we-menu-item">
                    <h3 class="we-menu-item-title title-4 link">三級</h3>
                  </div>
                  <div class="we-menu-item">
                    <h3 class="we-menu-item-title title-4 link">三級</h3>
                  </div>
                </div>
              </div>

            </div>

          </div>

      </div>
      <div class="we-layout-right">
        <div class="we-layout-right-content">
          <input type="button" class="we-button we-button-default" value="默认按钮" />
          <input type="button" class="we-button we-button-primary" value="主要按钮" />
          <input type="button" class="we-button we-button-success" value="成功按钮" />
          <input type="button" class="we-button we-button-info" value="成功按钮" />
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

    // less = {
    //   globalVars:{
    //     var1: '"we-web-"'
    //   }
    // };
</script>
<style lang="less" type="text/less">
  @import "../../web/packages/theme-chalk/index";
</style>
