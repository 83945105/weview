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
          <div>
            <input type="button" class="we-button we-button-default" value="默认按钮" />
            <input type="button" class="we-button we-button-primary" value="主要按钮" />
            <input type="button" class="we-button we-button-success" value="成功按钮" />
            <input type="button" class="we-button we-button-info" value="信息按钮" />
            <input type="button" class="we-button we-button-warning" value="警告按钮" />
            <input type="button" class="we-button we-button-danger" value="危险按钮" />
          </div>

          <div style="margin-top:10px">
            <input type="button" class="we-button we-button-default is-plain" value="默认按钮" />
            <input type="button" class="we-button we-button-primary is-plain" value="主要按钮" />
            <input type="button" class="we-button we-button-success is-plain" value="成功按钮" />
            <input type="button" class="we-button we-button-info is-plain" value="信息按钮" />
            <input type="button" class="we-button we-button-warning is-plain" value="警告按钮" />
            <input type="button" class="we-button we-button-danger is-plain" @click="messageOpen()" value="危险按钮" />
          </div>
        </div>

        <div class='we-message we-message-bg we-message-animation we-message-animation-open'>
          <i class="we-icon we-chenggong we-message-icon we-message-icon-success"></i>
          <div class="we-message-text">信息提示</div>
          <i class="we-icon we-shanchu we-message-button-close"></i>
        </div>

        <!--<div class="we-layer-mask-bg"></div>-->
        <!--<div class="we-layer-prompt">-->
          <!--<div class="we-layer-prompt-top">-->
            <!--<div class="we-layer-prompt-top-title">layer-title</div>-->
            <!--<i class="we-icon we-shanchu we-layer-prompt-top-close"></i>-->
          <!--</div>-->
          <!--<div class="we-layer-prompt-content">-->
<!--范德萨-->
          <!--</div>-->
          <!--<div class="we-layer-prompt-bottom">-->
            <!--<input type="button" class="we-button we-button-primary" value="确定" />-->
            <!--<input type="button" class="we-button we-button-default" value="取消" />-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
    const LogoSrc = require('../assets/weview_logo.png');
    export default {
        name: '',
        data(){
          return{
            isShow:false,
            isClose:false
          }
        },
        methods:{
          messageOpen(){
            let msg=document.createElement("div");
            msg.innerHTML="<div class='we-message we-message-tac we-message-animation we-message-animation-open'>信息提示</div>";
            document.body.appendChild(msg);
          }
        },
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
