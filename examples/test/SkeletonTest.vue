<template>
  <div>
    <!--基本-->
    <div class="first-title">基本</div>
    <div class="module-main">
      <div class="module-content">
        <div class="we-skeleton">
          <div class="we-skeleton-content">
            <h3 class="we-skeleton-content-title" style="width: 50%"></h3>
            <ul class="we-skeleton-content-paragraph">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--/基本-->

    <!--图片列表组合-->
    <div class="first-title">图片列表组合</div>
    <div class="module-main">
      <div class="module-content">
        <div class="we-skeleton">
          <div class="we-skeleton-picture is-left">
            <div class="we-skeleton-picture-one is-circle"></div>
          </div>
          <div class="we-skeleton-content">
            <h3 class="we-skeleton-content-title" style="width: 50%"></h3>
            <ul class="we-skeleton-content-paragraph">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div class="we-skeleton-picture is-right">
            <div class="we-skeleton-picture-one" style="height: 100px;width: 200px;"></div>
          </div>
        </div>
      </div>
    </div>
    <!--/图片列表组合-->

    <!--动画效果-->
    <div class="first-title">动画效果</div>
    <div class="module-main">
      <div class="module-content">
        <div class="we-skeleton is-animation">
          <div class="we-skeleton-picture is-left">
            <div class="we-skeleton-picture-one is-circle"></div>
          </div>
          <div class="we-skeleton-content">
            <h3 class="we-skeleton-content-title" style="width: 50%"></h3>
            <ul class="we-skeleton-content-paragraph">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--/动画效果-->
  </div>
</template>

<script>
  import WeIcon from "../../packages/icon/src/Icon.vue";
  import WeButton from "../../packages/button/src/Button.vue";

  export default {
    name: "scroll-bar-test",

    components: {
      weIcon: WeIcon,
      weButton: WeButton
    },
    data() {
      return {

      }
    },

    computed: {
    },

    created(){

    }
  }
</script>

<style scoped>
  .first-title{
    font-size:22px;
    font-weight:normal;
    margin:30px 0px 15px 0px;
    color:#333333;
  }
  .module-main{
    border:1px solid #EEEEEE;
  }
  .module-main:hover{
    box-shadow:0 0 5px rgba(0,0,0,0.1);
  }
  .module-content{
    padding:15px;
  }
  .module-code{
    padding:12px;
    background-color: #f9f9f9;
    border-top:1px solid #EEEEEE;
  }
  .module-fold{
    padding:12px;
    text-align:center;
    cursor:pointer;
    background-color:#FFFFFF;
    border-top:1px solid #EEEEEE;
    color:#999999;
  }
  .module-fold:hover{
    background-color:#fcfcfc;
  }
</style>
