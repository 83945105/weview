<template>
  <div>
    <label class="we-radio" @click="isChecked = true">
      <span class="we-radio-input" :class="{'is-checked':isChecked}">
        <span class="we-radio-input-inner"></span>
        <input type="radio" name="normalRadio" class="we-radio-input-original" checked />
      </span>
      <span class="we-radio-label">选项1</span>
    </label>
    <label class="we-radio" @click="isChecked = true">
      <span class="we-radio-input" :class="{'is-checked':isChecked}">
        <span class="we-radio-input-inner"></span>
        <input type="radio" name="normalRadio" class="we-radio-input-original" />
      </span>
      <span class="we-radio-label">选项1</span>
    </label>


  </div>
</template>

<script>
    export default {
      name: 'radio-test',

      data(){
        return{
          isChecked: false,
          isMounted: false
        }
      },

      computed: {
        __height(){
          if(!this.isMounted){
            return 1;
          }
        }
      },

      mounted(){
        this.isMounted = true;
      }
    }
</script>

<style scoped>

</style>
