<template>
  <div>
    <div class="page-title">Confirm确认框</div>
    <div class="first-title">基本示例</div>
    <div class="module-main">
      <div class="module-content">
        <we-button @click="$confirm('您确定要这么做吗？')">默认</we-button>
        <we-button @click="clickConfirmToClose">点击确定关闭
        </we-button>
        <we-button @click="$confirm({
          content: '点击取消将不会关闭',
          onClickCancelButton(e, vm) {return false}
        })">阻止点击取消关闭
        </we-button>
      </div>
    </div>

    <div class="first-title">其它用法</div>
    <div class="module-main">
      <div class="module-content">
        <we-button @click="$confirm({
          content: '......',
          drag: true,
          showMask: false,
          title: '按住我可以拖动'
        })">无遮罩可拖动
        </we-button>
      </div>
    </div>

    <div class="first-title">JS控制</div>
    <div class="module-main">
      <div class="module-content">
        <we-button @click="$confirm({
          content: '你可以使用键盘的Enter确认,Esc关闭',
          drag: true,
          showMask: true
        })">弹出一个确认框
        </we-button>
      </div>
    </div>

    <div class="first-title">Render</div>
    <div class="module-main">
      <div class="module-content">
        <we-button @click="renderConfirm">使用Render函数创建多选按钮</we-button>
        <we-button @click="renderContent">使用Render函数自定义内容</we-button>
      </div>
    </div>
    <div style="margin-top: 100px; height: 10px"></div>
  </div>
</template>

<script>
  export default {
    name: "confirm-test",

    data() {
      return {
        confirmLoading: false
      };
    },

    methods: {
      renderConfirm() {
        this.$confirm({
          message: '请选择一个',
          footerRender(h) {
            return h('div', {
              style: {
                textAlign: 'right',
                padding: '3px'
              }
            }, [
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
      },
      renderContent() {
        this.$confirm({
          title: '确定要驳回吗？',
          render(h) {
            return h('div', 123);
          },
          clickConfirm: (e, close) => {

          }
        });
      },
      clickConfirmToClose() {
        this.$confirm({
          content: '您确定要这么做吗？',
          confirmButtonOptions: {loading: this.confirmLoading},
          onClickConfirmButton(e, vm) {
            this.confirmLoading = true;
            setTimeout(() => {
              this.confirmLoading = false;
              vm.close();
            }, 3000);
          }
        })
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
