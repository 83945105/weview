<template>
  <div :class="[topClass]">
    <slot>
      <h3>{{title}}</h3>
      <i class="weiconfont we-icon-shanchu we-layer-frame-close"
         @click.stop="handleClose"
      ></i>
    </slot>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import Emitter from '../../../src/mixins/emitter';

  export default {

    name: `${Conf.prefixCls}-layer-frame-top`,

    componentName: `${Conf.prefixNameCls}LayerFrameTop`,

    mixins: [Conf, Emitter],

    props: {
      title: {
        type: String,
        default: '详情'
      }
    },

    computed: {
      topClass() {
        return `${this.prefixCls}-layer-frame-title`;
      }
    },

    methods: {
      handleClose(e) {
        this.$emit('close', e);
        this.dispatch(`${this.prefixNameCls}LayerFrame`, 'handleClose', e);
      }
    }

  }
</script>
