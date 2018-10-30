<template>
  <div>
    <div class="page-title">Loading加载特效</div>
    <div class="first-title">组件方式</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <div style="border: 1px solid red; width: 200px; height: 200px; float:left;">
          <we-loading :value="true"></we-loading>
        </div>

        <div style="border: 1px solid red; width: 200px; height: 200px; float:left;margin-left: 10px;">
          <we-loading :value="true" text="加载中"></we-loading>
        </div>

        <div style="border: 1px solid red; width: 200px; height: 200px; float:left;margin-left: 10px;">
          <we-loading :value="true">
            <we-icon slot="logo" name="home"></we-icon>
          </we-loading>
        </div>

      </div>
    </div>

    <div class="first-title">服务方式</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <we-button @click="() => {
          loading01 = this.$loading({
            target: '#loading01'
          })
        }">开启loading01
        </we-button>
        <we-button @click="() => {
          loading01.close();
        }">关闭loading01
        </we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button @click="() => {
          loading02 = this.$loading({
            target: '#loading02',
            text: '玩命加载中'
          })
        }">开启loading02
        </we-button>
        <we-button @click="() => {
          loading02.close();
        }">关闭loading02
        </we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button @click="() => {
          loading03 = this.$loading({
            target: '#loading03',
            logoRender(h, props) {
              return h('we-icon', {
                props: {
                  name: 'home'
                }
              });
            }
          })
        }">开启loading03
        </we-button>
        <we-button @click="() => {
          loading03.close();
        }">关闭loading03
        </we-button>
      </div>
    </div>

    <div class="module-main" style="margin-top: 5px">
      <div class="module-content" style="overflow: hidden">
        <div id="loading01" style="border: 1px solid red; width: 200px; height: 200px; float:left;">
          <h1 style="display: table-cell;vertical-align: middle;height: 200px; width: 200px; text-align: center">
            loading01</h1>
        </div>

        <div id="loading02" style="border: 1px solid red; width: 200px; height: 200px; float:left;margin-left: 10px;">
          <h1 style="display: table-cell;vertical-align: middle;height: 200px; width: 200px; text-align: center">
            loading02</h1>
        </div>

        <div id="loading03" style="border: 1px solid red; width: 200px; height: 200px; float:left;margin-left: 10px;">
          <h1 style="display: table-cell;vertical-align: middle;height: 200px; width: 200px; text-align: center">
            loading03</h1>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loading-test",

    data() {
      return {
        value01: false,
        value02: false,
        value03: false,
        value04: false,
        value05: false,
        value06: false,

        loading01: undefined,
        loading02: undefined,
        loading03: undefined,
        loading04: undefined,
        loading05: undefined,
        loading06: undefined,
      };
    },

    methods: {},

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
