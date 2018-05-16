<template>
  <div
    v-show="visible"
    :class="[messageClass, messageBgClass, animationClass, centerClass, customClass]"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
    role="alert"
  >
    <icon v-if="iconPosition === 'left'" :name="iconName" :type="iconType" size="large" :class="[iconClass, iconPositionClass]"></icon>
    <slot>
      <div v-if="!html" :class="[textClass]">{{message}}</div>
      <div v-else v-html="message" :class="[textClass]"></div>
    </slot>
    <icon v-if="iconPosition === 'right'" :name="iconName" :type="iconType" size="large" :class="[iconClass, iconPositionClass]"></icon>
    <icon v-if="showClose" name="close" :class="deleteClass" @click.native="handleClose"></icon>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import {MessageType} from './message.js';
  import Icon from '../../icon/src/Icon.vue';

  export default {

    components: {Icon: Icon},

    name: `${Conf.prefixCls}-message`,

    optionName: `message`,

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
      center: Boolean,
      customClass: String,
      iconPosition: {
        type: String,
        default: 'left'
      }
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
      deleteClass() {
        return `${this.prefixCls}-message-button-close`;
      },
      textClass() {
        return `${this.prefixCls}-message-text`;
      },
      centerClass() {
        return this.center ? `is-center` : undefined;
      },
      iconClass() {
        return `${this.prefixCls}-message-icon`;
      },
      iconName() {
        return MessageType[this.type].iconName;
      },
      iconType() {
        return MessageType[this.type].iconType;
      },
      iconPositionClass() {
        return this.iconPosition === 'left' ? `is-left` :
          this.iconPosition === 'right' ? `is-right` : undefined;
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
            this.onClose(this);
            this.$emit('close', this);
          }, 200);
        }
      },
      handleClose(e) {
        this.close();
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
