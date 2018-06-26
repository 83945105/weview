<template>
  <transition
    :name="tName"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"

    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  >
    <slot></slot>
  </transition>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

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
        default: 'fadeIn'
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
      beforeEnter(el) {
        this.$emit('before-enter', el);
      },
      enter(el) {
        this.$emit('enter', el);
      },
      afterEnter(el) {
        this.$emit('after-enter', el);
      },
      enterCancelled(el) {
        this.$emit('enter-cancelled', el);
      },
      beforeLeave(el) {
        this.$emit('before-leave', el);
      },
      leave(el) {
        this.$emit('leave', el);
      },
      afterLeave(el) {
        this.$emit('after-leave', el);
      },
      leaveCancelled(el) {
        this.$emit('leave-cancelled', el);
      }
    }
  }
</script>
