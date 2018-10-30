<template>
  <tooltip v-model="isShow"
           :trigger="trigger"
           :effect="effect"
           :max-width="maxWidth"
           :placement="placement"
           :disabled="disabled"
           :open-delay="openDelay"
           :hide-delay="hideDelay"
           :manual="manual"
           :append-to-body="appendToBody"
  >
    <slot></slot>
    <template slot="panel">
      <div :class="`${prefixCls}-tooltip-inner is-popover`"
           :style="{
            minWidth: minWidth ? !isNaN(minWidth) ? `${minWidth}px` : minWidth : undefined
           }">
        <div v-if="title !== void 0"
             :class="`${prefixCls}-tooltip-inner-title`">{{title}}
        </div>
        <div :class="`${prefixCls}-tooltip-inner-content`">
          <slot name="content">{{content}}</slot>
        </div>
        <div v-if="type !== 'message'" :class="`${prefixCls}-tooltip-inner-bottom is-right`">
          <we-button v-if="type === 'confirm'"
                     class="popover-btn"
                     v-bind="cancelButtonOptions__"
                     @click="handleClickCancelButton">
            {{cancelButtonText}}
          </we-button>
          <we-button class="popover-btn"
                     v-bind="confirmButtonOptions__"
                     @click="handleClickConfirmButton">
            {{confirmButtonText}}
          </we-button>
        </div>
      </div>
    </template>
  </tooltip>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';
  import Tooltip from '../../tooltip/src/Tooltip.vue';
  import Button from '../../button/src/Button.vue';

  export default {

    components: {Tooltip},

    component: {Tooltip: Tooltip, WeButton: Button},

    name: `${Conf.prefixCls}-popover`,

    componentName: `${Conf.prefixNameCls}Popover`,

    optionName: `popover`,

    mixins: [Conf],

    props: {
      value: Boolean,//是否显示
      trigger: {//触发方式 click - 点击 focus 聚焦 hover 悬浮 manual 手动
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'focus', 'hover'].indexOf(value) !== -1;
        }
      },
      effect: {
        type: String,//主题 dark light
        default: 'light',
        validator(value) {
          return ['dark', 'light'].indexOf(value) !== -1;
        }
      },
      title: String,//标题
      content: [String, Number],//显示内容
      minWidth: {//最小宽度
        type: [Number, String],
        default: 200
      },
      maxWidth: [Number, String],//最大宽度
      placement: {//出现的位置
        type: String,
        default: 'top',
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
      },
      type: {//卡片类型 message - 消息 alert - 警告 confirm - 确认
        type: String,
        default: 'message',
        validator(value) {
          return ['message', 'alert', 'confirm'].indexOf(value) !== -1;
        }
      },
      cancelButtonText: {//取消按钮文字
        type: String,
        default: '取消'
      },
      cancelButtonOptions: Object,//取消按钮配置
      confirmButtonText: {//确认按钮文字
        type: String,
        default: '确定'
      },
      confirmButtonOptions: Object//确认按钮配置
    },

    data() {
      return {
        isShow: false,
        cancelButtonOptions__: {},
        confirmButtonOptions__: {}
      };
    },

    watch: {
      value(val) {
        this.isShow = val;
      },
      isShow(val) {
        this.$emit('input', val);
      },
      cancelButtonOptions: {
        immediate: true,
        handler(val) {
          let options = val;
          if (!options) options = {};
          if (!options.size) options.size = 'mini';
          if (!options.type) options.type = 'text';
          this.cancelButtonOptions__ = options;
        },
        deep: true
      },
      confirmButtonOptions: {
        immediate: true,
        handler(val) {
          let options = val;
          if (!options) options = {};
          if (!options.size) options.size = 'mini';
          if (!options.type) options.type = 'primary';
          this.confirmButtonOptions__ = options;
        },
        deep: true
      }
    },

    methods: {
      handleClickConfirmButton(e) {
        this.$emit('click-confirm-button', e, this);
      },
      handleClickCancelButton(e) {
        this.$emit('click-cancel-button', e, this);
      },
      open() {
        if (this.isShow) return;
        this.isShow = true;
      },
      close() {
        if (!this.isShow) return;
        this.isShow = false;
      }
    },

    mounted() {
      this.isShow = this.value;
    }

  }
</script>
