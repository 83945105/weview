<template>
  <div class="we-menu-group">
    <h2 v-if="label" class="we-menu-group-title spacing">{{label}}</h2>
    <div v-if="$slots.default" class="we-menu-item">
      <h3 class="we-menu-item-title">Basic</h3>
      <ul class="we-menu-item-list">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>

  import Conf from '../../../src/mixins/conf';

  import Emitter from '../../../src/mixins/emitter';

  export default {

    name: `${Conf.prefixCls}-menu-group`,

    componentName: `${Conf.prefixNameCls}MenuGroup`,

    mixins: [Emitter, Conf],

    props: {
      label: {
        type: String
      },

    }
  }
</script>
