<template>
  <div>
    <h3 class="first-title">图标合集</h3>
    <div class="icon-list-main">
      <ul class="icon-list">
      <template v-for="(name, idx) in names">
        <li :key="name">
          <div class="icon-one">
            <we-icon :key="name" :name="names[idx]"></we-icon>
            <div class="icon-name">{{names[idx]}}</div>
          </div>
        </li>
      </template>
      </ul>
    </div>
  </div>
</template>

<script>

  import {IconName} from '../../packages/icon/src/icon.js';

  export default {

    name: "icon-test",

    data() {
      return {
        names: IconName
      };
    }
  }
</script>

<style scoped>
  .first-title{
    font-size:22px;
    font-weight:normal;
    margin:15px 0px 15px 0px;
    color:#333333;
  }
  .icon-list{
    margin:0 0 25px 0;
    padding:0;
    overflow:hidden;
    border:1px solid #EEEEEE;
  }
  .icon-list li{
    float:left;
    margin:0 -1px -1px 0;
    padding:0;
    list-style:none;
    width:16.66%;
    height:120px;
    line-height:120px;
    text-align:center;
    position:relative;
    border-right:1px solid #EEEEEE;
    border-bottom:1px solid #EEEEEE;
  }
  .icon-list li:nth-child(6n){
    border-right:none;
  }
  .icon-list li .icon-one{
    display:inline-block;
    vertical-align:middle;
    line-height:28px;
    color:#777777;
  }
  .icon-list li .icon-one .icon-name{
    font-size:12px;
  }
</style>
