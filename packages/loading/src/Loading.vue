<template>
  <animation :name="_animationName" @after-leave="animationAfterLeave">
    <div v-show="visible" :class="[maskClass, maskBgClass, fullscreenClass]" :style="maskBgStyle">
      <div :class="[contentClass]">
        <icon :name="iconName" type="primary" :loading="true" :loading-speed="loadingSpeed" size="large"></icon>
        <h3 :class="[textClass]">{{text}}</h3>
      </div>
    </div>
  </animation>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import Icon from '../../icon/src/Icon.vue';
  import Animation from '../../animation/src/Animation.vue';

  export default {

    components: {Icon: Icon, Animation: Animation},

    name: `${Conf.prefixCls}-loading`,

    componentName: `${Conf.prefixNameCls}Loading`,

    optionName: `loading`,

    mixins: [Conf],

    data() {
      return {
        visible: false,
        parentPosition: undefined
      };
    },

    props: {
      value: Boolean,
      iconName: {
        type: String,
        default: 'loading-drop'
      },
      loadingSpeed: Number,
      target: {
        type: [String, HTMLElement],
        default() {
          return document.body;
        }
      },
      text: {
        type: String,
        default: '加载中'
      },
      background: String,
      customClass: String,
      fullscreen: Boolean,
      animationName: String
    },

    computed: {
      maskClass() {
        return `${this.prefixCls}-loading-mask`;
      },
      maskBgClass() {
        return `${this.prefixCls}-loading-mask-black`;
      },
      maskBgStyle() {
        return {
          'backgroundColor': this.background
        };
      },
      contentClass() {
        return `${this.prefixCls}-loading-content`;
      },
      textClass() {
        return `${this.prefixCls}-loading-content-text`;
      },
      fullscreenClass() {
        return this.fullscreen ? 'is-full' : undefined;
      },
      _animationName() {
        if (this.animationName !== undefined) {
          return this.animationName;
        } else {
          return 'fadeIn';
        }
      }
    },

    watch: {
      value(v) {
        this.visible = v;
      },
      visible(v) {
        this.$emit('input', v);
      }
    },

    methods: {
      close() {
        if (this.visible) {
          this.visible = false;
        }
      },
      destroy() {
        this.$emit('destroy', this.id);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
      animationAfterLeave(el) {
        this.$emit('animationAfterLeave', el, this);
      }
    },

    mounted() {
      this.$nextTick(() => {
        if (this.$el.parentNode) {
          this.parentPosition = this.$el.parentNode.style.position;
          this.$el.parentNode.style.position = 'relative';
        }
        this.visible = this.value;
      });
    },

    beforeDestroy() {
      if (this.$el.parentNode) {
        this.$el.parentNode.style.position = this.parentPosition;
      }
    }

  }
</script>
