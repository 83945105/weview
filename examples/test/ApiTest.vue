<template>
  <div class="we-main">

    <we-header-doc :logo-src="logoSrc" title="weview">
      <we-header-doc-item label="指南"></we-header-doc-item>
      <we-header-doc-item label="组件" :value="true"></we-header-doc-item>
      <we-header-doc-item label="资源"></we-header-doc-item>
    </we-header-doc>

    <we-layout>

      <template slot="left">

        <we-left-doc-nav>
          <we-left-doc-nav label="组件">

            <we-left-doc-nav label="消息" :label-level="4" label-style="mini">
              <we-left-doc-nav label="Message" :label-level="3"></we-left-doc-nav>
              <we-left-doc-nav label="Alert" :label-level="3"></we-left-doc-nav>
              <we-left-doc-nav label="Confirm" :label-level="3"></we-left-doc-nav>
            </we-left-doc-nav>


          </we-left-doc-nav>
        </we-left-doc-nav>


        <!--<div class="we-menu-item">
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

        </div>-->
      </template>

      <template slot="right">

        <div>
          <we-button disabled>默认按钮</we-button>
          <we-button type="primary" disabled @click="disBtnClick">禁用按钮</we-button>
          <we-button type="primary" disabled>主要按钮</we-button>
          <we-button type="success" disabled>成功按钮</we-button>
          <we-button type="info" disabled>信息按钮</we-button>
          <we-button type="warning" disabled>警告按钮</we-button>
          <we-button type="danger" disabled>危险按钮</we-button>
        </div>

        <div style="margin-top:10px">
          <we-button disabled>默认按钮</we-button>
          <we-button type="primary" plain disabled @click="disBtnClick">禁用按钮</we-button>
          <we-button type="primary" plain disabled>主要按钮</we-button>
          <we-button type="success" plain disabled>成功按钮</we-button>
          <we-button type="info" plain disabled>信息按钮</we-button>
          <we-button type="warning" plain disabled>警告按钮</we-button>
          <we-button type="danger" plain disabled>危险按钮</we-button>
        </div>

        <div style="margin-top:10px">
          <we-button @click="messageVisible = !messageVisible">消息提示组件</we-button>
          <we-button @click="$message({
              message: '666',
              showClose: true
            })">默认消息
          </we-button>
          <we-button type="success" @click="$message.success({showClose:true})">成功消息</we-button>
          <we-button type="danger" @click="$message.close()">关闭指定消息</we-button>
          <we-button type="danger" @click="$message.closeAll()">关闭所有消息</we-button>
        </div>

        <we-message type="success" v-model="messageVisible" show-close html
                    message="<span style='color:red'>这是一条成功消息</span>"></we-message>

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

      </template>

    </we-layout>

  </div>
</template>

<script>
  const LogoSrc = require('../assets/weview_logo.png');
  export default {
    name: '',
    data() {
      return {
        isShow: false,
        isClose: false,
        messageVisible: false
      }
    },
    methods: {
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
