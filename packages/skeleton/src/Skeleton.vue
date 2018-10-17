<template>
  <div v-if="visible === true || visible === 1" :class="[`${prefixCls}-skeleton`, {'is-animation': animation}]">
    <div v-if="head" :class="`${prefixCls}-skeleton-picture is-left`">
      <div :class="[
              `${prefixCls}-skeleton-picture-one`,
              headSize ? `${prefixCls}-skeleton-picture-one-size-${headSize}` : undefined,
              headShape === 'square' ? 'is-square' : 'is-circle'
              ]"
      ></div>
    </div>
    <div :class="`${prefixCls}-skeleton-content`">
      <h3 v-if="title"
          :class="`${prefixCls}-skeleton-content-title`"
          :style="{
              width: isNaN(titleWidth) ? titleWidth : `${titleWidth}px`
            }"></h3>
      <ul v-if="paragraph" :class="`${prefixCls}-skeleton-content-paragraph`">
        <li v-for="i in paragraphRows"
            :key="i"
            :style="{
               width: __paragraphWidth__[i - 1]
              }"
        ></li>
      </ul>
    </div>
    <div v-if="picture" :class="`${prefixCls}-skeleton-picture is-right`">
      <div :class="`${prefixCls}-skeleton-picture-one`" style="height: 100px;width: 200px;"></div>
    </div>
  </div>
  <div v-else-if="visible === false || visible === 0">
    <slot></slot>
  </div>
  <div v-else
       :class="`${prefixCls}-skeleton-fail-prompt`">
    <slot name="error">
      <span>{{errorPrompt(visible)}}</span>
      <a href="javascript:void(0)"
         :class="`${prefixCls}-skeleton-fail-prompt-link`"
         @click.stop="handleClickReload">重试</a>
    </slot>
  </div>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  import Animation from '../../animation/src/Animation.vue';
  import Button from '../../button/src/Button.vue';

  export default {

    components: {Animation: Animation, WeButton: Button},

    name: `${Conf.prefixCls}-skeleton`,

    componentName: `${Conf.prefixNameCls}Skeleton`,

    optionName: `skeleton`,

    mixins: [Conf],

    props: {
      value: [Boolean, Number],//是否显示骨架屏
      animation: Boolean,//是否开启动画效果
      head: Boolean,//是否显示头像
      headShape: {//头像形状 circle square
        type: String,
        default: 'circle'
      },
      headSize: String,//头像尺寸 default mini small large
      picture: Boolean,//是否显示图片
      paragraph: {//是否显示段落
        type: Boolean,
        default: true
      },
      paragraphRows: {//段落行数
        type: Number,
        default: 3
      },
      paragraphWidth: {//段落宽度,若为数组则对应每一行的宽度
        type: [Number, String, Array],
        default: '100%'
      },
      title: {//是否显示标题
        type: Boolean,
        default: true
      },
      titleWidth: {//标题宽度
        type: [String, Number],
        default: '50%'
      },
      errorCode: {
        type: Object,
        default() {
          return {};
        }
      },
      timeout: Number
    },

    data() {
      return {
        visible: false,
        timeoutIndex: undefined
      };
    },

    computed: {
      __paragraphWidth__() {
        let pw = [];
        if (Array.isArray(this.paragraphWidth)) {
          let len = this.paragraphWidth.length;
          let last = this.paragraphWidth[len - 1];
          for (let i = 0; i < this.paragraphRows; i++) {
            if (i < len) {
              if (isNaN(this.paragraphWidth[i])) {
                pw.push(this.paragraphWidth[i]);
              } else {
                pw.push(`${this.paragraphWidth[i]}px`);
              }
            } else {
              if (isNaN(last)) {
                pw.push(last);
              } else {
                pw.push(`${last}px`);
              }
            }
          }
        } else if (isNaN(this.paragraphWidth)) {
          for (let i = 0; i < this.paragraphRows; i++) {
            pw.push(this.paragraphWidth);
          }
        } else {
          for (let i = 0; i < this.paragraphRows; i++) {
            pw.push(`${this.paragraphWidth}px`);
          }
        }
        return pw;
      },
      __errorCode__() {
        let ec = this.errorCode;
        if (!ec[404]) {
          ec[404] = '资源不存在。';
        }
        if (!ec[403]) {
          ec[403] = '无权访问。';
        }
        if (!ec[500]) {
          ec[500] = '加载失败。';
        }
        return ec;
      }
    },

    watch: {
      value(v) {
        this.visible = v;
      },
      visible(v) {
        this.$emit('input', v);
        if (v === true || v === 1) {
          this.startTimeout();
        } else if (v === false || v === 0) {
          window.clearTimeout(this.timeoutIndex);
        }
      }
    },

    methods: {
      errorPrompt(errorCode) {
        let prompt = this.__errorCode__[errorCode];
        return prompt ? prompt : '加载失败。';
      },
      handleClickReload() {
        this.visible = true;
      },
      startTimeout() {
        if (!this.timeout) {
          return;
        }
        this.timeoutIndex = setTimeout(() => this.visible = 500, this.timeout);
      }
    },

    mounted() {
      this.visible = this.value;
    },

    beforeDestroy() {
      window.clearTimeout(this.timeoutIndex);
    }

  }
</script>
