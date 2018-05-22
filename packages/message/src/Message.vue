<template>
  <animation :name="_animationName" @before-enter="animationBeforeEnter" @after-leave="animationAfterLeave">
    <div v-show="visible"
         :class="[messageClass, messageBgClass, centerClass, customClass]"
         :style="style"
         @mouseenter="clearTimer"
         @mouseleave="startTimer"
         role="alert"
    >
      <icon v-if="iconPosition === 'left'" :name="iconName" :type="iconType" size="large"
            :class="[iconClass, iconPositionClass]"></icon>
      <slot>
        <div v-if="!html" :class="[textClass]">{{message}}</div>
        <div v-else v-html="message" :class="[textClass]"></div>
      </slot>
      <icon v-if="iconPosition === 'right'" :name="iconName" :type="iconType" size="large"
            :class="[iconClass, iconPositionClass]"></icon>
      <icon v-if="showClose" name="close" :class="[deleteClass]" @click.native="handleClose"></icon>
    </div>
  </animation>
</template>

<script>

  import Conf from '../../../src/mixins/conf.js';
  import Global from '../../../src/mixins/global.js';

  import {MessageType} from './message.js';
  import Icon from '../../icon/src/Icon.vue';
  import Animation from '../../animation/src/Animation.vue';

  export default {

    components: {Icon: Icon, Animation: Animation},

    name: `${Conf.prefixCls}-message`,

    optionName: `message`,

    componentName: `${Conf.prefixNameCls}Message`,

    mixins: [Conf, Global],

    data() {
      return {
        visible: true,
        timer: undefined,
        w: 0,
        h: 0,
        x: -10000,
        y: -10000
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
      onClose: Function,
      html: Boolean,
      center: Boolean,
      customClass: String,
      iconPosition: {
        type: String,
        default: 'left'
      },
      animationName: String
    },

    computed: {
      typeKeys() {
        return Object.keys(MessageType);
      },
      style() {
        return {
          left: `${this.x}px`,
          top: `${this.y}px`
        };
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
      },
      _animationName() {
        if (this.animationName !== undefined) {
          return this.animationName;
        } else {
          return 'bounce';
        }
      }
    },

    watch: {
      value(v) {
        this.visible = v;
      },
      visible(v) {
        if (v) {
          this.startTimer();
        } else {
          this.clearTimer();
        }
      }
    },

    methods: {
      close() {
        if (this.visible) {
          this.visible = false;
          this.$emit('input', false);
          this.onClose && this.onClose();
          this.$emit('close');
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
      },
      animationBeforeEnter(el) {
        this.x = (this.getWindowWidth() - (this.w ? this.w : el.offsetWidth)) / 2;
        this.y = (this.getWindowHeight() - (this.h ? this.h : el.offsetHeight)) / 2;
      },
      animationAfterLeave(el) {
        this.$emit('animationAfterLeave', el, this);
      }
    },

    mounted() {
      document.addEventListener('keydown', this.EscClose);
      this.w = this.$el.offsetWidth;
      this.h = this.$el.offsetHeight;
      this.visible = false;
      this.$nextTick(() => {
        this.visible = this.value;
      });
    },

    beforeDestroy() {
      document.removeEventListener('keydown', this.EscClose);
    }
  }
</script>
