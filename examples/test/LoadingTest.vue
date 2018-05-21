<template>
  <div>
    <div style="width: 300px;height: 300px;border:1px solid #57ee36;">
      <we-loading :value="true" animation-name="fadeRight"></we-loading>
    </div>

    <div style="height:300px;width:300px;border:1px solid #246aee;margin-top:15px;">
      <we-loading :value="true" background="rgba(0,0,0,0.8)" text="玩命加载中" :loading-speed="1"></we-loading>
    </div>

    <div id="loadingDom" style="width: 300px;height: 300px;border:1px solid #ee673c;margin-top:15px;"
         @click="handleClick">
      点我使用$loading开启加载特效
    </div>

    <div id="loadingDom2" style="width: 300px;height: 300px;border:1px solid #ee43e1;margin-top:15px;">
      使用按钮开启加载特效
    </div>

    <we-button @click="instance = $loading({target: '#loadingDom2'})">开启特效</we-button>
    <we-button @click="instance.close()">关闭</we-button>
    <we-button @click="$loading.close(instance)">实例关闭</we-button>
    <we-button @click="$loading.close(instance.id)">ID关闭</we-button>

    <div v-loading="o" style="width: 300px;height: 300px;border:1px solid #ee362e;margin-top:15px;">
      使用v-loading开启加载特效
    </div>
    <we-button @click="vl = true;o.value = true">开启</we-button>
    <we-button @click="vl = false;o.value = false">关闭</we-button>

    <div id="loadingDom3" style="width: 300px;height: 300px;border:1px solid #52ee47;margin-top:15px;">
      第一个
    </div>

    <div id="loadingDom4" style="width: 300px;height: 300px;border:1px solid #8dc7ee;margin-top:15px;">
      第二个
    </div>

    <div>
      <we-button @click="$loading({target: '#loadingDom3'})">开启第一个</we-button>
      <we-button @click="$loading({target: '#loadingDom4'})">开启第二个</we-button>
      <we-button @click="$loading.closeAll()">关闭全部</we-button>
    </div>
  </div>
</template>

<script>
  export default {
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
          this.loading = this.$loading({target: '#loadingDom', animationName: 'fadeRight'});
        }
      }
    },

    created() {
    }
  }
</script>
