<template>
  <div
    :class="[bottomClass]"
  >
    <slot>
      <we-button type="primary" @click="handleConfirm">{{confirmButtonText}}</we-button>
      <we-button @click="handleCancel">{{cancelButtonText}}</we-button>
    </slot>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import Emitter from '../../../src/mixins/emitter';

  import WeButton from '../../button/src/Button';

  export default {

    components: {WeButton},

    name: `${Conf.prefixCls}-layer-frame-bottom`,

    componentName: `${Conf.prefixNameCls}LayerFrameBottom`,

    mixins: [Conf, Emitter],

    props: {
      confirmButtonText: {
        type: String,
        default: '确定'
      },
      cancelButtonText: {
        type: String,
        default: '取消'
      }
    },

    computed: {
      bottomClass() {
        return `${this.prefixCls}-layer-frame-btn ${this.prefixCls}-tac`;
      }
    },

    methods: {
      handleConfirm(e) {
        this.$emit('confirm', e, () => {
          this.dispatch(`${this.prefixNameCls}LayerFrame`, 'handleClose', e);
        });
      },
      handleCancel(e) {
        this.$emit('cancel', e);
        this.dispatch(`${this.prefixNameCls}LayerFrame`, 'handleClose', e);
      }
    }

  }
</script>
