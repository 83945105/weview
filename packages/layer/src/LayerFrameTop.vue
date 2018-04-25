<template>
  <div :class="[topClass]">
    <slot>
      <h3>{{label}}</h3>
      <i v-if="showCloseIcon" :class="[`${prefixCls}-icon`, `${prefixCls}-shanchu`, `${prefixCls}-layer-frame-close`]"
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
      label: {
        type: String,
        default: '详情'
      },
      showCloseIcon: {
        type: Boolean,
        default: true
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
