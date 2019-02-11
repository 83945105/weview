<template>
  <transition :name="`${prefixCls}-animation-bounce`"
              @before-enter="beforeEnter"
              @after-leave="afterLeave">
    <div v-show="visible"
         :id="id"
         :class="[`${prefixCls}-message`, messageBgClass,
         {
          'is-center': center
         },
         customClass]"
         :style="{
          left: `${left}px`,
          top: `${top}px`,
          zIndex: nextZIndex
         }"
         @mouseenter="clearTimer"
         @mouseleave="startTimer"
    >
      <icon v-if="iconPosition === 'left'" :name="iconName" :type="iconType" size="large"
            :class="[`${prefixCls}-message-icon`, 'is-left']"></icon>
      <slot>
        <div v-if="!html" :class="`${prefixCls}-message-text`">{{content}}</div>
        <div v-else v-html="content" :class="`${prefixCls}-message-text`"></div>
      </slot>
      <icon v-if="iconPosition === 'right'" :name="iconName" :type="iconType" size="large"
            :class="[`${prefixCls}-message-icon`, 'is-right']"></icon>
      <icon v-if="showClose" name="close" :class="`${prefixCls}-message-button-close`"
            @click.native="handleClose"></icon>
    </div>
  </transition>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';
  import Global from '../../src/mixins/global.js';
  import PopupManager from '../../src/utils/popup.js';
  import {MessageType, getId, addInstance, removeInstance} from './message.js';
  import Icon from '../../icon/src/Icon.vue';

  export default {

    components: {Icon: Icon},

    name: `${Conf.prefixCls}-message`,

    optionName: `message`,

    componentName: `${Conf.prefixNameCls}Message`,

    mixins: [Conf, Global],

    props: {
      value: Boolean,
      content: String,
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
        id: undefined,
        visible: true,
        nextZIndex: this.zIndex,
        timer: undefined,
        width: 0,
        height: 0,
        left: -10000,
        top: -10000
      };
    },

    computed: {
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
      iconName() {
        return MessageType[this.type].iconName;
      },
      iconType() {
        return MessageType[this.type].iconType;
      }
    },

    watch: {
      value(val) {
        this.visible = val;
      },
      visible(val) {
        this.$emit('input', val);
        if (val) {
          this.startTimer();
          this.nextZIndex = this.zIndex ? this.zIndex : PopupManager.nextZIndex();
        } else {
          this.clearTimer();
        }
      }
    },

    methods: {
      beforeEnter(el) {
        this.left = (this.getWindowWidth() - (this.width ? this.width : el.offsetWidth)) / 2;
        this.top = (this.getWindowHeight() - (this.height ? this.height : el.offsetHeight)) / 2;
      },
      afterLeave(el) {
        this.$emit('afterLeave', el, this);
      },
      close() {
        if (!this.visible) return;
        this.visible = false;
        this.onClose && this.onClose(this);
        this.$emit('close', this);
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
      escClose(e) {
        if (this.visible && this.escCloseable) {
          if (e.keyCode === 27 || e.which === 27) {
            this.close();
          }
        }
      },
      destroy() {
        this.$el.parentNode.removeChild(this.$el);
        this.$destroy(true);
      }
    },

    beforeDestroy() {
      document.removeEventListener('keydown', this.escClose);
    },

    destroyed() {
      removeInstance(this);
    },

    mounted() {
      document.addEventListener('keydown', this.escClose);
      this.width = this.$el.offsetWidth;
      this.height = this.$el.offsetHeight;
      this.visible = false;

      this.id = getId();
      addInstance(this);
      this.$nextTick(() => {
        this.visible = this.value;
      });
    }

  }
</script>
