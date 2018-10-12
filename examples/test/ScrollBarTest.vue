<template>
  <div>
    <div style="height: 150px;width: 100px">
      <el-scrollbar style="height:100%;">
        <div style="background-color: #EEEEEE">
          <div class="test">12312123121231212312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
        </div>
      </el-scrollbar>
    </div>
    <div style="height: 20px; background-color: #f0c78a; margin: 20px 0;"></div>

    <div style="height: 150px;">
      <scroll-bar style="height:100%;">
        <div style="background-color: #EEEEEE">
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
        </div>
      </scroll-bar>
    </div>
  </div>
</template>

<script>
  import WeIcon from "../../packages/icon/src/Icon.vue";
  import WeButton from "../../packages/button/src/Button.vue";
  import ScrollBar from "../../packages/scrollbar/index.js";

  export default {
    name: "scroll-bar-test",

    components: {
      weIcon: WeIcon,
      weButton: WeButton,
      ScrollBar: ScrollBar
    },
    data() {
      return {
        isShow: false,
        verticalHeight: 0,
        verticalTranslate: 0,
        horizontalWidth: 0,
        horizontalTranslate: 0,
        scrollRatio: 0,
        activeIndex: '1',
        activeIndex2: '1'
      }
    },

    computed: {
    },

    created(){

    }
  }
</script>

<style scoped>
  .testUl li{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e5e5e5;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .test{
    /*float: left;*/
  }
  .el-scrollbar__wrap{
    overflow: hidden;
  }
</style>
