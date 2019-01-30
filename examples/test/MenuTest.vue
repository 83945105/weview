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
      <div class="module-content"
           style="position:relative;margin-top: 5px; height: 500px; background-color: rgba(77,77,77,0.2);"
      >
        <div style="position: absolute;top: 0;bottom: 0;left: 0;">
          <we-menu :value="true" index="root" :collapse="collapse01"
                   :append-to-body="false"
                   style="height: 500px; overflow: auto;"
                   :accordionTransition="true"
                   :collapseTransition="true"
          >
            <we-menu-item icon-name="home" subMenuMode="open" subMenuTrigger="click">
              选项

              <we-menu v-model="show01" index="01" slot="subMenu" subMenuMode="open" :append-to-body="true"
                       :height="400"
                       style="height: 400px;overflow: auto">

                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item>
                  选项一

                  <we-menu index="01-04" slot="subMenu" :append-to-body="true">
                    <we-menu-item>选项二</we-menu-item>
                    <we-menu-item>选项二</we-menu-item>
                    <we-menu-item>选项二</we-menu-item>
                  </we-menu>
                </we-menu-item>

              </we-menu>

            </we-menu-item>
            <we-menu-item icon-name="home" index="item02">
              选项

              <we-menu v-model="show02" index="02" slot="subMenu" :appendToBody="true">

                <we-menu-item icon icon-name="home">02选项一</we-menu-item>
                <we-menu-item>选项一</we-menu-item>
                <we-menu-item index="item02-03" subMenuMode="open">
                  选项一item02-03

                  <we-menu index="02-03" slot="subMenu" :appendToBody="false">
                    <we-menu-item>选项二02-03</we-menu-item>
                    <we-menu-item>选项二</we-menu-item>
                    <we-menu-item subMenuMode="open">
                      选项二

                      <we-menu index="03-03" slot="subMenu">
                        <we-menu-item>选项二03-03</we-menu-item>
                        <we-menu-item>选项二</we-menu-item>
                        <we-menu-item>选项二</we-menu-item>
                      </we-menu>

                    </we-menu-item>
                  </we-menu>

                </we-menu-item>

              </we-menu>
            </we-menu-item>
            <we-tooltip :disabled="!collapse01" content="选项" placement="right">
              <we-menu-item icon-name="home">选项</we-menu-item>
            </we-tooltip>
            <we-tooltip :disabled="!collapse01" content="选项" placement="right">
              <we-menu-item icon-name="home">选项</we-menu-item>
            </we-tooltip>
            <we-tooltip :disabled="!collapse01" content="选项" placement="right">
              <we-menu-item icon-name="home">选项</we-menu-item>
            </we-tooltip>
            <we-tooltip :disabled="!collapse01" content="选项" placement="right">
              <we-menu-item icon-name="home">选项</we-menu-item>
            </we-tooltip>
            <we-menu-item-group before-line after-line title="分组">
              <we-tooltip :disabled="!collapse01" content="选项" placement="right">
                <we-menu-item icon-name="home">选项</we-menu-item>
              </we-tooltip>
              <we-tooltip :disabled="!collapse01" content="选项" placement="right">
                <we-menu-item icon-name="home">选项</we-menu-item>
              </we-tooltip>
            </we-menu-item-group>
            <we-tooltip :disabled="!collapse01" content="选项" placement="right">
              <we-menu-item icon-name="home">选项</we-menu-item>
            </we-tooltip>
          </we-menu>
        </div>
        <div style="position: absolute;
              top: 0;bottom: 0;right: 0;
              transition: left 0.3s ease;
              -moz-transition: left 0.3s ease;
              -webkit-transition: left 0.3s ease;
              -o-transition: left 0.3s ease;
              "
             :style="{'left': !collapse01 ? `250px` : `60px`}">
          <el-table :data="tableData"
                    style="width: 100%;"
                    height="100%">
            <el-table-column prop="date"
                             label="日期"
                             min-width="60"
                             show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             min-width="60"
                             show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             min-width="60"
                             show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             min-width="60"
                             show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             min-width="60"
                             show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="address"
                             label="地址"
                             min-width="60"
                             show-overflow-tooltip>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <div class="first-title">垂直菜单(自定义主题)</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <we-button type="primary" @click="collapse02 = !collapse02">折叠/展开</we-button>
      </div>
    </div>

    <div class="module-main">
      <div class="module-content" style="margin-top: 5px; overflow: hidden; background-color: rgba(77,77,77,0.2);">

        <we-menu :value="true" index="root" :collapse="collapse02"
                 :append-to-body="false"
                 text-color="#cccccc"
                 background-color="#252525"
                 active-text-color="#ffffff"
                 active-background-color="#151515"
                 selected-text-color="#ffffff"
                 selected-background-color="#2199ed"
                 hover-text-color="#2199ed"
                 hover-background-color="#151515"
                 group-line-color="red"
        >
          <we-menu-item icon-name="home" subMenuMode="open" subMenuTrigger="hover">
            选项

            <we-menu v-model="show03" index="01" slot="subMenu" subMenuMode="open">

              <we-menu-item>选项一</we-menu-item>
              <we-menu-item>选项一</we-menu-item>
              <we-menu-item>选项一</we-menu-item>
              <we-menu-item>选项一</we-menu-item>
              <we-menu-item>
                选项一

                <we-menu index="01-04" slot="subMenu">
                  <we-menu-item>选项二</we-menu-item>
                  <we-menu-item>选项二</we-menu-item>
                  <we-menu-item>选项二</we-menu-item>
                </we-menu>
              </we-menu-item>

            </we-menu>

          </we-menu-item>
          <we-menu-item icon-name="home" index="item02">
            选项

            <we-menu v-model="show04" index="02" slot="subMenu" :appendToBody="true">

              <we-menu-item icon icon-name="home">02选项一</we-menu-item>
              <we-menu-item>选项一</we-menu-item>
              <we-menu-item index="item02-03" subMenuMode="open">
                选项一item02-03

                <we-menu index="02-03" slot="subMenu" :appendToBody="false">
                  <we-menu-item>选项二02-03</we-menu-item>
                  <we-menu-item>选项二</we-menu-item>
                  <we-menu-item subMenuMode="open">
                    选项二

                    <we-menu index="03-03" slot="subMenu">
                      <we-menu-item>选项二03-03</we-menu-item>
                      <we-menu-item>选项二</we-menu-item>
                      <we-menu-item>选项二</we-menu-item>
                    </we-menu>

                  </we-menu-item>
                </we-menu>

              </we-menu-item>

            </we-menu>
          </we-menu-item>
          <we-tooltip :disabled="!collapse02" content="选项" placement="right">
            <we-menu-item icon-name="home">选项</we-menu-item>
          </we-tooltip>
          <we-tooltip :disabled="!collapse02" content="选项" placement="right">
            <we-menu-item icon-name="home">选项</we-menu-item>
          </we-tooltip>
          <we-tooltip :disabled="!collapse02" content="选项" placement="right">
            <we-menu-item icon-name="home">选项</we-menu-item>
          </we-tooltip>
          <we-tooltip :disabled="!collapse02" content="选项" placement="right">
            <we-menu-item icon-name="home">选项</we-menu-item>
          </we-tooltip>
          <we-menu-item-group before-line after-line title="分组">
            <we-tooltip :disabled="!collapse02" content="选项" placement="right">
              <we-menu-item icon-name="home">选项</we-menu-item>
            </we-tooltip>
            <we-tooltip :disabled="!collapse02" content="选项" placement="right">
              <we-menu-item icon-name="home">选项</we-menu-item>
            </we-tooltip>
          </we-menu-item-group>
          <we-tooltip :disabled="!collapse02" content="选项" placement="right">
            <we-menu-item icon-name="home">选项</we-menu-item>
          </we-tooltip>
        </we-menu>

      </div>
    </div>

    <div class="first-title">水平菜单</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <we-button type="primary">显示/隐藏</we-button>
      </div>
    </div>

    <div class="module-main" style="margin-top: 5px">
      <div class="module-content" style="overflow: hidden; background-color: rgba(77,77,77,0.2); height: 300px">

        <we-menu :value="true" mode="horizontal" index="root"
        >

          <we-tooltip content="选项" placement="bottom">
            <we-menu-item icon icon-name="home">选项</we-menu-item>
          </we-tooltip>
          <we-tooltip content="选项" placement="bottom">
            <we-menu-item>选项</we-menu-item>
          </we-tooltip>
          <we-menu-item>
            <we-icon name="home"></we-icon>
            选项

            <we-menu slot="subMenu">
              <we-menu-item>选项</we-menu-item>
              <we-menu-item>选项</we-menu-item>
              <we-menu-item subMenuMode="open">
                选项
                <we-menu slot="subMenu" :append-to-body="false">
                  <we-menu-item>选项</we-menu-item>
                  <we-menu-item>选项</we-menu-item>
                </we-menu>

              </we-menu-item>
            </we-menu>

          </we-menu-item>
          <we-menu-item-group before-line after-line>
            <we-tooltip content="选项" placement="bottom">
              <we-menu-item>选项</we-menu-item>
            </we-tooltip>
            <we-tooltip content="选项" placement="bottom">
              <we-menu-item>选项</we-menu-item>
            </we-tooltip>
          </we-menu-item-group>
          <we-tooltip content="选项" placement="bottom">
            <we-menu-item>选项</we-menu-item>
          </we-tooltip>
        </we-menu>

      </div>
    </div>

    <div class="first-title">水平菜单(自定义主题)</div>
    <div class="module-main">
      <div class="module-content" style="overflow: hidden">
        <we-button type="primary">显示/隐藏</we-button>
      </div>
    </div>

    <div class="module-main" style="margin-top: 5px">
      <div class="module-content" style="overflow: hidden; background-color: rgba(77,77,77,0.2); height: 300px">

        <we-menu :value="true" mode="horizontal" index="root"
                 text-color="#cccccc"
                 background-color="#252525"
                 active-text-color="#ffffff"
                 active-background-color="#151515"
                 selected-text-color="#ffffff"
                 selected-background-color="#2199ed"
                 hover-text-color="#2199ed"
                 hover-background-color="#151515"
                 group-line-color="red"
        >

          <we-tooltip content="选项" placement="bottom">
            <we-menu-item icon icon-name="home">选项</we-menu-item>
          </we-tooltip>
          <we-tooltip content="选项" placement="bottom">
            <we-menu-item>选项</we-menu-item>
          </we-tooltip>
          <we-menu-item>
            <we-icon name="home"></we-icon>
            选项

            <we-menu slot="subMenu">
              <we-menu-item>选项</we-menu-item>
              <we-menu-item>选项</we-menu-item>
              <we-menu-item subMenuMode="open">
                选项
                <we-menu slot="subMenu" :append-to-body="false">
                  <we-menu-item>选项</we-menu-item>
                  <we-menu-item>选项</we-menu-item>
                </we-menu>

              </we-menu-item>
            </we-menu>

          </we-menu-item>
          <we-menu-item-group before-line after-line title="分组">
            <we-tooltip content="选项" placement="bottom">
              <we-menu-item>选项</we-menu-item>
            </we-tooltip>
            <we-tooltip content="选项" placement="bottom">
              <we-menu-item>选项</we-menu-item>
            </we-tooltip>
          </we-menu-item-group>
          <we-tooltip content="选项" placement="bottom">
            <we-menu-item>选项</we-menu-item>
          </we-tooltip>
        </we-menu>

      </div>
    </div>

    <div class="first-title">上下文菜单</div>
    <div class="module-main">
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
        collapse01: true,
        collapse02: true,

        show01: false,
        show02: false,
        show03: false,
        show04: false,

        tableData: []
      };
    },

    watch: {},

    methods: {},

    created() {
      let tableData = [];
      for (let i = 0; i < 200; i++) {
        tableData.push({
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        });
      }
      this.tableData = tableData;
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
