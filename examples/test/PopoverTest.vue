<template>
  <div>
    <div class="page-title">Popover弹出框</div>
    <div class="first-title">主题</div>
    <div class="module-main">
      <div class="module-content">
        <we-button size="small" class="popover-btn"
                   @mouseenter.native.stop="handleMouseEnter"
                   @mouseleave.native.stop="handleMouseLeave">Dark hover
        </we-button>
        <we-button size="small" class="popover-btn"
                   @click.native.stop="isLightShow =! isLightShow"
                   @blur.native.stop="isLightShow =! isLightShow">Light click
        </we-button>
        <!--Dark-->
        <we-animation name="fadeIn"
                      @mouseenter.native.stop="handleDarkMouseEnter"
                      @mouseleave.native.stop="handleDarkMouseLeave">
          <template v-if="isDarkShow">
            <div class="we-popover we-popover-type-dark" style="top: 29px; left: 300px;">
              <div class="we-popover-inner">
                <div class="we-popover-inner-title">提示标题</div>
                <div class="we-popover-inner-content">文字提示内容文字提示内容文字提示内容文字提示内容文字提示内容</div>
              </div>
              <div class="we-popover-arrow we-popover-arrow-topLeft"></div>
            </div>
          </template>
        </we-animation>
        <!--/Dark-->
        <!--Light-->
        <we-animation name="fadeIn">
          <template v-if="isLightShow">
            <div class="we-popover we-popover-type-light" style="top: 50px; left: 390px;">
              <div class="we-popover-inner">
                <div class="we-popover-inner-title">提示标题</div>
                <div class="we-popover-inner-content">文字提示内容文字提示内容</div>
              </div>
              <div class="we-popover-arrow we-popover-arrow-topLeft"></div>
            </div>
          </template>
        </we-animation>
        <!--/Light-->
      </div>
    </div>

    <div class="first-title">嵌套操作</div>
    <div class="module-main">
      <div class="module-content">
        <we-button size="small" class="popover-btn"
                   @click.native.stop="isDeleteShow =! isDeleteShow">删除
        </we-button>
        <!--DeleteShow-->
        <we-animation name="fadeIn">
          <template v-if="isDeleteShow">
            <div class="we-popover we-popover-type-light" style="top: 103px; left: 215px;">
              <div class="we-popover-inner is-button" style="width: 220px;">
                <div class="we-popover-inner-title">提示标题</div>
                <div class="we-popover-inner-content">
                  订单编号：20181017123456<br/>确定要删除吗？
                </div>
                <div class="we-popover-inner-button is-right">
                  <we-button size="mini" class="popover-btn"
                             @click.native.stop="isDeleteShow =! isDeleteShow">取消
                  </we-button>
                  <we-button size="mini" type="primary" class="popover-btn"
                             @click.native.stop="isDeleteShow =! isDeleteShow">确定
                  </we-button>
                </div>
              </div>
              <div class="we-popover-arrow we-popover-arrow-top"></div>
            </div>
          </template>
        </we-animation>
        <!--/DeleteShow-->
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
        tooltipBaseTop: 0,
        tooltipBaseLeft: 0,
        isTopLeftShow: false,
        isTopShow: false,
        isTopRightShow: false,

        isRightTopShow: false,
        isRightShow: false,
        isRightBottomShow: false,

        isBottomLeftShow: false,
        isBottomShow: false,
        isBottomRightShow: false,

        isLeftTopShow: false,
        isLeftShow: false,
        isLeftBottomShow: false,

        isDarkShow: false,
        isHoverTimeOut: undefined,
        isLightShow: false,

        isDeleteShow: false
      };
    },

    methods: {
      handleMouseEnter() {
        this.isDarkShow = true;
      },
      handleMouseLeave() {
        this.isHoverTimeOut = setTimeout(() => {
          this.isDarkShow = false;
        }, 100);
      },
      handleDarkMouseEnter() {
        window.clearTimeout(this.isHoverTimeOut);
      },
      handleDarkMouseLeave() {
        this.isHoverTimeOut = setTimeout(() => {
          this.isDarkShow = false;
        }, 100);
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
