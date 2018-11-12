<template>
  <div>
    <div class="page-title">Alert警告框</div>
    <div class="first-title">基本示例</div>
    <div class="module-main">
      <div class="module-content">
        <we-button @click="$alert.open('默认')">默认</we-button>
        <we-button @click="$alert.success('成功')">成功</we-button>
        <we-button @click="$alert.fail({content: '失败'})">失败</we-button>
        <we-button @click="$alert.error({content: '错误'})">错误</we-button>
        <we-button @click="$alert.warn({content: '警告'})">警告</we-button>
        <we-button @click="$alert.info({content: '提示'})">提示</we-button>
        <we-button @click="$alert.lock({content: '锁定'})">锁定</we-button>
        <we-button @click="$alert.unLock({content: '解锁'})">解锁</we-button>
      </div>
    </div>

    <div class="first-title">按钮属性</div>
    <div class="module-main">
      <div class="module-content">
        <we-button @click="$alert({content: '待加载内容', confirmButtonOptions: {loading: true}})">加载中</we-button>
        <we-button @click="$alert({content: '改变按钮主题', confirmButtonOptions: {type: 'danger'}})">按钮主题</we-button>
        <we-button @click="$alert({content: '改变按钮文本', confirmButtonText: '知道了'})">按钮文字</we-button>
        <we-button @click="$alert({content: '文字类型按钮', confirmButtonOptions: {type: 'text'}})">文字按钮</we-button>
        <we-button @click="$alert({content: 'small尺寸按钮', confirmButtonOptions: {size: 'small'}})">按钮尺寸</we-button>
        <we-button @click="$alert({content: '点击按钮触发回调', onClickConfirmButton() {$alert('按钮关闭了')}})">按钮关闭</we-button>
        <we-button @click="$alert({content: '取消点击按钮关闭', onClickConfirmButton() {return false}})">阻止关闭</we-button>
      </div>
    </div>

    <div class="first-title">其它用法</div>
    <div class="module-main">
      <div class="module-content">
        <we-button @click="$alert('<div style=\'color: red;font-size: 30px\'>自定义样式</div>')">自定义样式</we-button>
        <we-button @click="$alert({content:'自定义标题',title:'我是一个标题'})">自定义标题</we-button>
        <we-button @click="$alert({content:'喵喵喵???', iconName: 'lock-o',confirmButtonText: '???'})">自定义图标和按钮文本
        </we-button>
        <we-button @click="$alert({content: '........', showHeader: false})">木有头部</we-button>
        <we-button @click="$alert({content: '........', showHeader: false, showClose: false})">木有头部和关闭按钮</we-button>
        <we-button @click="$alert({content: '参考layer', drag: true})">拖动</we-button>
      </div>
    </div>

    <div class="first-title">Render</div>
    <div class="module-main">
      <div class="module-content">
        <we-button @click="renderAlertHeader">头部使用Render函数自定义</we-button>
        <we-button @click="renderAlert">头部、内容、文本使用Render函数自定义</we-button>
      </div>
    </div>

    <div style="margin-top: 100px; height: 10px"></div>
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
      },
      renderAlertHeader() {
        this.$alert({
          headerRender(h) {
            return h('div', {
              style: {
                marginTop: '10px'
              }
            }, '我是一个自定义标题');
          }
        });
      }
    }
  }
</script>

<style scoped>
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
