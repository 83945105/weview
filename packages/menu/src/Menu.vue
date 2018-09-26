<template>
  <we-scroll-bar>
    <ul class="we-menu">

      <slot></slot>
    </ul>
  </we-scroll-bar>
  <!-- <we-scroll>
     <ul>
     <we-menu>

       <we-menu-item icon="we-success" label="处理中心2">

         <i slot="icon" class="we-icon success"></i>

         <i class="we-icon success"></i>
         <span>处理中心</span>

       </we-menu-item>

       <we-menu-item icon="we-success" label="我的工作台">

         <i slot="icon" class="we-icon success"></i>

         <i class="we-icon success"></i>
         <span>处理中心</span>

         <we-scroll>
           <we-menu slot="subMenu">

             <we-menu-item icon="we-success">选项一</we-menu-item>
             <we-menu-item icon="we-success">选项二</we-menu-item>
             <we-menu-item icon="we-success">选项三</we-menu-item>


           </we-menu>
         </we-scroll>

       </we-menu-item>


     </we-menu>

   </we-scroll>-->

</template>

<script>

  import Conf from '../../src/mixins/conf.js';

  import ScrollBar from '../../scroll-bar/src/ScrollBar.vue';

  export default {

    components: {ScrollBar: ScrollBar},

    name: `${Conf.prefixCls}-menu`,

    componentName: `${Conf.prefixNameCls}Menu`,

    optionName: `menu`,

    mixins: [Conf],

    inject: {
      menuItem: {
        default: null
      }
    },

    data() {
      return {};
    },

    props: {},

    methods: {},

    created() {
      console.log(this.menuItem)
    }

  }
</script>
