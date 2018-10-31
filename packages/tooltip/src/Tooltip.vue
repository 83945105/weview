<!--<template>
  <div :class="[`${prefixCls}-tooltip-rel`]">
    <div ref="reference"
         @mouseenter="handleMouseEnterReference"
         @mouseleave="handleMouseLeaveReference"
         @mousedown="handleMouseDownReference"
         @mouseup="handleMouseUpReference"
         @click="handleClickReference"
    >
      <slot></slot>
    </div>
    <transition name="fade">
      <div v-show="!disabled && popperVisible"
           ref="popper"
           :class="[
            `${prefixCls}-tooltip`,
            effect === 'dark' ? `${prefixCls}-tooltip-type-dark` : `${prefixCls}-tooltip-type-light`
           ]"
           :style="{
            maxWidth: maxWidth ? !isNaN(maxWidth) ? `${maxWidth}px` : maxWidth : undefined,
            zIndex: this.zIndex
           }"
           v-transfer-dom="{value: appendToBody}"
           @mouseenter="handleMouseEnterPopper"
           @mouseleave="handleMouseLeavePopper"
      >
        <slot name="panel">
          <div :class="`${prefixCls}-tooltip-inner`">
            <div :class="`${prefixCls}-tooltip-inner-content`">
              <slot name="content">{{content}}</slot>
            </div>
          </div>
        </slot>
      </div>
    </transition>
  </div>
</template>-->

