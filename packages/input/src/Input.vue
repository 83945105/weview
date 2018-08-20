<template>
  <input :type="type" class="we-text-inner we-text-inner-default is-rectangle" placeholder="请输入文本"/>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';
  import Global from '../../src/mixins/global.js';

  export default {

    name: `${Conf.prefixCls}-input`,

    componentName: `${Conf.prefixNameCls}Input`,

    optionName: 'input',

    mixins: [Conf, Global],

    data() {
      return {
        inputValue: this.value
      };
    },

    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: [String, Number]
    }

  }
</script>
