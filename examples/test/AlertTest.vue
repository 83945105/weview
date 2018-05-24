<template>
  <div>
    <div>
      <we-button @click="$alert('普通的警告框')">普通的警告框</we-button>
      <we-button @click="$alert('<div style=\'color: red;font-size: 30px\'>自定义样式</div>')">自定义样式</we-button>
      <we-button @click="$alert({message:'自定义标题',title:'我是一个标题'})">自定义标题</we-button>
      <we-button @click="$alert({message:'喵喵喵', iconName: 'lock-o',confirmButtonText: '???'})">自定义图标和按钮文本</we-button>
      <we-button @click="$alert({message: '........', showHeader: false})">木有头部</we-button>
      <we-button @click="$alert({message: '........', showHeader: false, showClose: false})">木有头部和关闭按钮</we-button>
    </div>
    <div style="margin-top: 10px">
      <we-button @click="renderAlert">头部、内容、文本使用Render函数自定义</we-button>
    </div>
    <div style="margin-top: 10px">
      <we-button @click="$alert.open('默认')">默认</we-button>
      <we-button @click="$alert.success('成功')">成功</we-button>
      <we-button @click="$alert.fail({message: '失败'})">失败</we-button>
      <we-button @click="$alert.error({message: '错误'})">错误</we-button>
      <we-button @click="$alert.warn({message: '警告'})">警告</we-button>
      <we-button @click="$alert.info({message: '提示'})">提示</we-button>
      <we-button @click="$alert.lock({message: '锁定'})">锁定</we-button>
      <we-button @click="$alert.unLock({message: '解锁'})">解锁</we-button>
    </div>
  </div>
</template>

<script>

  export default {
    name: "alert-test",

    methods: {
      renderAlert() {
        let instance = this.$alert({
          headerRender(h) {
            return h('we-button', '我来组成头部');
          },
          render(h) {
            return h('we-button', {
              props: {
                type: 'primary'
              },
              style: {
                margin: '5px 5px'
              }
            }, '我来组成身体');
          },
          footerRender: (h) => {
            return h('we-button', {
              on: {
                click: () => {
                  this.$layer.close(instance);
                }
              }
            }, '我来组成底部');
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
