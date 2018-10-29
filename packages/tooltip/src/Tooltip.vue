<template>
  <div :class="[`${prefixCls}-tooltip-rel`]">
    <div ref="reference"
         @mouseenter="handleMouseEnter"
         @mouseleave="handleMouseLeave"
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
           v-transfer-dom="{value: appendToBody}"
           :style="{
            maxWidth: maxWidth ? !isNaN(maxWidth) ? `${maxWidth}px` : maxWidth : undefined,
            zIndex: this.zIndex
           }"
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
</template>

<script>

  import Conf from '../../src/mixins/conf.js';
  import Popper from '../../src/mixins/popper.js';
  import PopupManager from '../../src/utils/popup.js';
  import TransferDom from '../../src/directives/transfer-dom.js';
  import {hasClass} from "../../src/utils/dom.js";

  export default {

    name: `${Conf.prefixCls}-tooltip`,

    componentName: `${Conf.prefixNameCls}Tooltip`,

    optionName: `tooltip`,

    directives: {TransferDom},

    mixins: [Conf, Popper],

    props: {
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
          return !this.$WEVIEW || this.$WEVIEW.appendToBody === '' ? true : this.$WEVIEW.appendToBody;
        }
      }
    },

    data() {
      return {
        delayIndex: undefined,
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
      handleMouseEnter(e) {
        if (this.manual) {
          return;
        }
        if (this.delayIndex) {
          window.clearTimeout(this.delayIndex);
        }
        this.delayIndex = setTimeout(() => {
          this.popperVisible = true;
        }, this.openDelay);
      },
      handleMouseLeave(e) {
        if (this.manual) {
          return;
        }
        if (this.delayIndex) {
          window.clearTimeout(this.delayIndex);
        }
        if (this.hideDelay === 0) {
          return;
        }
        this.delayIndex = setTimeout(() => {
          this.popperVisible = false;
        }, this.hideDelay);
      }
    }

  }
</script>
