<template>
  <li class="we-menu-item-group">
    <h3 class="we-menu-item-group-title">分组</h3>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  export default {

    name: `${Conf.prefixCls}-menu-group`,

    componentName: `${Conf.prefixNameCls}MenuGroup`,

    optionName: `menuGroup`,

    mixins: [Conf]

  }
</script>
