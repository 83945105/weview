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
      <we-button plain disabled >默认按钮</we-button>
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
      <we-button type="success" @click="$message.success({message: '成功了233333333333',showClose:true,duration:0})">成功消息</we-button>
      <we-button type="danger" @click="$message.fail({message: '失败了',showClose:true})">失败消息</we-button>
      <we-button type="danger" @click="$message.error({message: '错误',showClose:true})">错误消息</we-button>
      <we-button type="info" @click="$message.info({message: '友情提示',showClose:true})">提示消息</we-button>
      <we-button type="warning" @click="$message.warn({message: '警告！！！',showClose:true})">警告消息</we-button>
      <we-button type="danger" @click="$message.close()">关闭指定消息</we-button>
      <we-button type="danger" @click="$message.closeAll()">关闭所有消息</we-button>
    </div>

    <div>
      <i class="we-icon we-success-circle-o we-icon-success we-icon-large"></i>
      <i class="we-icon we-error-circle-o we-icon-danger we-icon-large"></i>
      <i class="we-icon we-info-circle-o we-icon-info we-icon-large"></i>
      <i class="we-icon we-warning-circle-o we-icon-warning we-icon-large"></i>
      <i class="we-icon we-help-circle-o we-icon-primary we-icon-large"></i>
    </div>
    <div>
      <i class="we-icon we-success-circle we-icon-success we-icon-large"></i>
      <i class="we-icon we-error-circle we-icon-danger we-icon-large"></i>
      <i class="we-icon we-info-circle we-icon-info we-icon-large"></i>
      <i class="we-icon we-warning-circle we-icon-warning we-icon-large"></i>
      <i class="we-icon we-help-circle we-icon-primary we-icon-large"></i>
    </div>
    <div>
      <i class="we-icon we-smiling-face-circle we-icon-primary we-icon-large we-icon-loading"></i>
      <i class="we-icon we-angle-double-down we-icon-default we-icon-rotate-90"></i>
      <i class="we-icon we-angle-double-down we-icon-default we-icon-rotate-180"></i>
      <i class="we-icon we-angle-double-down we-icon-default we-icon-rotate-270"></i>
    </div>
    <we-message type="success" v-model="messageVisible" show-close html
                message="<span style='color:red'>这是一条成功消息</span>"></we-message>

    <we-layer></we-layer>

    <div class="we-common-e-resize resize-div">we-common-e-resize</div>
    <div class="we-common-s-resize resize-div">we-common-s-resize</div>
    <div class="we-common-ne-resize resize-div">we-common-ne-resize</div>
    <div class="we-common-nw-resize resize-div">we-common-nw-resize</div>
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
          messageVisible: false,
          messageTotal:0,
          messageScroll:0,
          isDrag:false,
          mouseDownX:0,
          mouseDownY:0,
          mouseMoveX:0,
          mouseMoveY:0,
          initX:0,
          initY:0,
          areaHeight:"400px",
          areaWidth:"700px",
          frameHeight:100,
          contentHeight:100
        }
      },
      methods: {
        disBtnClick() {
          alert(`禁用按钮被点击`);
        },
      },
      computed: {
        logoSrc() {
          return LogoSrc;
        }
      }
    }

  </script>


<style lang="less" type="text/less">
  .adc-enter-active, .adc-leave-active {
    transition: all 2s ease-out;
  }
  .adc-enter, .adc-leave-to {
    opacity: 0;
  }

  .resize-div{
    height:40px;
    line-height:40px;
    width:200px;
    margin-top:15px;
    background-color:#f9f9f9;
  }
</style>
