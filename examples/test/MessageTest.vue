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
