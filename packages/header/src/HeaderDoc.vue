<template>
  <div :class="[headerClass]">
    <a :class="[headerLogoClass]" href="javascript:void(0)" @click="handleClickLogo">
      <slot name="logo">
        <img :src="logoSrc" :class="[headerLogoImgClass]"/>
      </slot>
      <div :class="[headerLogoText]">{{title}}</div>
    </a>
    <div v-if="$slots.default" :class="[navClass]">
      <ul>
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  import Emitter from '../../src/mixins/emitter.js';

  export default {

    name: `${Conf.prefixCls}-header-doc`,

    componentName: `${Conf.prefixNameCls}HeaderDoc`,

    mixins: [Emitter, Conf],

    props: {
      logoSrc: {
        type: String
      },
      title: {
        type: String,
        default: '未命名项目'
      }
    },

    computed: {
      headerClass() {
        return `${this.prefixCls}-header`;
      },
      headerLogoClass() {
        return `${this.prefixCls}-header-logo`;
      },
      headerLogoImgClass() {
        return `${this.prefixCls}-header-logo-img`;
      },
      headerLogoText() {
        return `${this.prefixCls}-header-logo-text`;
      },
      navClass() {
        return `${this.prefixCls}-nav`;
      }
    },

    methods: {
      handleClickLogo(e) {
        this.$emit('click-logo', e);
      }
    },

    created() {
      this.$on('handleClickItem', () => {
        this.broadcast(`${this.prefixNameCls}HeaderDocItem`, 'handleUnSelected');
      });
    }
  }
</script>
