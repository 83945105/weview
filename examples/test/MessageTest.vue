<template>
  <div>
    <div>
      <we-button plain type="primary" @click="$message.open('普通消息哈哈哈哈哈哈哈哈哈哈哈哈')">普通消息</we-button>
      <we-button plain type="primary" @click="$message.success('成功消息哈哈哈哈哈哈哈哈哈哈哈哈')">成功消息</we-button>
      <we-button plain type="primary" @click="$message.fail('失败消息哈哈哈哈哈哈哈哈哈哈哈哈')">失败消息</we-button>
      <we-button plain type="primary" @click="$message.error('错误消息哈哈哈哈哈哈哈哈哈哈哈哈')">错误消息</we-button>
      <we-button plain type="primary" @click="$message.info('提示消息哈哈哈哈哈哈哈哈哈哈哈哈')">提示消息</we-button>
      <we-button plain type="primary" @click="$message.warn('警告消息哈哈哈哈哈哈哈哈哈哈哈哈')">警告消息</we-button>
      <we-button plain type="primary" @click="$message.lock('锁定提示哈哈哈哈哈哈哈哈哈哈哈哈')">锁定提示</we-button>
      <we-button plain type="primary" @click="$message.unLock('解锁提示哈哈哈哈哈哈哈哈哈哈哈哈')">解锁提示</we-button>
    </div>
    <div style="margin-top: 20px">
      <we-button plain type="primary" @click="$message.success({
        message: '<div style=\'color: red\'>红色自定义内容</div>',
        html: true
      })">自定义内容
      </we-button>
      <we-button plain type="primary" @click="$message.open({
        message: '鼠标指针悬浮在我上面时,不会自动关闭',
        showClose: true,
        onClose:() => {
          $message.open('手动关闭')
        }
      })">手动关闭
      </we-button>
      <we-button plain type="primary" @click="$message.success({
        message: '我是一条不会自动关闭的消息',
        duration: 0,
        showClose: true
      })">不会自动关闭
      </we-button>
      <we-button plain type="primary" @click="instance = $message.success('我会返回一个实例')">实例消息</we-button>
      <we-button plain type="danger" @click="instance.close()">关闭实例</we-button>
      <we-button plain type="danger" @click="$message.close(instance.id)">关闭ID</we-button>
      <we-button plain type="danger" @click="$message.closeAll()">关闭所有</we-button>
    </div>

    <we-button type="info" @click="isShow = !isShow">动画测试</we-button>
    <transition name="fade" v-enter="enter">
      <p v-if="isShow">hello</p>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "message-test",

    data() {
      return {
        instance: undefined,
        isShow:false
      };
    },

    created() {
    },

    methods:{
      enter: function (el, done) {

        done();
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    background-color:#ff0000;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    background-color: #cccccc;
  }
</style>
