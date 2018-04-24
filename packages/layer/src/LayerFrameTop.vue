<template>
  <div class="we-layer-frame-title">
    <slot>
      <h3>{{title}}</h3>
      <i class="weiconfont we-icon-shanchu we-layer-frame-close"
         @click.stop="handleClose"
      ></i>
    </slot>
  </div>
</template>

<script>

  import Emitter from '../../../src/mixins/emitter';

  export default {

    name: "we-layer-frame-top",

    componentName: 'WeLayerFrameTop',

    mixins: [Emitter],

    props: {
      title: {
        type: String,
        default: '详情'
      }
    },

    methods: {
      handleClose(e) {
        this.$emit('close', e);
        this.dispatch('WeLayerFrame', 'handleClose', e);
      }
    }

  }
</script>
