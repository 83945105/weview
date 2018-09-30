<template>
  <div>
    <div class="we-page-prompts">
      <img src="../../static/src/images/page_prompts/no_data_img.png" />
      <div class="we-page-prompts-text">
        抱歉暂无信息。
      </div>
      <div class="we-page-prompts-button">
        <we-icon>重新加载</we-icon>
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
