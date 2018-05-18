<template>
  <transition
    :name="tName"
    @after-leave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>

<script>

  import Conf from '../../../src/mixins/conf.js';

  import {AnimationType} from './animation.js';

  export default {

    name: `${Conf.prefixCls}-animation`,

    componentName: `${Conf.prefixNameCls}Animation`,

    data() {
      return {
        open: this.value
      };
    },

    props: {
      value: {
        type: Boolean,
        default: true
      },
      name: {
        type: String,
        default: 'fade'
      }
    },

    computed: {
      tName() {
        return this.open ? AnimationType[this.name].name : '';
      }
    },

    watch: {
      value(v) {
        this.open = v;
      },
      open(v) {
        this.$emit('input', v);
      }
    },

    methods: {
      afterLeave(target) {
        this.$emit('after-leave', target);
      }
    }
  }
</script>
