<template>
  <div>
    <div class="first-title">基本</div>
    <div class="module-main">
      <div class="module-content">
        <div class="tooltip-layout-main" ref="direction8">
          <div class="tooltip-layout" style="margin-left: 70px">
            <we-tooltip placement="top-start" content="23333333333333333333">
              <we-button size="small" class="tooltip-btn">TL</we-button>
            </we-tooltip>
            <we-button size="small" class="tooltip-btn">Top
            </we-button>
            <we-button size="small" class="tooltip-btn">TR</we-button>
          </div>

          <div class="tooltip-layout is-left">
            <we-button size="small" class="tooltip-btn"
                       @mouseenter.native.stop="isLeftTopShow =! isLeftTopShow"
                       @mouseleave.native.stop="isLeftTopShow =! isLeftTopShow">LT
            </we-button>
            <we-button size="small" class="tooltip-btn"
                       @mouseenter.native.stop="isLeftShow =! isLeftShow"
                       @mouseleave.native.stop="isLeftShow =! isLeftShow">Left
            </we-button>
            <we-button size="small" class="tooltip-btn"
                       @mouseenter.native.stop="isLeftBottomShow =! isLeftBottomShow"
                       @mouseleave.native.stop="isLeftBottomShow =! isLeftBottomShow">LB
            </we-button>
          </div>

          <div class="tooltip-layout is-right">
            <we-button size="small" class="tooltip-btn"
                       @mouseenter.native.stop="isRightTopShow =! isRightTopShow"
                       @mouseleave.native.stop="isRightTopShow =! isRightTopShow">RT
            </we-button>
            <we-button size="small" class="tooltip-btn"
                       @mouseenter.native.stop="isRightShow =! isRightShow"
                       @mouseleave.native.stop="isRightShow =! isRightShow">Right
            </we-button>
            <we-button size="small" class="tooltip-btn"
                       @mouseenter.native.stop="isRightBottomShow =! isRightBottomShow"
                       @mouseleave.native.stop="isRightBottomShow =! isRightBottomShow">RB
            </we-button>
          </div>

          <div class="tooltip-layout tooltip-layout-clear" style="margin-left: 70px">
            <we-button size="small" class="tooltip-btn"
                       @mouseenter.native.stop="isBottomLeftShow =! isBottomLeftShow"
                       @mouseleave.native.stop="isBottomLeftShow =! isBottomLeftShow">BL
            </we-button>
            <we-button size="small" class="tooltip-btn"
                       @mouseenter.native.stop="isBottomShow =! isBottomShow"
                       @mouseleave.native.stop="isBottomShow =! isBottomShow">Bottom
            </we-button>
            <we-button size="small" class="tooltip-btn"
                       @mouseenter.native.stop="isBottomRightShow =! isBottomRightShow"
                       @mouseleave.native.stop="isBottomRightShow =! isBottomRightShow">BR
            </we-button>
          </div>

          <!--TopLeft-->
          <we-animation name="fadeIn">
            <template v-if="isTopLeftShow">
              <div class="we-tooltip we-tooltip-type-dark" style="top: 48px; left: 373px;">
                <div class="we-tooltip-inner">
                  <div class="we-tooltip-inner-content">文字提示内容</div>
                </div>
                <div class="we-tooltip-arrow we-tooltip-arrow-topLeft"></div>
              </div>
            </template>
          </we-animation>
          <!--/TopLeft-->
          <!--Top-->
          <we-animation name="fadeIn">
            <template v-if="isTopShow">
              <div class="we-tooltip we-tooltip-type-dark" style="top: 48px; left: 420px;">
                <div class="we-tooltip-inner">
                  <div class="we-tooltip-inner-content">文字提示内容</div>
                </div>
                <div class="we-tooltip-arrow we-tooltip-arrow-top"></div>
              </div>
            </template>
          </we-animation>
          <!--/Top-->
          <!--TopRight-->
          <we-animation name="fadeIn">
            <template v-if="isTopRightShow">
              <div class="we-tooltip we-tooltip-type-dark" style="top: 48px; left: 469px;">
                <div class="we-tooltip-inner">
                  <div class="we-tooltip-inner-content">文字提示内容</div>
                </div>
                <div class="we-tooltip-arrow we-tooltip-arrow-topRight"></div>
              </div>
            </template>
          </we-animation>
          <!--/TopRight-->

          <!--RightTop-->
          <we-animation name="fadeIn">
            <template v-if="isRightTopShow">
              <div class="we-tooltip we-tooltip-type-dark" style="top: 136px; left: 652px;">
                <div class="we-tooltip-inner">
                  <div class="we-tooltip-inner-content">文字提示内容</div>
                </div>
                <div class="we-tooltip-arrow we-tooltip-arrow-rightTop"></div>
              </div>
            </template>
          </we-animation>
          <!--/RightTop-->
          <!--Right-->
          <we-animation name="fadeIn">
            <template v-if="isRightShow">
              <div class="we-tooltip we-tooltip-type-dark" style="top: 176px; left: 652px;">
                <div class="we-tooltip-inner">
                  <div class="we-tooltip-inner-content">文字提示内容</div>
                </div>
                <div class="we-tooltip-arrow we-tooltip-arrow-right"></div>
              </div>
            </template>
          </we-animation>
          <!--/Right-->
          <!--RightBottom-->
          <we-animation name="fadeIn">
            <template v-if="isRightBottomShow">
              <div class="we-tooltip we-tooltip-type-dark" style="top: 220px; left: 652px;">
                <div class="we-tooltip-inner">
                  <div class="we-tooltip-inner-content">文字提示内容</div>
                </div>
                <div class="we-tooltip-arrow we-tooltip-arrow-rightBottom"></div>
              </div>
            </template>
          </we-animation>
          <!--/RightBottom-->

          <!--BottomLeft-->
          <we-animation name="fadeIn">
            <template v-if="isBottomLeftShow">
              <div class="we-tooltip we-tooltip-type-dark" style="top: 305px; left: 373px;">
                <div class="we-tooltip-inner">
                  <div class="we-tooltip-inner-content">文字提示内容</div>
                </div>
                <div class="we-tooltip-arrow we-tooltip-arrow-bottomLeft"></div>
              </div>
            </template>
          </we-animation>
          <!--/BottomLeft-->
          <!--Bottom-->
          <we-animation name="fadeIn">
            <template v-if="isBottomShow">
              <div class="we-tooltip we-tooltip-type-dark" style="top: 305px; left: 420px;">
                <div class="we-tooltip-inner">
                  <div class="we-tooltip-inner-content">文字提示内容</div>
                </div>
                <div class="we-tooltip-arrow we-tooltip-arrow-bottom"></div>
              </div>
            </template>
          </we-animation>
          <!--/Bottom-->
          <!--BottomRight-->
          <we-animation name="fadeIn">
            <template v-if="isBottomRightShow">
              <div class="we-tooltip we-tooltip-type-dark" style="top: 305px; left: 469px;">
                <div class="we-tooltip-inner">
                  <div class="we-tooltip-inner-content">文字提示内容</div>
                </div>
                <div class="we-tooltip-arrow we-tooltip-arrow-bottomRight"></div>
              </div>
            </template>
          </we-animation>
          <!--/BottomRight-->

          <!--LeftTop-->
          <we-animation name="fadeIn">
            <template v-if="isLeftTopShow">
              <div class="we-tooltip we-tooltip-type-dark" style="top: 136px; left: 188px;">
                <div class="we-tooltip-inner">
                  <div class="we-tooltip-inner-content">文字提示内容</div>
                </div>
                <div class="we-tooltip-arrow we-tooltip-arrow-leftTop"></div>
              </div>
            </template>
          </we-animation>
          <!--/LeftTop-->
          <!--Left-->
          <we-animation name="fadeIn">
            <template v-if="isLeftShow">
              <div class="we-tooltip we-tooltip-type-dark" style="top: 176px; left: 188px;">
                <div class="we-tooltip-inner">
                  <div class="we-tooltip-inner-content">文字提示内容</div>
                </div>
                <div class="we-tooltip-arrow we-tooltip-arrow-left"></div>
              </div>
            </template>
          </we-animation>
          <!--/Left-->
          <!--LeftBottom-->
          <we-animation name="fadeIn">
            <template v-if="isLeftBottomShow">
              <div class="we-tooltip we-tooltip-type-dark" style="top: 220px; left: 188px; max-width: 300px">
                <div class="we-tooltip-inner">
                  <div class="we-tooltip-inner-content">文字提示内容</div>
                </div>
                <div class="we-tooltip-arrow we-tooltip-arrow-leftBottom"></div>
              </div>
            </template>
          </we-animation>
          <!--/LeftBottom-->
        </div>
      </div>
    </div>


    <div class="first-title">主题</div>
    <div class="module-main">
      <div class="module-content">
        <we-button size="small" class="tooltip-btn"
                   @mouseenter.native.stop="isDarkShow =! isDarkShow"
                   @mouseleave.native.stop="isDarkShow =! isDarkShow">Dark
        </we-button>
        <we-button size="small" class="tooltip-btn"
                   @mouseenter.native.stop="isLightShow =! isLightShow"
                   @mouseleave.native.stop="isLightShow =! isLightShow">Light
        </we-button>
        <!--Dark-->
        <we-animation name="fadeIn">
          <template v-if="isDarkShow">
            <div class="we-tooltip we-tooltip-type-dark" style="top: 359px; left: 300px;">
              <div class="we-tooltip-inner">
                <div class="we-tooltip-inner-content">文字提示内容</div>
              </div>
              <div class="we-tooltip-arrow we-tooltip-arrow-topLeft"></div>
            </div>
          </template>
        </we-animation>
        <!--/Dark-->
        <!--Light-->
        <we-animation name="fadeIn">
          <template v-if="isLightShow">
            <div class="we-tooltip we-tooltip-type-light" style="top: 359px; left: 355px;">
              <div class="we-tooltip-inner">
                <div class="we-tooltip-inner-content">文字提示内容</div>
              </div>
              <div class="we-tooltip-arrow we-tooltip-arrow-topLeft"></div>
            </div>
          </template>
        </we-animation>
        <!--/Light-->
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
    margin: 5px 3px;
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
