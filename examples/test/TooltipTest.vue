<template>
  <div>
    <div class="first-title">基本</div>
    <div class="module-main">
      <div class="module-content">
        <div class="tooltip-layout-main" ref="direction8">

          <div class="tooltip-layout" style="margin-left: 65px;">
            <we-tooltip placement="top-start"
                        content="top-start 文字提示 占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位">
              <we-button size="small" class="tooltip-btn">上左</we-button>
            </we-tooltip>
            <we-tooltip placement="top" content="top 文字提示 占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位">
              <we-button size="small" class="tooltip-btn" style="margin: 0 9px;">上边</we-button>
            </we-tooltip>
            <we-tooltip placement="top-end" content="top-end 文字提示 占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位">
              <we-button size="small" class="tooltip-btn">上右</we-button>
            </we-tooltip>
          </div>

          <div class="tooltip-layout is-left">
            <we-tooltip placement="left-start" max-width="100px"
                        content="left-start 文字提示 占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位">
              <we-button size="small" class="tooltip-btn">左上</we-button>
            </we-tooltip>
            <br/><br/>
            <we-tooltip placement="left" max-width="100px"
                        content="left 文字提示 占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位">
              <we-button size="small" class="tooltip-btn">左边</we-button>
            </we-tooltip>
            <br/><br/>
            <we-tooltip placement="left-end" max-width="100px"
                        content="left-end 文字提示 占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位">
              <we-button size="small" class="tooltip-btn">左下</we-button>
            </we-tooltip>
          </div>

          <div class="tooltip-layout is-right">
            <we-tooltip placement="right-start" max-width="100px"
                        content="right-start 文字提示 占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位">
              <we-button size="small" class="tooltip-btn">右上</we-button>
            </we-tooltip>
            <br/><br/>
            <we-tooltip placement="right" max-width="100px" content="right 文字提示 占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位">
              <we-button size="small" class="tooltip-btn">右边</we-button>
            </we-tooltip>
            <br/><br/>
            <we-tooltip placement="right-end" max-width="100px"
                        content="right-end 文字提示 占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位">
              <we-button size="small" class="tooltip-btn">右下</we-button>
            </we-tooltip>
          </div>

          <div class="tooltip-layout tooltip-layout-clear" style="margin-left: 65px">
            <we-tooltip placement="bottom-start"
                        content="bottom-start 文字提示 占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位">
              <we-button size="small" class="tooltip-btn">下左</we-button>
            </we-tooltip>
            <we-tooltip placement="bottom" content="bottom 文字提示 占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位">
              <we-button size="small" class="tooltip-btn" style="margin: 0 9px;">下边</we-button>
            </we-tooltip>
            <we-tooltip placement="bottom-end"
                        content="bottom-end 文字提示 占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位占位">
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

          <div class="tooltip-layout" style="margin-left: 65px;">
            <we-tooltip effect="light" placement="top-start" content="top-start 文字提示">
              <we-button size="small" class="tooltip-btn">上左</we-button>
            </we-tooltip>
            <we-tooltip effect="light" placement="top" content="top 文字提示">
              <we-button size="small" class="tooltip-btn" style="margin: 0 9px;">上边</we-button>
            </we-tooltip>
            <we-tooltip effect="light" placement="top-end" content="top-end 文字提示">
              <we-button size="small" class="tooltip-btn">上右</we-button>
            </we-tooltip>
          </div>

          <div class="tooltip-layout is-left">
            <we-tooltip effect="light" placement="left-start" content="left-start 文字提示">
              <we-button size="small" class="tooltip-btn">左上</we-button>
            </we-tooltip>
            <br/><br/>
            <we-tooltip effect="light" placement="left" content="left 文字提示">
              <we-button size="small" class="tooltip-btn">左边</we-button>
            </we-tooltip>
            <br/><br/>
            <we-tooltip effect="light" placement="left-end" content="left-end 文字提示">
              <we-button size="small" class="tooltip-btn">左下</we-button>
            </we-tooltip>
          </div>

          <div class="tooltip-layout is-right">
            <we-tooltip effect="light" placement="right-start" content="right-start 文字提示">
              <we-button size="small" class="tooltip-btn">右上</we-button>
            </we-tooltip>
            <br/><br/>
            <we-tooltip effect="light" placement="right" content="right 文字提示">
              <we-button size="small" class="tooltip-btn">右边</we-button>
            </we-tooltip>
            <br/><br/>
            <we-tooltip effect="light" placement="right-end" content="right-end 文字提示">
              <we-button size="small" class="tooltip-btn">右下</we-button>
            </we-tooltip>
          </div>

          <div class="tooltip-layout tooltip-layout-clear" style="margin-left: 65px">
            <we-tooltip effect="light" placement="bottom-start" content="bottom-start 文字提示">
              <we-button size="small" class="tooltip-btn">下左</we-button>
            </we-tooltip>
            <we-tooltip effect="light" placement="bottom" content="bottom 文字提示">
              <we-button size="small" class="tooltip-btn" style="margin: 0 9px;">下边</we-button>
            </we-tooltip>
            <we-tooltip effect="light" placement="bottom-end" content="bottom-end 文字提示">
              <we-button size="small" class="tooltip-btn">下右</we-button>
            </we-tooltip>
          </div>

        </div>
      </div>
    </div>

    <div class="first-title">超长文本提示</div>
    <div class="module-main">
      <div class="module-content">

        <we-tooltip v-model="show01" placement="bottom" manual
                    content="超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本超长文本提示超长文本提示超长文本提示超长文本提示超长文本超长文本提示超长文本提示超长文本提示超长文本提示超长文本超长文本提示超长文本提示超长文本提示超长文本提示超长文本超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本">
          <we-button @click="show01 = !show01">we-view超长文本提示</we-button>
        </we-tooltip>

      </div>
    </div>

    <div class="first-title">其它</div>
    <div class="module-main">
      <div class="module-content">

        <we-tooltip disabled max-width="200px" placement="top"
                    content="超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本提示超长文本">
          <we-button>禁用</we-button>
        </we-tooltip>

        <we-tooltip placement="top" content="按住提示" trigger="focus">
          <we-button>按住触发</we-button>
        </we-tooltip>

        <we-tooltip placement="top" content="按住提示" trigger="click">
          <we-button>点击触发/关闭</we-button>
        </we-tooltip>

        <we-tooltip placement="top" content="按住提示" trigger="hover">
          <we-button>悬浮触发</we-button>
        </we-tooltip>

        <we-tooltip v-model="show02" placement="top" content="按住提示" trigger="hover" manual>
          <we-button @click="show02 = !show02">手动模式</we-button>
        </we-tooltip>

        <we-tooltip :content="content01">
          <input type="text" v-model="content01">
        </we-tooltip>

      </div>
    </div>

    <div style="margin-top: 100px; height: 10px"></div>

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

        show01: false,
        show02: false,
        content01: '改变文本'

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
    /*margin: 5px;*/
  }

  .tooltip-layout.is-right {
    float: right;
    width: 60px;
  }

  .tooltip-layout.is-right .tooltip-btn {
    /*margin: 5px;*/
  }
</style>
