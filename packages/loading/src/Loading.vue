<template>
  <transition name="fade"
              @before-enter="beforeEnter"
              @after-leave="afterLeave">
    <div v-show="visible"
         :id="id"
         :class="[
         `${prefixCls}-loading`,
          `${prefixCls}-loading-mask`,
          `${prefixCls}-loading-mask-black`,
          {'is-full': fullscreen}
         ]"
         :style="{
          'backgroundColor': this.background,
          zIndex: nextZIndex
         }">
      <div :class="`${prefixCls}-loading-spinner`">
        <slot>
          <div :class="[`${prefixCls}-loading-spinner-inner`, `${prefixCls}-loading-spinner-inner-size-${size}`]">
            <div :class="`${prefixCls}-loading-spinner-inner-icon`">
              <slot name="logo"></slot>
            </div>
            <svg :class="`${prefixCls}-loading-spinner-inner-circular`" viewBox="25 25 50 50">
              <circle class="icon" cx="50" cy="50" r="20" fill="none"/>
            </svg>
          </div>
        </slot>
        <div v-if="text !== void 0" :class="`${prefixCls}-loading-spinner-text`">{{text}}</div>
      </div>
    </div>
  </transition>
</template>

<script>

  import PopupManager from '../../src/utils/popup.js';
  import {hasClass, addClass, removeClass, getStyle} from '../../src/utils/dom.js';
  import Conf from '../../src/mixins/conf.js';
  import {getId, addInstance, removeInstance} from './loading.js';

  import Icon from '../../icon/src/Icon.vue';

  export default {

    components: {Icon: Icon},

    name: `${Conf.prefixCls}-loading`,

    componentName: `${Conf.prefixNameCls}Loading`,

    optionName: `loading`,

    mixins: [Conf],

    props: {
      value: Boolean,//是否显示加载特效
      text: String,//加载文字提示
      size: {//default large small mini
        type: String,
        default() {
          return 'default';
        }
      },
      background: String,//背景颜色
      fullscreen: Boolean,//是否全屏
      zIndex: Number
    },

    data() {
      return {
        id: undefined,
        visible: false,
        nextZIndex: this.zIndex,
      };
    },

    watch: {
      value(val) {
        this.visible = val;
      },
      visible(val) {
        this.$emit('input', val);
        if (val) {
          if (this.$el && this.$el.parentNode) {
            if (this.$el.parentNode.dataset.loadingIndex) {
              this.nextZIndex = this.$el.parentNode.dataset.loadingIndex;
            } else {
              this.nextZIndex = this.zIndex ? this.zIndex : PopupManager.nextZIndex();
              this.$el.parentNode.dataset.loadingIndex = this.nextZIndex;
            }
          } else {
            this.nextZIndex = this.zIndex ? this.zIndex : PopupManager.nextZIndex();
          }
        }
      }
    },

    methods: {
      beforeEnter() {
        this.addParentScrollClass();
      },
      afterLeave(el) {
        this.removeParentScrollClass();
        this.$emit('afterLeave', el, this);
      },
      addParentScrollClass() {
        let parent = this.fullscreen ? document.body : (this.$el.parentNode || document.body);
        this.$el.originalPosition = getStyle(parent, 'position');
        this.$el.originalOverflow = getStyle(parent, 'overflow');
        if (this.$el.originalPosition !== 'absolute' && this.$el.originalPosition !== 'fixed' && !hasClass(parent, `${this.prefixCls}-loading-parent-relative`)) {
          addClass(parent, `${this.prefixCls}-loading-parent-relative`);
        }
        if (this.fullscreen && !hasClass(parent, `${this.prefixCls}-loading-parent-hidden`)) {
          addClass(parent, `${this.prefixCls}-loading-parent-hidden`);
        }
      },
      removeParentScrollClass() {
        let parent = this.fullscreen ? document.body : (this.$el.parentNode || document.body);
        removeClass(parent, `${this.prefixCls}-loading-parent-hidden`);
        removeClass(parent, `${this.prefixCls}-loading-parent-relative`);
      },
      open() {
        if (this.visible) return;
        this.visible = true;
      },
      close() {
        if (!this.visible) return;
        this.visible = false;
        this.$emit('close', this);
      },
      destroy() {
        this.$el.parentNode.removeChild(this.$el);
        this.$destroy(true);
      }
    },

    destroyed() {
      removeInstance(this);
    },

    mounted() {
      this.id = getId();
      addInstance(this);
      this.visible = this.value;
    }

  }
</script>
