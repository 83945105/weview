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
            <we-button>默认按钮</we-button>
            <we-button type="primary" disabled @click="disBtnClick">禁用按钮</we-button>
            <we-button type="primary">主要按钮</we-button>
            <we-button type="success">成功按钮</we-button>
            <we-button type="info">信息按钮</we-button>
            <we-button type="warning">警告按钮</we-button>
            <we-button type="danger">危险按钮</we-button>
          </div>

          <div style="margin-top:10px">
            <we-button>默认按钮</we-button>
            <we-button type="primary" plain disabled @click="disBtnClick">禁用按钮</we-button>
            <we-button type="primary" plain>主要按钮</we-button>
            <we-button type="success" plain>成功按钮</we-button>
            <we-button type="info" plain>信息按钮</we-button>
            <we-button type="warning" plain>警告按钮</we-button>
            <we-button type="danger" plain @click="messageOpen()">危险按钮</we-button>
          </div>

          <div style="margin-top:10px">
            <we-button @click="messageVisible = !messageVisible">消息提示组件</we-button>
            <we-button @click="$message({
              message: '666',
              showClose: true
            })">默认消息</we-button>
            <we-button type="success" @click="$message.success({showClose:true})">成功消息</we-button>
            <we-button type="danger" @click="$message.close()">关闭指定消息</we-button>
            <we-button type="danger" @click="$message.closeAll()">关闭所有消息</we-button>
          </div>
        </div>


        <we-message type="success" v-model="messageVisible" show-close html message="<span style='color:red'>这是一条成功消息</span>"></we-message>
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
            isClose:false,
            messageVisible: false
          }
        },
        methods:{
          messageOpen(){
            let msg=document.createElement("div");
            msg.innerHTML="<div class='we-message we-message-tac we-message-animation we-message-animation-open'>信息提示</div>";
            document.body.appendChild(msg);
          },
          disBtnClick() {
            alert(`禁用按钮被点击`);
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
