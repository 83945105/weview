<template>
  <div class="we-web-main">

    <we-web-header-doc :logo-src="logoSrc" title="weview">
      <we-web-header-doc-item label="首页"></we-web-header-doc-item>
      <we-web-header-doc-item label="组件" :value="true"></we-web-header-doc-item>
      <we-web-header-doc-item label="社区"></we-web-header-doc-item>
    </we-web-header-doc>

    <we-web-layout>

      <template slot="left">

        <we-web-menu-left>
          <div class="we-web-menu-group">
            <h2 class="we-web-menu-group-title">更新日志</h2>
          </div>

          <div class="we-web-menu-group">
            <h2 class="we-web-menu-group-title selected">开发指南</h2>
          </div>

          <div class="we-web-menu-group">
            <h2 class="we-web-menu-group-title spacing">组件</h2>
            <div class="we-web-menu-item">
              <h3 class="we-web-menu-item-title">Basic</h3>
              <ul class="we-web-menu-item-list">
                <li>
                  <a href="#" class="selected">Icon 图标</a>
                </li>
                <li>
                  <a href="#">Button 按钮</a>
                </li>
              </ul>

              <h3 class="we-web-menu-item-title">Basic</h3>
              <ul class="we-web-menu-item-list">
                <li>
                  <a href="#" class="selected">Icon 图标</a>
                </li>
                <li>
                  <a href="#">Button 按钮</a>
                </li>
              </ul>
            </div>
          </div>
        </we-web-menu-left>

      </template>

      <template slot="right">
        <div style="height:2000px">
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
          right
        </div>
      </template>

    </we-web-layout>

  </div>
</template>

<script>
  const LogoSrc = require('../assets/weview_logo.png');

  import {toHumpFormat, toUpperCase} from '../../src/utils/util';

  export default {
    name: '',

    data() {
      return {
        logoSrc: LogoSrc
      };
    },

    computed: {},

    created() {
      // console.log(toUpperCase(toHumpFormat(`we-we-we`), 1))
    }
  }
</script>

<style lang="less" type="text/less">
  @import "../../web/packages/theme-chalk/index";
</style>
