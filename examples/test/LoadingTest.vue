<template>
  <div>

    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <we-button @click="$loading.closeAll()">关闭全部</we-button>
        <we-button @click="handleOpenFullScreen">开启全屏3秒loading</we-button>
      </div>
    </div>

    <div class="page-title">Loading加载特效</div>
    <div class="first-title">组件方式</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <we-button @click="$refs.loading01.close()">关闭loading01</we-button>
        <we-button @click="$refs.loading01.open()" type="primary">开启loading01</we-button>
        <we-button @click="$refs.loading01.destroy()" type="danger">销毁loading01</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button @click="$refs.loading02.close()">关闭loading02</we-button>
        <we-button @click="$refs.loading02.open()" type="primary">开启loading02</we-button>
        <we-button @click="$refs.loading02.destroy()" type="danger">销毁loading02</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button @click="$refs.loading03.close()">关闭loading03</we-button>
        <we-button @click="$refs.loading03.open()" type="primary">开启loading03</we-button>
        <we-button @click="$refs.loading03.destroy()" type="danger">销毁loading03</we-button>
      </div>
    </div>
    <div class="module-main" style="margin-top: 5px">
      <div class="module-content" style="overflow: hidden">
        <div style="border: 1px solid red; width: 200px; height: 200px; float:left;">
          <h1 style="display: table-cell;vertical-align: middle;height: 200px; width: 200px; text-align: center">
            loading01</h1>
          <we-loading ref="loading01" :value="true"></we-loading>
        </div>

        <div style="border: 1px solid red; width: 200px; height: 200px; float:left;margin-left: 10px;">
          <we-loading ref="loading02" :value="false" text="加载中"></we-loading>
          <h1 style="display: table-cell;vertical-align: middle;height: 200px; width: 200px; text-align: center">
            loading02</h1>
        </div>

        <div style="border: 1px solid red; width: 200px; height: 200px; float:left;margin-left: 10px;">
          <we-loading ref="loading03" :value="true">
            <we-icon slot="logo" name="home"></we-icon>
          </we-loading>
          <h1 style="display: table-cell;vertical-align: middle;height: 200px; width: 200px; text-align: center">
            loading03</h1>
        </div>

      </div>
    </div>

    <div class="first-title">服务方式</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <we-button type="primary" @click="() => {
          loading04 = this.$loading({
            target: '#loading04'
          })
        }">开启loading04
        </we-button>
        <we-button @click="() => {
          loading04.close();
        }">关闭loading04
        </we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button type="primary" @click="() => {
          loading05 = this.$loading({
            target: '#loading05',
            text: '玩命加载中'
          })
        }">开启loading05
        </we-button>
        <we-button @click="() => {
          loading05.close();
        }">关闭loading05
        </we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button type="primary" @click="() => {
          loading06 = this.$loading({
            target: '#loading06',
            logoRender(h, props) {
              return h('we-icon', {
                props: {
                  name: 'home'
                }
              });
            }
          })
        }">开启loading06
        </we-button>
        <we-button @click="() => {
          loading06.close();
        }">关闭loading06
        </we-button>
      </div>
    </div>

    <div class="module-main" style="margin-top: 5px">
      <div class="module-content" style="overflow: hidden">
        <div id="loading04" style="border: 1px solid red; width: 200px; height: 200px; float:left;">
          <h1 style="display: table-cell;vertical-align: middle;height: 200px; width: 200px; text-align: center">
            loading04</h1>


        </div>

        <div id="loading05" style="border: 1px solid red; width: 200px; height: 200px; float:left;margin-left: 10px;">
          <h1 style="display: table-cell;vertical-align: middle;height: 200px; width: 200px; text-align: center">
            loading05</h1>
        </div>

        <div id="loading06" style="border: 1px solid red; width: 200px; height: 200px; float:left;margin-left: 10px;">
          <h1 style="display: table-cell;vertical-align: middle;height: 200px; width: 200px; text-align: center">
            loading06</h1>
        </div>

      </div>
    </div>

    <div class="first-title">指令方式</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <we-button type="primary" @click="value07 = true">开启loading07</we-button>
        <we-button @click="value07 = false">关闭loading07</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button type="primary" @click="value08 = true">开启loading08</we-button>
        <we-button @click="value08 = false">关闭loading08</we-button>
      </div>
      <div class="module-content" style="overflow: hidden">
        <we-button type="primary" @click="value09 = true">开启loading09</we-button>
        <we-button @click="value09 = false">关闭loading09</we-button>
      </div>
    </div>

    <div class="module-main" style="margin-top: 5px">
      <div class="module-content" style="overflow: hidden">
        <div v-loading="value07" style="border: 1px solid red; width: 200px; height: 200px; float:left;">
          <h1 style="display: table-cell;vertical-align: middle;height: 200px; width: 200px; text-align: center">
            loading07</h1>
        </div>

        <div v-loading="{value: value08, text: 'loading'}"
             style="border: 1px solid red; width: 200px; height: 200px; float:left;margin-left: 10px;">
          <h1 style="display: table-cell;vertical-align: middle;height: 200px; width: 200px; text-align: center">
            loading08</h1>
        </div>

        <div v-loading="{value: value09, logoRender: h => h('we-icon', {props: {name: 'home'}})}"
             style="border: 1px solid red; width: 200px; height: 200px; float:left;margin-left: 10px;">
          <h1 style="display: table-cell;vertical-align: middle;height: 200px; width: 200px; text-align: center">
            loading09</h1>
        </div>

      </div>
    </div>

    <div style="margin-top: 100px; height: 10px"></div>

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
        value07: true,
        value08: false,
        value09: false,

        loading01: undefined,
        loading02: undefined,
        loading03: undefined,
        loading04: undefined,
        loading05: undefined,
        loading06: undefined
      };
    },

    methods: {
      handleOpenFullScreen() {
        let loading = this.$loading({
          fullscreen: true,
          size: 'large',
          logoRender(h) {
            return h('we-icon', {
              props: {
                name: 'home',
                size: 'large'
              }
            });
          }
        });
        setTimeout(() => loading.close(), 3000);
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
