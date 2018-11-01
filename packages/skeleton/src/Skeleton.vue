<script>

  import Conf from '../../src/mixins/conf.js';

  import Button from '../../button/src/Button.vue';
  import {getId, addInstance} from "./skeleton.js";

  export default {

    components: {VButton: Button},

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
      errorCode: {//自定义错误代码的显示文本
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
        this.$emit('reload');
      },
      startTimeout() {
        if (!this.timeout) {
          return;
        }
        this.timeoutIndex = setTimeout(() => this.visible = 500, this.timeout);
      },
      start() {
        this.visible = true;
      },
      finish() {
        this.visible = false;
      },
      error(errorCode = 500) {
        this.visible = errorCode;
      }
    },

    render(h) {
      if (this.visible === true || this.visible === 1) {
        let childList = [];
        if (this.head) {
          childList.push(h('div', {
            'class': `${this.prefixCls}-skeleton-picture is-left`
          }, [h('div', {
            'class': [`${this.prefixCls}-skeleton-picture-one`,
              this.headSize ? `${this.prefixCls}-skeleton-picture-one-size-${this.headSize}` : undefined,
              this.headShape === 'square' ? 'is-square' : 'is-circle'
            ]
          })]));
        }
        let contentList = [];
        if (this.title) {
          contentList.push(h('h3', {
            'class': `${this.prefixCls}-skeleton-content-title`,
            style: {
              width: isNaN(this.titleWidth) ? this.titleWidth : `${this.titleWidth}px`
            }
          }));
        }
        if (this.paragraph) {
          let paragraphList = [];
          for (let i = 1; i <= this.paragraphRows; i++) {
            paragraphList.push(h('li', {
              key: i,
              style: {
                width: this.__paragraphWidth__[i - 1]
              }
            }))
          }
          contentList.push(h('ul', {
            'class': `${this.prefixCls}-skeleton-content-paragraph`
          }, paragraphList));
        }
        childList.push(h('div', {
          'class': `${this.prefixCls}-skeleton-content`
        }, contentList));
        if (this.picture) {
          childList.push(h('div', {
            'class': `${this.prefixCls}-skeleton-picture is-right`
          }, [h('div', {
            'class': `${this.prefixCls}-skeleton-picture-one`,
            style: {
              width: '200px',
              height: '100px'
            }
          })]));
        }
        return h('div', {
          attrs: {
            id: this.id
          },
          'class': [`${this.prefixCls}-skeleton`, {'is-animation': this.animation}]
        }, childList);
      }
      if (this.visible === false || this.visible === 0) {
        if (!this.$slots.default) return this.$slots.default;
        return this.$slots.default.filter(c => c && c.tag)[0];
      }
      return h('div', {
        attrs: {
          id: this.id
        },
        'class': `${this.prefixCls}-skeleton-fail-prompt`
      }, [this.$slots.error || h('span', this.errorPrompt(this.visible)), h('v-button', {
        'class': `${this.prefixCls}-skeleton-fail-prompt-link`,
        props: {
          type: 'text'
        },
        on: {
          click: this.handleClickReload
        }
      }, '重试')]);
    },

    mounted() {
      this.id = getId();
      addInstance(this);
      this.visible = this.value;
    },

    beforeDestroy() {
      window.clearTimeout(this.timeoutIndex);
    }

  }
</script>
