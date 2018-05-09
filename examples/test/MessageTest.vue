<template>
  <div>
    <div>
      <we-button type="primary" @click="$message.open('普通消息')">普通消息</we-button>
      <we-button type="primary" @click="$message.success('成功消息')">成功消息</we-button>
      <we-button type="primary" @click="$message.fail('失败消息')">失败消息</we-button>
      <we-button type="primary" @click="$message.error('错误消息')">错误消息</we-button>
      <we-button type="primary" @click="$message.info('提示消息')">提示消息</we-button>
      <we-button type="primary" @click="$message.warn('警告消息')">警告消息</we-button>
      <we-button type="primary" @click="$message.lock('锁定提示')">锁定提示</we-button>
      <we-button type="primary" @click="$message.unLock('解锁提示')">解锁提示</we-button>
    </div>
    <div style="margin-top: 20px">
      <we-button type="primary" @click="$message.success({
        message: '<div style=\'color: red\'>红色自定义内容</div>',
        html: true
      })">自定义内容
      </we-button>
      <we-button type="primary" @click="$message.open({
        message: '鼠标指针悬浮在我上面时,不会自动关闭',
        showClose: true,
        onClose:() => {
          $message.open('手动关闭')
        }
      })">手动关闭
      </we-button>
      <we-button type="primary" @click="$message.success({
        message: '我是一条不会自动关闭的消息',
        duration: 0,
        showClose: true
      })">不会自动关闭</we-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "message-test"
  }
</script>

<style scoped>

</style>
