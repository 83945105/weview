<template>
  <li :class="[selectedClass]">
    <a href="javascript:void(0)"
       @click="handleClick"
    >{{label}}</a>
  </li>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import Emitter from '../../../src/mixins/emitter';

  export default {

    name: `${Conf.prefixCls}-header-doc-item`,

    componentName: `${Conf.prefixNameCls}HeaderDocItem`,

    mixins: [Emitter, Conf],

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

    computed: {
      selectedClass() {
        return this.selected ? `selected` : undefined;
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
        this.dispatch(`${this.prefixNameCls}HeaderDoc`, 'handleClickItem');
        this.selected = true;
        this.$emit('click', e);
      }
    },

    created() {
      this.$on('handleUnSelected', () => {
        this.selected = false;
      });
    }
  }
</script>
