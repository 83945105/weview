<template>
  <div>
    <div class="tip">666</div>
    <we-layer :value="true" resize drag>
      <we-button ref="button" class="my-button">弹出</we-button>
    </we-layer>
  </div>
</template>

<script>

  import Popper from 'popper';

  export default {
    name: "PopperJsTest",

    data() {
      return {
        show: true
      };
    },

    mounted() {

      setTimeout(() => {
        let reference = document.body.querySelector(".my-button");
        let tip = document.body.querySelector(".tip");

        new Popper(reference, tip, {
          placement: 'right',
          onCreate: (data) => {
            console.log(data)
          },
          onUpdate: (data) => {
            console.log(444)
          },
          modifiers: {},
        });
      }, 1000)

    }
  }
</script>

<style scoped>

</style>
