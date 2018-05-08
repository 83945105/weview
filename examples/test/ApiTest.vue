<template>
  <div>

    <div>
      <we-button disabled>默认按钮</we-button>
      <we-button type="primary" disabled @click="disBtnClick">禁用按钮</we-button>
      <we-button type="primary">主要按钮</we-button>
      <we-button type="success">成功按钮</we-button>
      <we-button type="info">信息按钮</we-button>
      <we-button type="warning">警告按钮</we-button>
      <we-button type="danger">危险按钮</we-button>
    </div>

    <div style="margin-top:10px">
      <we-button disabled>默认按钮</we-button>
      <we-button type="primary" plain disabled @click="disBtnClick">禁用按钮</we-button>
      <we-button type="primary" plain>主要按钮</we-button>
      <we-button type="success" plain>成功按钮</we-button>
      <we-button type="info" plain>信息按钮</we-button>
      <we-button type="warning" plain>警告按钮</we-button>
      <we-button type="danger" plain>危险按钮</we-button>
    </div>

    <div style="margin-top:10px">
      <we-button @click="messageVisible = !messageVisible">消息提示组件</we-button>
      <we-button @click="$message({
              message: '666',
              showClose: true
            })">默认消息
      </we-button>
      <we-button type="info" @click="$message.open({message: '默认的'})">默认消息</we-button>
      <we-button type="success" @click="$message.success({message: '成功了',showClose:true,duration:0})">成功消息</we-button>
      <we-button type="danger" @click="$message.fail({message: '失败了',showClose:true})">失败消息</we-button>
      <we-button type="danger" @click="$message.error({message: '错误',showClose:true})">错误消息</we-button>
      <we-button type="info" @click="$message.info({message: '友情提示',showClose:true})">提示消息</we-button>
      <we-button type="warning" @click="$message.warn({message: '警告！！！',showClose:true})">警告消息</we-button>
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
