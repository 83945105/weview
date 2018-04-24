<template>
  <div class="we-layer-frame-title">
    <h3>{{title}}</h3>
    <i class="weiconfont we-icon-shanchu we-layer-frame-close"></i>
  </div>
</template>

<script>

  import Emitter from '../../../src/mixins/emitter';

  export default {

    name: "layer-frame-top",

    mixins: [Emitter],

    props: {
      title: {
        type: String,
        default: '详情'
      }
    }

  }
</script>
