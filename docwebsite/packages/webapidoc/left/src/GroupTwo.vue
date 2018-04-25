<template>
  <div>
    <div class="we-api-menu-level-two">{{label}}</div>
    <ul v-if="$slots.default" class="we-api-menu-list">
      <slot></slot>
    </ul>
  </div>
</template>

<script>

  import Emitter from '../../../../src/mixins/emitter';

  export default {
    name: "web-api-doc-left-group-two",

    componentName: `WebApiDocLeftGroupTwo`,

    mixins: [Emitter],

    props: {
      label: {
        type: String,
        default: '未命名组'
      }
    }
  }
</script>
