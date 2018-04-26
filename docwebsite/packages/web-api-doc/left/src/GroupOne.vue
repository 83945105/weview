<template>
  <div>
    <h3 class="we-api-menu-level-one">{{label}}</h3>
    <ul v-if="$slots.default" class="we-api-menu-list">
      <slot></slot>
    </ul>
  </div>
</template>

<script>

  import Emitter from '../../../../src/mixins/emitter';

  export default {
    name: "web-api-doc-left-group-one",

    componentName: `WebApiDocLeftGroupOne`,

    mixins: [Emitter],

    props: {
      label: {
        type: String,
        default: '未命名组'
      }
    }
  }
</script>
