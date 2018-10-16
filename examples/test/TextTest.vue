<template>
  <div>
    <div class="mt15">
      <div class="we-text">
        <input type="text" class="we-text-inner we-text-inner-type-default is-rectangle" placeholder="请输入文本" />
      </div>
      <div class="we-text">
        <input type="text" class="we-text-inner we-text-inner-type-default is-round" placeholder="请输入文本" />
      </div>
    </div>
    <div class="mt15">
      <div class="we-text">
        <input type="text" class="we-text-inner we-text-inner-type-default" placeholder="请输入文本" />
      </div>
      <div class="we-text">
        <input type="text" class="we-text-inner we-text-inner-type-default is-disabled" readonly placeholder="请输入文本" />
      </div>
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-type-default is-disabled" readonly placeholder="请输入文本" value="不可用" />
      </div>
    </div>
    <div class="mt15">
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-type-success" placeholder="请输入文本" />
      </div>
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-type-success is-disabled" readonly placeholder="请输入文本" />
      </div>
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-type-success is-disabled" readonly placeholder="请输入文本" value="不可用" />
      </div>
    </div>
    <div class="mt15">
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-type-error" placeholder="请输入文本" />
      </div>
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-type-error is-disabled" readonly placeholder="请输入文本" />
      </div>
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-type-error is-disabled" readonly placeholder="请输入文本" value="不可用" />
      </div>
    </div>
    <div class="mt15">
      <div class="we-text">
        <div class="we-text-prefix"><we-icon name="angle-left"></we-icon></div>
        <input type="text" class="we-text-inner we-text-inner-prefix we-text-inner-suffix we-text-inner-type-default tac" placeholder="请输入文本" />
        <div class="we-text-suffix"><we-icon name="angle-right"></we-icon></div>
      </div>
      <div class="we-text">
        <input type="text" class="we-text-inner we-text-inner-suffix we-text-inner-type-default" readonly placeholder="请选择日期" />
        <div class="we-text-suffix"><we-icon name="calendar"></we-icon></div>
      </div>
    </div>
    <div class="mt15">
      <div class="we-text">
        <div class="we-text-prefix"><we-icon name="search-o"></we-icon></div>
        <input type="text" class="we-text-inner we-text-inner-prefix we-text-inner-type-default" placeholder="请输入文本" />
      </div>
      <we-button type="primary">默认尺寸</we-button>
    </div>
    <div class="mt15">
      <div class="we-text">
        <div class="we-text-prefix we-text-size-large"><we-icon name="search-o"></we-icon></div>
        <input type="text" class="we-text-inner we-text-inner-prefix we-text-inner-type-default we-text-inner-size-large" placeholder="请输入文本" />
      </div>
      <we-button type="primary" size="large">大型按钮</we-button>
    </div>
    <div class="mt15">
      <div class="we-text">
        <div class="we-text-prefix we-text-size-small"><we-icon name="search-o"></we-icon></div>
        <input type="text" class="we-text-inner we-text-inner-prefix we-text-inner-type-default we-text-inner-size-small" placeholder="请输入文本" />
      </div>
      <we-button type="primary" size="small">小型按钮</we-button>
    </div>
    <div class="mt15">
      <div class="we-text">
        <div class="we-text-prefix we-text-size-mini"><we-icon name="search-o"></we-icon></div>
        <input type="text" class="we-text-inner we-text-inner-prefix we-text-inner-type-default we-text-inner-size-mini" placeholder="请输入文本" />
      </div>
      <we-button type="primary" size="mini">超小按钮</we-button>
    </div>
    <div class="mt15">
      <div class="we-text-multi">
        <textarea class="we-text-multi-inner we-text-inner we-text-inner-type-default"></textarea>
      </div>
    </div>
    <div class="mt15">
      <div class="we-text-multi">
        <textarea class="we-text-multi-inner we-text-inner we-text-inner-type-default" style="height:80px"></textarea>
      </div>
    </div>
    <div class="mt15">
      <div class="we-text-multi">
        <textarea class="we-text-multi-inner we-text-inner we-text-inner-type-default is-resize" style="height:80px"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  import WeIcon from '../../packages/icon/src/Icon.vue';
  import WeButton from "../../packages/button/src/Button";
  export default {
    components:{
      weIcon:WeIcon,
      weButton:WeButton
    },

    name: "text-test",

    data() {
      return {

      };
    },

    methods: {

    },

    created() {
    }
  }
</script>

<style scoped>
  .mt15{
    margin-top:15px;
  }
</style>
