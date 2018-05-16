<template>
  <div>
    <div class="we-layer-mask-bg"></div>
    <div class="we-layer-prompt is-position-auto" style="width: 100%;height: 100%">
      <div class="we-layer-prompt-top move layer-prompt-top">
        <div class="we-layer-prompt-top-title">信息提示</div>
        <div class="we-layer-prompt-top-close">
          <we-icon name="close"></we-icon>
        </div>
      </div>
      <div class="we-layer-prompt-content"
           style="width: 100%;height: 80%;background-color: #3db670;border: 1px solid red">
        <div style="width: 500px;height: 100px;">+4566+46464646</div>
        <!--<iframe frameborder="0" name="layerFrame" scrolling="auto" width="100%" :height="frameHeight" src="http://wwww.baidu.com"></iframe>-->
      </div>
      <div class="we-layer-prompt-bottom layer-prompt-bottom">
        <we-button type="primary">确定</we-button>
        <we-button>取消</we-button>
      </div>
    </div>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import WeButton from '../../button/src/Button';

  export default {

    components: {WeButton},

    name: `${Conf.prefixCls}-layer`,

    componentName: `${Conf.prefixNameCls}Layer`,

    optionName: `layer`,

    data() {
      return {
        widthUnit: 'px',
        heightUnit: 'px'
      };
    },

    props: {
      width: {
        type: [Number, String],
        default: 300
      },
      height: {
        type: [Number, String],
        default: 200
      }
    },

    computed: {
      _width() {

      },
      contentWidth() {
      }
    }


  }
</script>
