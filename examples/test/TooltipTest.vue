<template>
  <div>
    <div class="first-title">基本</div>
    <div class="module-main">
      <div class="module-content">
        <div class="tooltip-layout-main" ref="direction8">

          <div class="tooltip-layout" style="margin-left: 70px;">
            <we-tooltip placement="top-start" content="top-start 文字提示">
              <we-button size="small" class="tooltip-btn">上左</we-button>
            </we-tooltip>
            <we-tooltip placement="top" content="top 文字提示">
              <we-button size="small" class="tooltip-btn" style="margin: 0 9px;">上边</we-button>
            </we-tooltip>
            <we-tooltip placement="top-end" content="top-end 文字提示">
              <we-button size="small" class="tooltip-btn">上右</we-button>
            </we-tooltip>
          </div>

          <div class="tooltip-layout is-left">
            <we-tooltip placement="left-start" content="left-start 文字提示">
              <we-button size="small" class="tooltip-btn">左上</we-button>
            </we-tooltip>
            <we-tooltip placement="left" content="left 文字提示">
              <we-button size="small" class="tooltip-btn">左边</we-button>
            </we-tooltip>
            <we-tooltip placement="left-end" content="left-end 文字提示">
              <we-button size="small" class="tooltip-btn">左下</we-button>
            </we-tooltip>
          </div>

          <div class="tooltip-layout is-right">
            <we-tooltip placement="right-start" content="right-start 文字提示">
              <we-button size="small" class="tooltip-btn">右上</we-button>
            </we-tooltip>
            <we-tooltip placement="right" content="right 文字提示">
              <we-button size="small" class="tooltip-btn">右边</we-button>
            </we-tooltip>
            <we-tooltip placement="right-end" content="right-end 文字提示">
              <we-button size="small" class="tooltip-btn">右下</we-button>
            </we-tooltip>
          </div>

          <div class="tooltip-layout tooltip-layout-clear" style="margin-left: 70px">
            <we-tooltip placement="bottom-start" content="bottom-start 文字提示">
              <we-button size="small" class="tooltip-btn">下左</we-button>
            </we-tooltip>
            <we-tooltip placement="bottom" content="bottom 文字提示">
              <we-button size="small" class="tooltip-btn" style="margin: 0 9px;">下边</we-button>
            </we-tooltip>
            <we-tooltip placement="bottom-end" content="bottom-end 文字提示">
              <we-button size="small" class="tooltip-btn">下右</we-button>
            </we-tooltip>
          </div>

        </div>
      </div>
    </div>

    <div class="first-title">主题</div>
    <div class="module-main">
      <div class="module-content">
        <div class="tooltip-layout-main" ref="direction8">

          <div class="tooltip-layout" style="margin-left: 70px">
            <we-tooltip placement="top-start" content="top-start 文字提示" effect="light">
              <we-button size="small" class="tooltip-btn">上左</we-button>
            </we-tooltip>
            <we-tooltip placement="top" content="top 文字提示" effect="light">
              <we-button size="small" class="tooltip-btn" style="margin: 0 9px;">上边</we-button>
            </we-tooltip>
            <we-tooltip placement="top-end" content="top-end 文字提示" effect="light">
              <we-button size="small" class="tooltip-btn">上右</we-button>
            </we-tooltip>
          </div>

          <div class="tooltip-layout is-left">
            <we-tooltip placement="left-start" content="left-start 文字提示" effect="light">
              <we-button size="small" class="tooltip-btn">左上</we-button>
            </we-tooltip>
            <we-tooltip placement="left" content="left 文字提示" effect="light">
              <we-button size="small" class="tooltip-btn">左边</we-button>
            </we-tooltip>
            <we-tooltip placement="left-end" content="left-end 文字提示" effect="light">
              <we-button size="small" class="tooltip-btn">左下</we-button>
            </we-tooltip>
          </div>

          <div class="tooltip-layout is-right">
            <we-tooltip placement="right-start" content="right-start 文字提示" effect="light">
              <we-button size="small" class="tooltip-btn">右上</we-button>
            </we-tooltip>
            <we-tooltip placement="right" content="right 文字提示" effect="light">
              <we-button size="small" class="tooltip-btn">右边</we-button>
            </we-tooltip>
            <we-tooltip placement="right-end" content="right-end 文字提示" effect="light">
              <we-button size="small" class="tooltip-btn">右下</we-button>
            </we-tooltip>
          </div>

          <div class="tooltip-layout tooltip-layout-clear" style="margin-left: 70px">
            <we-tooltip placement="bottom-start" content="bottom-start 文字提示" effect="light">
              <we-button size="small" class="tooltip-btn">下左</we-button>
            </we-tooltip>
            <we-tooltip placement="bottom" content="bottom 文字提示" effect="light">
              <we-button size="small" class="tooltip-btn" style="margin: 0 9px;">下边</we-button>
            </we-tooltip>
            <we-tooltip placement="bottom-end" content="bottom-end 文字提示" effect="light">
              <we-button size="small" class="tooltip-btn">下右</we-button>
            </we-tooltip>
          </div>

        </div>
      </div>
    </div>

    <div class="first-title">超长文本提示</div>
    <div class="module-main">
      <div class="module-content">

        <we-tooltip content="超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本">
          <we-button>we-view超长文本提示</we-button>
        </we-tooltip>

        <el-tooltip :hide-after="0" content="超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示">
          <we-button>element-ui超长文本提示</we-button>
        </el-tooltip>

        <Tooltip :max-width="200" content="超长文本提示超长文本提示超长文本提示超长文本本提示超长文本本提本本提示超长文本本本本提示超长文本本本本提示超长文本本示超长文本本提示超长文本提示超长文本提示超长文本提示">
          <we-button>iview超长文本提示</we-button>
        </Tooltip>

      </div>
    </div>

  </div>
</template>

<script>
  import weButton from "../../packages/button/src/Button.vue";
  import weAnimation from "../../packages/animation/src/Animation.vue";

  export default {
    name: "tooltip-test",

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
        isLightShow: false

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

  .tooltip-layout-main {
    width: 338px;
  }

  .tooltip-layout-clear {
    clear: both;
  }

  .tooltip-layout .tooltip-btn {
    width: 60px;
  }

  .tooltip-layout.is-left {
    float: left;
    width: 60px;
  }

  .tooltip-layout.is-left .tooltip-btn {
    margin: 5px;
  }

  .tooltip-layout.is-right {
    float: right;
    width: 60px;
  }

  .tooltip-layout.is-right .tooltip-btn {
    margin: 5px;
  }
</style>
