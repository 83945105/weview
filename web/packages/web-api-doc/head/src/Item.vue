<template>
  <li
    :class="[{'selected': selected}]"
    @click="handleClick"
  >
    <a>{{label}}</a>
  </li>
</template>

<script>

  import Emitter from '../../../../../src/mixins/emitter';

  export default {
    name: "web-api-doc-head-item",

    componentName: `WebApiDocHeadItem`,

    mixins: [Emitter],

    data() {
      return {
        selected: this.value
      };
    },

    props: {
      label: {
        type: String,
        default: '未命名项'
      },
      value: {
        type: Boolean,
        default: false
      }
    },

    watch: {
      value(v) {
        this.selected = v;
      },
      selected(v) {
        this.$emit('input', v);
      }
    },

    methods: {
      handleClick(e) {
        this.dispatch(`WebApiDocHeadMenu`, 'handleClickItem');
        this.selected = true;
        this.$emit('click', e);
      }
    },

    created() {
      this.$on('unSelectedItem', () => {
        this.selected = false;
      });
    }
  }
</script>
