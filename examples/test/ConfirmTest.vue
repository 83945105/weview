<template>
  <div>
    <we-button @click="$confirm('普通的询问框')">普通的询问框</we-button>
    <we-button @click="$confirm({message: '......',clickConfirm(e, close) {close()}})">点击确认按钮关闭</we-button>
    <we-button @click="$confirm({message: '......', drag: true, showMask: false, title: '按住我可以拖动'})">无遮罩可拖动</we-button>
    <we-button @click="renderConfirm">使用Render函数创建多选按钮</we-button>
  </div>
</template>

<script>
  export default {
    name: "confirm-test",

    methods: {
      renderConfirm() {
        this.$confirm({
          message: '请选择一个',
          footerRender(h) {
            return h('div', [
              h('we-button', {
                props: {
                  type: 'danger'
                }
              }, '选我'),
              h('we-button', {
                props: {
                  type: 'primary'
                },
                style: {
                  margin: '0 3px 0 3px'
                }
              }, '选我'),
              h('we-button', '选我')
            ]);
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>
