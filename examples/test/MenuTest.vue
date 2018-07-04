<template>
  <div>
    <div class="we-menu is-shadow" style="width: 220px;">
      <div class="we-menu-item type-title">
        <div class="we-menu-item-icon"></div>
        <div class="we-menu-item-text">分类</div>
        <div class="we-menu-item-arrow"></div>
      </div>
      <div class="we-menu-item" @mouseenter="menuSubOpen($event)" @mouseleave="isShow =! isShow">
        <div class="we-menu-item-icon"><we-icon name="search-o"></we-icon></div>
        <div class="we-menu-item-text">一级菜单一级菜单一级菜单一级菜单</div>
        <div class="we-menu-item-quick">Ctrl+Shift+A</div>
        <div class="we-menu is-shadow sub" v-show="isShow" style="width: 220px;" :style="{'top':menuSubTop+`px`,'left':menuSubLeft+`px`}">
          <div class="we-menu-item type-title">
            <div class="we-menu-item-icon"></div>
            <div class="we-menu-item-text">分类</div>
            <div class="we-menu-item-arrow"></div>
          </div>
          <div class="we-menu-item">
            <div class="we-menu-item-icon"><we-icon name="search-o"></we-icon></div>
            <div class="we-menu-item-text">二级菜单</div>
            <div class="we-menu-item-quick">Ctrl+A</div>
          </div>
          <div class="we-menu-item">
            <div class="we-menu-item-icon"><we-icon name="search-o"></we-icon></div>
            <div class="we-menu-item-text">二级菜单</div>
            <div class="we-menu-item-quick">Ctrl+Shift+A</div>
          </div>
          <div class="we-menu-item">
            <div class="we-menu-item-icon"><we-icon name="search-o"></we-icon></div>
            <div class="we-menu-item-text">二级菜单</div>
            <div class="we-menu-item-arrow"><we-icon name="caret-right"></we-icon></div>
          </div>
        </div>
      </div>
      <div class="we-menu-item-split"></div>
      <div class="we-menu-item" @mouseenter="isShow1 =! isShow1" @mouseleave="isShow1 =! isShow1">
        <div class="we-menu-item-icon"></div>
        <div class="we-menu-item-text">一级菜单</div>
        <div class="we-menu-item-arrow"><we-icon name="caret-right"></we-icon></div>
        <div class="we-menu is-shadow full" :style="{'left':menuSubLeft+`px`}" v-show="isShow1">
          <div @click="scrollUpDo" class="we-menu-item-scroll-btn up"><we-icon name="angle-up"></we-icon></div>
          <div id="menu-content" class="we-menu-content">
            <div class="we-menu-item" v-for="(item,index) in menuSub" :key="item.menuTile">
              <div class="we-menu-item-icon checked" :class="{'is-checked':index <= 3}"><we-icon v-show="index <= 3" name="check"></we-icon></div>
              <div class="we-menu-item-text">{{item.menuTile}}</div>
              <div class="we-menu-item-arrow"><we-icon name="caret-right"></we-icon></div>
            </div>
          </div>
          <div @click="scrollDownDo" class="we-menu-item-scroll-btn down"><we-icon name="angle-down"></we-icon></div>
        </div>
      </div>
      <div class="we-menu-item">
        <div class="we-menu-item-text no-icon"><we-button type="default" size="mini"><we-icon name="plus"></we-icon></we-button></div>
        <div class="we-menu-item-arrow"></div>
      </div>
      <div class="we-menu-item">
        <div class="we-menu-item-icon"></div>
        <div class="we-menu-item-text">一级菜单</div>
        <div class="we-menu-item-arrow"><we-icon name="caret-right"></we-icon></div>
      </div>
      <div class="we-menu-item-split"></div>
      <div class="we-menu-item is-disabled">
        <div class="we-menu-item-icon"></div>
        <div class="we-menu-item-text">一级菜单</div>
        <div class="we-menu-item-arrow"><we-icon name="caret-right"></we-icon></div>
      </div>
    </div>
  </div>
</template>

<script>
    import WeIcon from "../../packages/icon/src/Icon.vue";
    import WeButton from "../../packages/button/src/Button";

    export default {
        components:{
          weIcon: WeIcon,
          weButton: WeButton
        },
        data() {
          return {
            name: 'menu',
            isShow: false,
            isShow1: false,
            menuSub: [],
            menuSubLeft: 720,
            menuSubTop: 0,
            timeInter: null
          }
        },
        methods:{
          menuSubOpen(ev){
            this.isShow =! this.isShow;
            this.menuSubTop = ev.currentTarget.offsetTop + 80;
          },
          scrollUpDo(){
            let menuContent= document.getElementById("menu-content");
            menuContent.scrollTop = menuContent.scrollTop - 39;
          },
          scrollDownDo(){
            let menuContent= document.getElementById("menu-content");
            menuContent.scrollTop = menuContent.scrollTop + 39;
          }
        },
        mounted(){
          for(let i = 1;i<=30;i++){
            this.menuSub.push({"menuTile":"二级菜单"});
          }
        }
    }
</script>

<style scoped>

</style>