<script>

  import Vue from 'vue';
  import Conf from '../../src/mixins/conf.js';
  import Popper from '../../src/mixins/popper.js';
  import PopupManager from '../../src/utils/popup.js';
  import TransferDom from '../../src/directives/transfer-dom.js';
  import {hasClass} from "../../src/utils/dom.js";
  import {onEventListener, offEventListener} from "../../src/utils/dom";

  export default {

    name: `${Conf.prefixCls}-tooltip`,

    componentName: `${Conf.prefixNameCls}Tooltip`,

    optionName: `tooltip`,

    directives: {TransferDom},

    mixins: [Conf, Popper],

    props: {
      trigger: {//触发方式 click - 点击 focus 聚焦 hover 悬浮 manual 手动
        type: String,
        default: 'hover',
        validator(value) {
          return ['click', 'focus', 'hover'].indexOf(value) !== -1;
        }
      },
      effect: {
        type: String,//主题 dark light
        default: 'dark',
        validator(value) {
          return ['dark', 'light'].indexOf(value) !== -1;
        }
      },
      content: [String, Number],//显示内容
      maxWidth: [Number, String],//最大宽度
      placement: {//出现的位置
        type: String,
        default: 'bottom',
        validator(value) {
          return [
            "top",
            "top-start",
            "top-end",
            "bottom",
            "bottom-start",
            "bottom-end",
            "left",
            "left-start",
            "left-end",
            "right",
            "right-start",
            "right-end"
          ].indexOf(value) !== -1;
        }
      },
      disabled: Boolean,//是否禁用
      openDelay: {//出现延迟
        type: Number,
        default: 0
      },
      hideDelay: {//隐藏延迟, 为0时不会自动隐藏
        type: Number,
        default: 100
      },
      manual: Boolean,//手动模式,开启后mouseenter、mouseleave 事件将不会生效
      appendToBody: {//是否插入到body下
        type: Boolean,
        default() {
          return !this.$WEVIEW || this.$WEVIEW.appendToBody === '' ? false : this.$WEVIEW.appendToBody;
        }
      }
    },

    data() {
      return {
        isManual: this.manual || this.trigger === 'manual',
        delayIndex: undefined,
        popperVM: undefined
      };
    },

    computed: {
      zIndex() {
        if (this.popperVisible) {
          return PopupManager.nextZIndex();
        } else {
          return 0;
        }
      }
    },

    methods: {
      onUpdate(e) {
        let referenceOffset = e.offsets.reference;
        let popperOffset = e.offsets.popper;
        let popperEl = e.instance.popper;
        let arrowCls = this.prefixCls + '-tooltip-arrow';

        let arrowEl;
        if (hasClass(popperEl.lastElementChild, arrowCls)) {
          arrowEl = popperEl.lastElementChild;
        } else {
          arrowEl = document.createElement("div");
          e.instance.popper.appendChild(arrowEl);
        }
        switch (e.placement) {
          case 'top':
            arrowEl.className = this.prefixCls + '-tooltip-arrow we-tooltip-arrow-top';
            arrowEl.style = undefined;
            arrowEl.style.left = `${referenceOffset.left - popperOffset.left + referenceOffset.width / 2 - 8}px`;
            arrowEl.style.bottom = `${4}px`;
            break;
          case 'top-start':
            arrowEl.className = this.prefixCls + '-tooltip-arrow we-tooltip-arrow-top';
            arrowEl.style = undefined;
            arrowEl.style.left = `${referenceOffset.left - popperOffset.left + 10}px`;
            arrowEl.style.bottom = `${4}px`;
            break;
          case 'top-end':
            arrowEl.className = this.prefixCls + '-tooltip-arrow we-tooltip-arrow-top';
            arrowEl.style = undefined;
            arrowEl.style.left = `${referenceOffset.left - popperOffset.left + referenceOffset.width - 26}px`;
            arrowEl.style.bottom = `${4}px`;
            break;
          case 'bottom':
            arrowEl.className = this.prefixCls + '-tooltip-arrow we-tooltip-arrow-bottom';
            arrowEl.style = undefined;
            arrowEl.style.left = `${referenceOffset.left - popperOffset.left + referenceOffset.width / 2 - 8}px`;
            arrowEl.style.top = `${4}px`;
            break;
          case 'bottom-start':
            arrowEl.className = this.prefixCls + '-tooltip-arrow we-tooltip-arrow-bottom';
            arrowEl.style = undefined;
            arrowEl.style.left = `${referenceOffset.left - popperOffset.left + 10}px`;
            arrowEl.style.top = `${4}px`;
            break;
          case 'bottom-end':
            arrowEl.className = this.prefixCls + '-tooltip-arrow we-tooltip-arrow-bottom';
            arrowEl.style = undefined;
            arrowEl.style.left = `${referenceOffset.left - popperOffset.left + referenceOffset.width - 26}px`;
            arrowEl.style.top = `${4}px`;
            break;
          case 'left':
            arrowEl.className = this.prefixCls + '-tooltip-arrow we-tooltip-arrow-left';
            arrowEl.style = undefined;
            arrowEl.style.right = `${4}px`;
            arrowEl.style.top = `${referenceOffset.top - popperOffset.top + referenceOffset.height / 2 - 8}px`;
            break;
          case 'left-start':
            arrowEl.className = this.prefixCls + '-tooltip-arrow we-tooltip-arrow-left';
            arrowEl.style = undefined;
            arrowEl.style.right = `${4}px`;
            arrowEl.style.top = `${referenceOffset.top - popperOffset.top + 10}px`;
            break;
          case 'left-end':
            arrowEl.className = this.prefixCls + '-tooltip-arrow we-tooltip-arrow-left';
            arrowEl.style = undefined;
            arrowEl.style.right = `${4}px`;
            arrowEl.style.top = `${referenceOffset.top - popperOffset.top + referenceOffset.height - 26}px`;
            break;
          case 'right':
            arrowEl.className = this.prefixCls + '-tooltip-arrow we-tooltip-arrow-right';
            arrowEl.style = undefined;
            arrowEl.style.left = `${4}px`;
            arrowEl.style.top = `${referenceOffset.top - popperOffset.top + referenceOffset.height / 2 - 8}px`;
            break;
          case 'right-start':
            arrowEl.className = this.prefixCls + '-tooltip-arrow we-tooltip-arrow-right';
            arrowEl.style = undefined;
            arrowEl.style.left = `${4}px`;
            arrowEl.style.top = `${referenceOffset.top - popperOffset.top + 10}px`;
            break;
          case 'right-end':
            arrowEl.className = this.prefixCls + '-tooltip-arrow we-tooltip-arrow-right';
            arrowEl.style = undefined;
            arrowEl.style.left = `${4}px`;
            arrowEl.style.top = `${referenceOffset.top - popperOffset.top + referenceOffset.height - 26}px`;
            break;
          default:
        }
      },
      handleMouseEnterReference(e) {
        if (this.disabled || this.isManual || this.trigger !== 'hover') {
          return;
        }
        if (this.delayIndex) {
          window.clearTimeout(this.delayIndex);
          this.delayIndex = undefined
        }
        this.delayIndex = setTimeout(() => {
          this.popperVisible = true;
        }, this.openDelay);
      },
      handleMouseLeaveReference(e) {
        if (this.disabled || this.isManual || this.trigger !== 'hover') {
          return;
        }
        if (this.delayIndex) {
          window.clearTimeout(this.delayIndex);
          this.delayIndex = undefined
        }
        if (this.hideDelay === 0) {
          return;
        }
        this.delayIndex = setTimeout(() => {
          this.popperVisible = false;
        }, this.hideDelay);
      },
      handleMouseDownReference(e) {
        if (this.disabled || this.isManual || this.trigger !== 'focus') {
          return;
        }
        if (this.delayIndex) {
          window.clearTimeout(this.delayIndex);
          this.delayIndex = undefined
        }
        this.delayIndex = setTimeout(() => {
          this.popperVisible = true;
        }, this.openDelay);
      },
      handleMouseUpReference(e) {
        if (this.disabled || this.isManual || this.trigger !== 'focus') {
          return;
        }
        if (this.delayIndex) {
          window.clearTimeout(this.delayIndex);
          this.delayIndex = undefined
        }
        if (this.hideDelay === 0) {
          return;
        }
        this.delayIndex = setTimeout(() => {
          this.popperVisible = false;
        }, this.hideDelay);
      },
      handleClickReference(e) {
        if (this.disabled || this.isManual || this.trigger !== 'click') {
          return;
        }
        if (this.popperVisible) {
          if (this.delayIndex) {
            window.clearTimeout(this.delayIndex);
            this.delayIndex = undefined;
          }
          if (this.hideDelay === 0) {
            return;
          }
          this.delayIndex = setTimeout(() => {
            this.popperVisible = false;
          }, this.hideDelay);
        } else {
          if (this.delayIndex) {
            window.clearTimeout(this.delayIndex);
            this.delayIndex = undefined
          }
          this.delayIndex = setTimeout(() => {
            this.popperVisible = true;
          }, this.openDelay);
        }
      },
      handleMouseEnterPopper(e) {
        if (this.disabled || this.isManual || this.trigger !== 'hover') {
          return;
        }
        if (this.delayIndex) {
          window.clearTimeout(this.delayIndex);
          this.delayIndex = undefined;
        }
      },
      handleMouseLeavePopper(e) {
        if (this.disabled || this.isManual || this.trigger !== 'hover') {
          return;
        }
        if (this.hideDelay === 0) {
          return;
        }
        this.delayIndex = setTimeout(() => {
          this.popperVisible = false;
        }, this.hideDelay);
      }
    },

    beforeCreate() {
      this.popperComponent = new Vue({
        data: {vNode: ''},
        render() {
          return this.vNode;
        }
      }).$mount();
    },

    render(h) {
      if (this.popperComponent) {
        this.popperComponent.vNode = h('transition', {
          props: {
            name: 'fade'
          }
        }, [h('div', {
          'class': [`${this.prefixCls}-tooltip`, this.effect === 'dark' ? `${this.prefixCls}-tooltip-type-dark` : `${this.prefixCls}-tooltip-type-light`],
          style: {
            maxWidth: this.maxWidth ? !isNaN(this.maxWidth) ? `${this.maxWidth}px` : this.maxWidth : undefined,
            zIndex: this.zIndex,
            display: !this.disabled && this.popperVisible ? 'inline' : 'none'
          },
          on: {
            mouseenter: this.handleMouseEnterPopper,
            mouseleave: this.handleMouseLeavePopper
          }
        }, [this.$slots.panel || h('div', {
          'class': `${this.prefixCls}-tooltip-inner`
        }, [h('div', {
          'class': `${this.prefixCls}-tooltip-inner-content`
        }, [this.$slots.content || this.content])])])]);
      }

      if (!this.$slots.default) return this.$slots.default;
      return this.$slots.default.filter(c => c && c.tag)[0];
    },

    mounted() {
      this.referenceEl = this.$el;
      onEventListener(this.referenceEl, 'mouseenter', this.handleMouseEnterReference);
      onEventListener(this.referenceEl, 'mouseleave', this.handleMouseLeaveReference);
      onEventListener(this.referenceEl, 'mousedown', this.handleMouseDownReference);
      onEventListener(this.referenceEl, 'mouseup', this.handleMouseUpReference);
      onEventListener(this.referenceEl, 'click', this.handleClickReference);
      document.body.appendChild(this.popperComponent.$el);
      this.$nextTick(() => {
        this.popperEl = this.popperComponent.$el;
      });
    },

    beforeDestroy() {
      offEventListener(this.referenceEl, 'mouseenter', this.handleMouseEnterReference);
      offEventListener(this.referenceEl, 'mouseleave', this.handleMouseLeaveReference);
      offEventListener(this.referenceEl, 'mousedown', this.handleMouseDownReference);
      offEventListener(this.referenceEl, 'mouseup', this.handleMouseUpReference);
      offEventListener(this.referenceEl, 'click', this.handleClickReference);
    }

  }
</script>
