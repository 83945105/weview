<template>
  <div
    v-show="visible"
    :class="[messageClass, messageBgClass, animationClass]"
  >
    <i
      class="we-chenggong we-message-icon we-message-icon-success"
      :class="[iconClass]"
    ></i>
    <slot>
      <div v-if="!html" :class="[textClass]">{{message}}</div>
      <div v-else v-html="message" :class="[textClass]"></div>
    </slot>
    <i v-if="showClose"
       :class="[iconClass, deleteClass]"
       @click="handleClose"
    ></i>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  export default {
    name: `${Conf.prefixCls}-message`,

    componentName: `${Conf.prefixNameCls}Message`,

    mixins: [Conf],

    data() {
      return {
        visible: this.value
      };
    },

    props: {
      message: String,
      value: Boolean,
      showClose: Boolean,
      html: Boolean
    },

    computed: {
      messageClass() {
        return `${this.prefixCls}-message`;
      },
      messageBgClass() {
        return `${this.prefixCls}-message-bg`;
      },
      animationClass() {
        return this.value ?
          `${this.prefixCls}-message-animation ${this.prefixCls}-message-animation-open` :
          `${this.prefixCls}-message-animation ${this.prefixCls}-message-animation-close`;
      },
      iconClass() {
        return `${this.prefixCls}-icon`;
      },
      deleteClass() {
        return `${this.prefixCls}-shanchu ${this.prefixCls}-message-button-close`;
      },
      textClass() {
        return `${this.prefixCls}-message-text`;
      }
    },

    watch: {
      value(v) {
        if (v) {
          this.visible = v;
        } else {
          setTimeout(() => {
            this.visible = v;
          }, 200);
        }
      },
      visible(v) {
        this.$emit('input', v);
      }
    },

    methods: {
      handleClose(e) {
        this.$emit('input', false);
      }
    }
  }
</script>
