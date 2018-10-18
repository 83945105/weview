<template>
  <div>
    <!--JS-->
    <div class="first-title">JS</div>
    <we-button @click="$skeleton.startAll()">全部开始</we-button>
    <we-button @click="$skeleton.finishAll()">全部完成</we-button>
    <we-button @click="$skeleton.errorAll(403)">全部403</we-button>
    <we-button @click="jsSkeleton.start()">骨架屏</we-button>
    <we-button @click="jsSkeleton.error(404)">加载失败</we-button>
    <we-button @click="jsSkeleton.finish()">原内容</we-button>
    <div class="module-main">
      <div id="skeleton01" class="module-content" style="height: 200px">

        6+4646464646464
        <we-button type="primary" :loading="true">按钮</we-button>

      </div>
    </div>
    <!--/JS-->
    <!--指令-->
    <div class="first-title">指令</div>
    <we-button @click="$skeleton.startAll()">全部开始</we-button>
    <we-button @click="$skeleton.finishAll()">全部完成</we-button>
    <we-button @click="$skeleton.errorAll(403)">全部403</we-button>
    <we-button @click="jsShowOne = 1">骨架屏</we-button>
    <we-button @click="jsShowOne = 403">加载失败</we-button>
    <we-button @click="jsShowOne = 0">原内容</we-button>
    <div class="module-main">
      <div v-skeleton="{value: jsShowOne, animation: true}" class="module-content" style="height: 200px">

        2333333333333333333333333333
        <we-button type="primary" :loading="true">按钮2</we-button>

      </div>
    </div>
    <!--/JS-->
    <!--基本-->
    <div class="first-title">基本</div>
    <we-button @click="showOne = 1">骨架屏</we-button>
    <we-button @click="showOne = 403">加载失败</we-button>
    <we-button @click="showOne = 0">原内容</we-button>
    <div class="module-main">
      <div class="module-content" style="height: 200px">
        <we-skeleton ref="skeleton02" v-model="showOne" :paragraph-rows="3" :timeout="3000"
                     :paragraph-width="['100%', '90%', '80%', '70%', '60%', '50%', '40%']"
        >
          654646
          wEr
          w3
          4
          234
          2
          34
          2
          34
        </we-skeleton>
      </div>
    </div>
    <!--/基本-->

    <!--图片列表组合-->
    <div class="first-title">图片列表组合</div>
    <div class="module-main">
      <div class="module-content">
        <we-skeleton :value="true"
                     head
                     picture
                     head-shape="square"
                     :paragraph-rows="10"
                     :paragraph-width="['100%', '90%', '80%', '70%', '60%', '50%', '40%']"
        ></we-skeleton>
      </div>
    </div>
    <!--/图片列表组合-->

    <!--动画效果-->
    <div class="first-title">动画效果</div>
    <div class="module-main">
      <div class="module-content">
        <we-skeleton :value="true"
                     head
                     head-shape="square"
                     animation
                     :paragraph-rows="10"
                     :paragraph-width="['100%', '90%', '80%', '70%', '60%', '50%', '40%']"
        ></we-skeleton>
      </div>
    </div>
    <!--/动画效果-->
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
        jsShowOne: 1,
        jsSkeleton: undefined,
        showOne: 1
      }
    },

    computed: {},

    mounted() {

      this.jsSkeleton = this.$skeleton({
        target: '#skeleton01'
      });

    }
  }
</script>

<style scoped>
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
</style>
