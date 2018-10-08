<template>
  <div>
    <div style="position: relative;height: 400px; background-color: #f9f9f9;margin: 15px 0;">
      <div class="we-page-prompts">
        <img class="we-page-prompts-picture"
             :style="{height:`200px`,width:`200px`}"
             src="../../static/src/images/page_prompts/no_data_img.png" />
        <div class="we-page-prompts-text">
          <span>抱歉暂无信息。</span>
        </div>
      </div>
    </div>

    <div style="position: relative;height: 400px; background-color: #f9f9f9;margin: 15px 0;">
      <div class="we-page-prompts">
        <img class="we-page-prompts-picture"
             :style="{height:`200px`,width:`200px`}"
             src="../../static/src/images/page_prompts/no_authority_img.png" />
        <div class="we-page-prompts-text">
          <span>抱歉您无权查看此页面。</span>
        </div>
      </div>
    </div>

    <div style="position: relative;height: 400px; background-color: #f9f9f9;margin: 15px 0;">
      <div class="we-page-prompts">
        <img class="we-page-prompts-picture"
             :style="{height:`200px`,width:`200px`}"
             src="../../static/src/images/page_prompts/no_page_img.png" />
        <div class="we-page-prompts-text">
          <span>抱歉，您访问的页面不存在。</span><we-button type="text" size="mini">刷新</we-button>
        </div>
      </div>
    </div>

    <div style="position: relative;height: 400px; background-color: #f9f9f9;margin: 15px 0;">
      <div class="we-page-prompts">
        <img class="we-page-prompts-picture"
             :style="{height:`200px`,width:`200px`}"
             src="../../static/src/images/page_prompts/reload_img.png" />
        <div class="we-page-prompts-text">
          <span>抱歉，您的网络有问题加载失败。</span>
        </div>
        <div class="we-page-prompts-button">
          <we-button type="primary" size="mini">刷新</we-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import WeIcon from "../../packages/icon/src/Icon.vue";
  import WeButton from "../../packages/button/src/Button.vue";

  export default {
    name: "page-prompts-test",

    components: {
      weIcon: WeIcon,
      weButton: WeButton
    },
    data() {
      return {

      }
    },

    computed: {
    },

    created(){

    },

    methods: {

    },

    mounted(){

    }
  }
</script>

<style scoped>

</style>
