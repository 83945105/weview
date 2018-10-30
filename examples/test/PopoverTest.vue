<template>
  <div>
    <div class="page-title">Popover气泡卡片</div>
    <div class="first-title">主题</div>
    <div class="module-main">
      <div class="module-content">
        <we-popover title="默认主题" content="这是一个气泡卡片">
          <we-button>默认</we-button>
        </we-popover>
        <we-popover effect="dark" title="黑色主题" content="这是一个气泡卡片">
          <we-button>Dark</we-button>
        </we-popover>
      </div>
    </div>

    <div class="first-title">类型</div>
    <div class="module-main">
      <div class="module-content">
        <we-popover title="警告" type="alert"
                    :content="alertConfirmButtonOptions.loading ? '通知中...通知完成后将自动关闭气泡' : '请通知管理员'"
                    confirm-button-text="收到"
                    :confirm-button-options="alertConfirmButtonOptions"
                    @click-confirm-button="handleClickAlertConfirmButton">
          <we-button>警告</we-button>
        </we-popover>
        <we-popover title="请确认" type="confirm"
                    confirm-button-text="删了吧"
                    :cancel-button-text="confirmConfirmButtonOptions.loading ? '你没有想的机会了' : '我再想想'"
                    :cancel-button-options="confirmCancelButtonOptions"
                    :confirm-button-options="confirmConfirmButtonOptions"
                    @click-cancel-button="handleClickConfirmCancelButton"
                    @click-confirm-button="handleClickConfirmConfirmButton">

          <template slot="content">
            <template v-if="confirmConfirmButtonOptions.loading">
              <span style="color: red">删除中...</span>删除完成后将自动关闭气泡
            </template>
            <template v-else>
              您确定要<span style="color: red">删除</span>该信息吗？
            </template>
          </template>

          <we-button>确认</we-button>

        </we-popover>
      </div>
    </div>
  </div>
</template>

<script>
  import weButton from "../../packages/button/src/Button.vue";
  import weAnimation from "../../packages/animation/src/Animation.vue";

  export default {
    name: "popover-test",

    components: {weButton, weAnimation},

    data() {
      return {
        alertConfirmButtonOptions: {
          loading: false
        },
        confirmCancelButtonOptions: {
          disabled: false
        },
        confirmConfirmButtonOptions: {
          loading: false
        }
      };
    },

    methods: {
      handleClickAlertConfirmButton(e, vm) {
        this.alertConfirmButtonOptions.loading = true;
        setTimeout(() => {
          vm.close();
          this.alertConfirmButtonOptions.loading = false;
        }, 3000);
      },
      handleClickConfirmConfirmButton(e, vm) {
        this.confirmConfirmButtonOptions.loading = true;
        this.confirmCancelButtonOptions.disabled = true;
        setTimeout(() => {
          vm.close();
          this.confirmConfirmButtonOptions.loading = false;
          this.confirmCancelButtonOptions.disabled = false;
        }, 3000);
      },
      handleClickConfirmCancelButton(e, vm) {
        vm.close();
      }
    },

    created() {
    },

    mounted() {
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
