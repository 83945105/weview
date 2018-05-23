<template>
  <div>
    <div class="mt15">
      <div class="we-text">
        <input type="text" class="we-text-inner we-text-inner-default" placeholder="请输入文本" />
      </div>
      <div class="we-text">
        <input type="text" class="we-text-inner we-text-inner-default is-disabled" readonly placeholder="请输入文本" />
      </div>
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-default is-disabled" readonly placeholder="请输入文本" value="不可用" />
      </div>
    </div>
    <div class="mt15">
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-success" placeholder="请输入文本" />
      </div>
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-success is-disabled" readonly placeholder="请输入文本" />
      </div>
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-success is-disabled" readonly placeholder="请输入文本" value="不可用" />
      </div>
    </div>
    <div class="mt15">
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-error" placeholder="请输入文本" />
      </div>
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-error is-disabled" readonly placeholder="请输入文本" />
      </div>
      <div class="we-text">
      <input type="text" class="we-text-inner we-text-inner-error is-disabled" readonly placeholder="请输入文本" value="不可用" />
      </div>
    </div>
    <div class="mt15">
      <div class="we-text">
        <div class="we-text-prefix"><we-icon name="angle-left"></we-icon></div>
        <input type="text" class="we-text-inner we-text-inner-prefix we-text-inner-suffix we-text-inner-default tac" placeholder="请输入文本" />
        <div class="we-text-suffix"><we-icon name="angle-right"></we-icon></div>
      </div>
      <div class="we-text">
        <input type="text" class="we-text-inner we-text-inner-suffix we-text-inner-default" readonly placeholder="请选择日期" />
        <div class="we-text-suffix"><we-icon name="calendar"></we-icon></div>
      </div>
    </div>
    <div class="mt15">
      <div class="we-text">
        <div class="we-text-prefix"><we-icon name="search-o"></we-icon></div>
        <input type="text" class="we-text-inner we-text-inner-prefix we-text-inner-default" placeholder="请输入文本" />
      </div>
      <we-button type="primary">默认尺寸</we-button>
    </div>
    <div class="mt15">
      <div class="we-text">
        <div class="we-text-prefix we-text-large"><we-icon name="search-o"></we-icon></div>
        <input type="text" class="we-text-inner we-text-inner-prefix we-text-inner-default we-text-inner-large" placeholder="请输入文本" />
      </div>
      <we-button type="primary" size="large">大型按钮</we-button>
    </div>
    <div class="mt15">
      <div class="we-text">
        <div class="we-text-prefix we-text-small"><we-icon name="search-o"></we-icon></div>
        <input type="text" class="we-text-inner we-text-inner-prefix we-text-inner-default we-text-inner-small" placeholder="请输入文本" />
      </div>
      <we-button type="primary" size="small">小型按钮</we-button>
    </div>
    <div class="mt15">
      <div class="we-text">
        <div class="we-text-prefix we-text-mini"><we-icon name="search-o"></we-icon></div>
        <input type="text" class="we-text-inner we-text-inner-prefix we-text-inner-default we-text-inner-mini" placeholder="请输入文本" />
      </div>
      <we-button type="primary" size="mini">超小按钮</we-button>
    </div>
    <div class="mt15">
      <div class="we-text-multi">
        <textarea class="we-text-multi-inner we-text-inner we-text-inner-default"></textarea>
      </div>
    </div>
    <div class="mt15">
      <div class="we-text-multi">
        <textarea class="we-text-multi-inner we-text-inner we-text-inner-default" style="height:80px"></textarea>
      </div>
    </div>
    <div class="mt15">
      <div class="we-text-multi">
        <textarea class="we-text-multi-inner we-text-inner we-text-inner-default is-resize" style="height:80px"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  import WeIcon from "../../packages/icon/src/icon.vue";
  import WeButton from "../../packages/button/src/Button";
  export default {
    components:{
      weIcon:WeIcon,
      weButton:WeButton
    },

    name: "loading-test",

    data() {
      return {
        loading: undefined,
        instance: undefined,
        vl: true,
        o: {
          value: false,
          text: '玩命加载中'
        }
      };
    },

    methods: {
      handleClick() {
        if (this.loading) {
          this.loading = this.loading.close();
          this.loading = undefined;
        } else {
          this.loading = this.$loading({target: '#loadingDom'});
        }
      }
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
