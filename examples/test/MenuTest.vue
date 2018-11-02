<template>
  <div>
    <div class="page-title">Menu菜单</div>
    <div class="first-title">垂直菜单</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <we-button type="primary" @click="collapse01 = !collapse01">折叠/展开</we-button>
      </div>
    </div>

    <div class="module-main">
      <div class="module-content" style="margin-top: 5px; overflow: hidden; background-color: #4d4d4d">

        <we-menu :value="true" index="root" :collapse="collapse01" :append-to-body="false">
          <we-menu-item icon-name="home" subMenuMode="open">
            选项

            <we-menu index="01" slot="subMenu">

              <we-menu-item>选项一</we-menu-item>
              <we-menu-item>选项一</we-menu-item>
              <we-menu-item>选项一</we-menu-item>
              <we-menu-item>选项一</we-menu-item>
              <we-menu-item>选项一</we-menu-item>

            </we-menu>

          </we-menu-item>
          <we-menu-item icon-name="home">
            选项

            <we-menu index="02" slot="subMenu">

              <we-menu-item>选项一</we-menu-item>
              <we-menu-item>选项一</we-menu-item>
              <we-menu-item>选项一</we-menu-item>

            </we-menu>
          </we-menu-item>
          <we-menu-item icon-name="home">选项</we-menu-item>
          <we-menu-item icon-name="home">选项</we-menu-item>
          <we-menu-item icon-name="home">选项</we-menu-item>
          <we-menu-item icon-name="home">选项</we-menu-item>
          <we-menu-item icon-name="home">选项</we-menu-item>
          <we-menu-item icon-name="home">选项</we-menu-item>
          <we-menu-item icon-name="home">选项</we-menu-item>
        </we-menu>


      </div>
    </div>
    <div class="module-main" style="margin-top: 5px">
      <div class="module-content" style="overflow: hidden">

      </div>
    </div>

    <div class="first-title">服务方式</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
      </div>
    </div>

    <div class="module-main" style="margin-top: 5px">
      <div class="module-content" style="overflow: hidden">

      </div>
    </div>

    <div class="first-title">指令方式</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
      </div>
    </div>

    <div class="module-main" style="margin-top: 5px">
      <div class="module-content" style="overflow: hidden">

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
        collapse01: false
      };
    },

    methods: {
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
