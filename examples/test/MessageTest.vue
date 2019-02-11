<template>
  <div>
    <div class="page-title">Message消息提示</div>
    <div class="first-title">组件方式</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <we-message ref="message01" v-model="show01">打开消息01</we-message>
        <we-button @click="show01 = true" type="primary">打开消息01</we-button>
        <we-button @click="show01 = false">关闭消息01</we-button>
        <we-button @click="$refs.message01.destroy()" type="danger">销毁消息01</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-message ref="message02" v-model="show02">打开消息02</we-message>
        <we-button @click="show02 = true" type="primary">打开消息02</we-button>
        <we-button @click="show02 = false">关闭消息02</we-button>
        <we-button @click="$refs.message02.destroy()" type="danger">销毁消息02</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-message ref="message03" v-model="show03">打开消息03</we-message>
        <we-button @click="show03 = true" type="primary">打开消息03</we-button>
        <we-button @click="show03 = false">关闭消息03</we-button>
        <we-button @click="$refs.message03.destroy()" type="danger">销毁消息03</we-button>
      </div>
    </div>

    <div class="first-title">服务方式</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <we-button plain type="primary" @click="$message.open('普通消息哈哈哈哈哈哈哈哈哈哈哈哈')">普通消息</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button plain type="primary" @click="$message.success('成功消息哈哈哈哈哈哈哈哈哈哈哈哈')">成功消息</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button plain type="primary" @click="$message.fail('失败消息哈哈哈哈哈哈哈哈哈哈哈哈')">失败消息</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button plain type="primary" @click="$message.error('错误消息哈哈哈哈哈哈哈哈哈哈哈哈')">错误消息</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button plain type="primary" @click="$message.info('提示消息哈哈哈哈哈哈哈哈哈哈哈哈')">提示消息</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button plain type="primary" @click="$message.warn('警告消息哈哈哈哈哈哈哈哈哈哈哈哈')">警告消息</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button plain type="primary" @click="$message.lock('锁定提示哈哈哈哈哈哈哈哈哈哈哈哈')">锁定提示</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button plain type="primary" @click="$message.unLock('解锁提示哈哈哈哈哈哈哈哈哈哈哈哈')">解锁提示</we-button>
      </div>
    </div>

    <div class="first-title">自定义</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <we-button plain
                   type="primary"
                   @click="$message.success({
                      content: '<div style=\'color: red\'>红色自定义内容</div>',
                      html: true
                    })">自定义内容
        </we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button plain
                   type="primary"
                   @click="$message.open({
                    content: '鼠标指针悬浮在我上面时,不会自动关闭',
                    showClose: true,
                    onClose:() => {
                      $message.open('手动关闭')
                    }
                  })">手动关闭
        </we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button plain
                   type="primary"
                   @click="$message.success({
                    content: '我是一条不会自动关闭的消息',
                    duration: 0,
                    showClose: true
                  })">不会自动关闭
        </we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button plain type="primary" @click="instance = $message.success('我会返回一个实例')">实例消息</we-button>
        <we-button plain type="danger" @click="instance.close()">关闭实例</we-button>
        <we-button plain type="danger" @click="$message.close(instance.id)">关闭ID</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button plain type="danger" @click="$message.closeAll()">关闭所有</we-button>
      </div>
    </div>

    <div style="margin-top: 100px; height: 10px"></div>

  </div>
</template>

<script>
  export default {
    name: "message-test",

    data() {
      return {
        instance: undefined,
        isShow: false,
        show01: false,
        show02: false,
        show03: false
      };
    },

    created() {
    },

    methods: {
      enter: function (el, done) {

        done();
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    background-color: #ff0000;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
    background-color: #cccccc;
  }

  .page-title {
    font-size: 32px;
    font-weight: normal;
    margin: 30px 0px 15px 0px;
    color: #333333;
  }

  .first-title {
    font-size: 22px;
    font-weight: normal;
    margin: 30px 0px 15px 0px;
    color: #333333;
  }

  .module-main {
    border: 1px solid #EEEEEE;
  }

  .module-main:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .module-content {
    padding: 15px;
  }

  .module-code {
    padding: 12px;
    background-color: #f9f9f9;
    border-top: 1px solid #EEEEEE;
  }

  .module-fold {
    padding: 12px;
    text-align: center;
    cursor: pointer;
    background-color: #FFFFFF;
    border-top: 1px solid #EEEEEE;
    color: #999999;
  }

  .module-fold:hover {
    background-color: #fcfcfc;
  }

  .popover-layout-main {
    width: 338px;
  }

  .popover-layout-clear {
    clear: both;
  }

  .popover-layout .popover-btn {
    width: 60px;
    margin: 5px 3px;
  }

  .popover-layout.is-left {
    float: left;
    width: 60px;
  }

  .popover-layout.is-left .popover-btn {
    margin: 5px;
  }

  .popover-layout.is-right {
    float: right;
    width: 60px;
  }

  .popover-layout.is-right .popover-btn {
    margin: 5px;
  }
</style>
