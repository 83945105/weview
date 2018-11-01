<template>
  <div>
    <div class="page-title">Skeleton骨架屏</div>
    <div class="first-title">组件方式</div>
    <div class="module-main">
      <div class="module-content">
        <we-button @click="value01 = true">骨架屏</we-button>
        <we-button @click="value01 = false">原始内容</we-button>
        <we-button @click="value01 = 500">加载失败</we-button>
      </div>
    </div>
    <div class="module-main" style="margin-top: 5px">
      <div class="module-content" style="height: 300px">

        <we-skeleton v-model="value01" animation>

          <el-table :data="tableData"
                    style="width: 100%">
            <el-table-column prop="date"
                             label="日期"
                             width="180">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             width="180">
            </el-table-column>
            <el-table-column prop="address"
                             label="地址">
            </el-table-column>
          </el-table>

        </we-skeleton>

      </div>
    </div>

    <div class="first-title">完整示例</div>
    <div class="module-main">
      <div class="module-content">
        <we-button @click="value02 = true">骨架屏</we-button>
        <we-button @click="value02 = false">原始内容</we-button>
        <we-button @click="value02 = 500">加载失败</we-button>
      </div>
    </div>
    <div class="module-main" style="margin-top: 5px">
      <div class="module-content" style="height: 300px">

        <we-skeleton v-model="value02" animation head picture :paragraph-rows="8" :paragraph-width="[100, 200, 300, '100%']">

          <el-table :data="tableData"
                    style="width: 100%">
            <el-table-column prop="date"
                             label="日期"
                             width="180">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             width="180">
            </el-table-column>
            <el-table-column prop="address"
                             label="地址">
            </el-table-column>
          </el-table>

        </we-skeleton>

      </div>
    </div>

    <div class="first-title">服务方式(未实现)</div>
    <div class="module-main">
      <div class="module-content">
        <!--<we-button @click="skeleton01 = $skeleton({target: '#skeleton01'})">骨架屏</we-button>-->
        <!--<we-button @click="skeleton01.finish()">原始内容</we-button>-->
        <!--<we-button @click="skeleton01.error()">加载失败</we-button>-->
      </div>
    </div>
    <div class="module-main" style="margin-top: 5px">
      <div id="skeleton01" class="module-content">

        <el-table  :data="tableData"
                  style="width: 100%">
          <el-table-column prop="date"
                           label="日期"
                           width="180">
          </el-table-column>
          <el-table-column prop="name"
                           label="姓名"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           label="地址">
          </el-table-column>
        </el-table>

      </div>
    </div>

    <div style="margin-top: 100px; height: 10px"></div>

  </div>
</template>

<script>
  import WeIcon from "../../packages/icon/src/Icon.vue";
  import WeButton from "../../packages/button/src/Button.vue";
  import merge from "webpack-merge";

  export default {

    name: "scroll-bar-test",

    components: {
      weIcon: WeIcon,
      weButton: WeButton
    },
    data() {
      return {

        value01: false,
        value02: true,
        value03: false,
        value04: false,
        value05: false,

        skeleton01: undefined,

        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },

    computed: {},

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
