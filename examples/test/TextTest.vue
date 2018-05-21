<template>
  <div>
    <input type="text" />
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
          this.loading = this.$loading({target: '#loadingDom'});
        }
      }
    },

    created() {
    }
  }
</script>
