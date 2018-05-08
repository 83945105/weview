<template>
  <div
    v-show="visible"
    :class="[messageClass, messageBgClass, animationClass, centerClass]"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
    role="alert"
  >
    <i :class="[iconClass, iconTypeClass]"></i>
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

  import {MessageType} from './message.js';

  export default {

    name: `${Conf.prefixCls}-message`,

    componentName: `${Conf.prefixNameCls}Message`,

    mixins: [Conf],

    data() {
      return {
        animation: false,
        visible: false,
        timer: undefined
      };
    },

    props: {
      value: Boolean,
      message: String,
      type: {
        type: String,
        default: 'default'
      },
      duration: {
        type: Number,
        default: 3000
      },
      showClose: Boolean,
      escCloseable: {
        type: Boolean,
        default: true
      },
      onClose: {
        type: Function,
        default() {
          return true;
        }
      },
      html: Boolean,
      center: Boolean
    },

    computed: {
      typeKeys() {
        return Object.keys(MessageType);
      },
      messageClass() {
        return `${this.prefixCls}-message`;
      },
      messageBgClass() {
        let cls = MessageType.default.cls;
        for (let type of this.typeKeys) {
          if (this.type === type) {
            cls = MessageType[type].cls;
            break;
          }
        }
        return cls;
      },
      animationClass() {
        return this.animation ?
          `${this.prefixCls}-message-animation ${this.prefixCls}-message-animation-open` :
          `${this.prefixCls}-message-animation ${this.prefixCls}-message-animation-close`;
      },
      iconClass() {
        return `${this.prefixCls}-icon`;
      },
      iconTypeClass() {
        let ic = MessageType.default.icon;
        for (let type of this.typeKeys) {
          if (this.type === type) {
            ic = MessageType[type].icon;
            break;
          }
        }
        return ic;
      },
      deleteClass() {
        return `${this.prefixCls}-shanchu ${this.prefixCls}-message-button-close`;
      },
      textClass() {
        return `${this.prefixCls}-message-text`;
      },
      centerClass() {
        return this.center ? `is-center` : undefined;
      }
    },

    watch: {
      value(v) {
        if (v) {
          this.open();
        } else {
          this.close();
        }
      },
      visible(v) {
        this.$emit('input', v);
      }
    },

    methods: {
      open() {
        if (!this.visible) {
          this.animation = true;
          this.visible = true;
          this.startTimer();
        }
      },
      close() {
        if (this.visible) {
          this.clearTimer();
          this.animation = false;
          setTimeout(() => {
            this.visible = false;
          }, 200);
        }
      },
      handleClose(e) {
        if (this.onClose(e) !== false) {
          this.close();
        }
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            this.close();
          }, this.duration);
        }
      },
      clearTimer() {
        clearTimeout(this.timer);
      },
      EscClose(e) {
        if (this.visible && this.escCloseable) {
          if (e.keyCode === 27) {
            this.close();
          }
        }
      },
      destroy() {
        this.$emit('destroy', this.id);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
    },

    created() {
      if (this.value) {
        this.open();
      }
    },

    mounted() {
      document.addEventListener('keydown', this.EscClose);
    },

    beforeDestroy() {
      document.removeEventListener('keydown', this.EscClose);
    }
  }
</script>
