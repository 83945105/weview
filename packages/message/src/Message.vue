<template>
  <animation :name="_animationName" @before-enter="animationBeforeEnter" @after-leave="animationAfterLeave">
    <div v-show="visible"
         :class="[`${prefixCls}-message`, messageBgClass,
         {
          'is-center': center
         },
         customClass]"
         :style="{
          left: `${x}px`,
          top: `${y}px`,
          zIndex: nextZIndex
         }"
         @mouseenter="clearTimer"
         @mouseleave="startTimer"
    >
      <icon v-if="iconPosition === 'left'" :name="iconName" :type="iconType" size="large"
            :class="[`${prefixCls}-message-icon`, 'is-left']"></icon>
      <slot>
        <div v-if="!html" :class="`${prefixCls}-message-text`">{{message}}</div>
        <div v-else v-html="message" :class="`${prefixCls}-message-text`"></div>
      </slot>
      <icon v-if="iconPosition === 'right'" :name="iconName" :type="iconType" size="large"
            :class="[`${prefixCls}-message-icon`, 'is-right']"></icon>
      <icon v-if="showClose" name="close" :class="`${prefixCls}-message-button-close`"
            @click.native="handleClose"></icon>
    </div>
  </animation>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';
  import Global from '../../src/mixins/global.js';
  import PopupManager from '../../src/utils/popup.js';

  import {MessageType} from './message.js';
  import Icon from '../../icon/src/Icon.vue';
  import Animation from '../../animation/src/Animation.vue';

  export default {

    components: {Icon: Icon, Animation: Animation},

    name: `${Conf.prefixCls}-message`,

    optionName: `message`,

    componentName: `${Conf.prefixNameCls}Message`,

    mixins: [Conf, Global],

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
        default: 'left',
        validator(value) {
          return ['left', 'right'].indexOf(value) !== -1;
        }
      },
      animationName: String,
      zIndex: Number
    },

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

    computed: {
      nextZIndex() {
        return this.zIndex || this.visible ? PopupManager.nextZIndex() : 0;
      },
      typeKeys() {
        return Object.keys(MessageType);
      },
      messageBgClass() {
        let cls = MessageType.default.cls;
        for (let idx in this.typeKeys) {
          if (this.type === this.typeKeys[idx]) {
            cls = MessageType[this.typeKeys[idx]].cls;
            break;
          }
        }
        return cls;
      },
      centerClass() {
        return this.center ? `is-center` : undefined;
      },
      iconName() {
        return MessageType[this.type].iconName;
      },
      iconType() {
        return MessageType[this.type].iconType;
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
        if (this.timer) {
          window.clearTimeout(this.timer);
          this.timer = undefined;
        }
        if (this.duration > 0) {
          this.timer = setTimeout(() => this.close(), this.duration);
        }
      },
      clearTimer() {
        if (!this.timer) return;
        window.clearTimeout(this.timer);
      },
      EscClose(e) {
        if (this.visible && this.escCloseable) {
          if (e.keyCode === 27 || e.which === 27) {
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
