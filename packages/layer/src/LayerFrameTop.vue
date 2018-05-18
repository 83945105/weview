<template>
  <div :class="[topClass]">
    <slot>
      <h3 :class="[titleClass]">{{label}}</h3>
      <div v-if="showCloseIcon" class="we-layer-frame-header-close" @click.stop="handleClose">
        <icon name="close"></icon>
      </div>
    </slot>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import Emitter from '../../../src/mixins/emitter';

  import WeIcon from '../../icon/src/Icon.vue';

  export default {
    components:{Icon: WeIcon},

    name: `${Conf.prefixCls}-layer-frame-header`,

    componentName: `${Conf.prefixNameCls}LayerFrameHeader`,

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
        return `${this.prefixCls}-layer-frame-header`;
      },
      titleClass(){
        return `${this.prefixCls}-layer-frame-header-title`;
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
