<template>
  <div class="we-api-header">
    <div class="we-api-logo">
      <img class="we-api-logo-img"
           :src="logoSrc"
      />
      <div class="we-api-logo-text">{{label}}</div>
    </div>
    <ul class="we-api-nav">
      <slot></slot>
    </ul>
  </div>
</template>

<script>

  import Emitter from '../../../../../src/mixins/emitter';

  export default {
    name: "web-api-doc-head-menu",

    componentName: `WebApiDocHeadMenu`,

    mixins: [Emitter],

    props: {
      logoSrc: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: '未命名项目'
      }
    },

    created() {
      this.$on('handleClickItem', () => {
        this.broadcast(`WebApiDocHeadItem`, 'unSelectedItem');
      });
    }
  }
</script>
