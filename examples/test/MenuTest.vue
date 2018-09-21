<template>
  <div>
    <!--一级带图标菜单-->
    <h3>一级带图标菜单</h3>
    <div style="height: 300px; width: 220px; position: relative; border: 1px solid #e5e5e5;">
      <div class="we-menu is-full">
        <div class="we-menu-item is-active">
          <div class="we-menu-item-title is-selected"
               :style="[itemStyle, { backgroundColor }]"
               @mouseenter="onMouseEnter($event)"
               @mouseleave="onMouseLeave($event)"
               @click="foldShow">
            <div class="we-menu-item-title-arrow" :class="{'is-selected':isMenuChildShow}">
              <we-icon name="angle-down"></we-icon>
            </div>
            <div class="we-menu-item-title-inner">
              <div class="we-menu-item-title-inner-icon">
                <we-icon name="edit"></we-icon>
              </div>
              <div class="we-menu-item-title-inner-text">一级菜单</div>
            </div>
          </div>
          <div class="we-menu-child" :class="{'is-fold':isMenuChildShow}" :style="{'display':isMenuShowDisplay ? 'block' : 'none'}">
            <div class="we-menu-item-group">
              <h3 class="we-menu-item-group-title"
                  :style="[{ backgroundColor }, {'padding-left':50 + textPaddingLeft*0 + `px`}]">分组</h3>
              <div class="we-menu-item">
                <div class="we-menu-item-title"
                     :style="[itemStyle, { backgroundColor }, {'padding-left':50 + textPaddingLeft*0 + `px`}]"
                     @mouseenter="onMouseEnter($event)"
                     @mouseleave="onMouseLeave($event)">
                  <div class="we-menu-item-title-arrow">
                    <we-icon name="angle-down"></we-icon>
                  </div>
                  <div class="we-menu-item-title-inner isFull">
                    <!--<div class="we-menu-item-title-inner-icon">-->
                      <!--<we-icon name="edit"></we-icon>-->
                    <!--</div>-->
                    <div class="we-menu-item-title-inner-text">二级菜单</div>
                  </div>
                </div>
                <div class="we-menu-item">
                  <div class="we-menu-item-title"
                       :style="[itemStyle, { backgroundColor }, {'padding-left':50 + textPaddingLeft*1 + `px`}]"
                       @mouseenter="onMouseEnter($event)"
                       @mouseleave="onMouseLeave($event)">
                    <div class="we-menu-item-title-arrow">
                      <we-icon name="angle-down"></we-icon>
                    </div>
                    <div class="we-menu-item-title-inner isFull">
                      <!--<div class="we-menu-item-title-inner-icon">-->
                      <!--<we-icon name="edit"></we-icon>-->
                      <!--</div>-->
                      <div class="we-menu-item-title-inner-text">三级菜单</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="we-menu-item">
                <div class="we-menu-item-title is-disabled"
                     :style="[itemStyle, { backgroundColor }, {'padding-left':50 + textPaddingLeft*0 + `px`}]"
                     @mouseenter="onMouseEnter($event)"
                     @mouseleave="onMouseLeave($event)">
                  <div class="we-menu-item-title-arrow">
                    <!--<we-icon name="angle-right"></we-icon>-->
                  </div>
                  <div class="we-menu-item-title-inner isFull">
                    <!--<div class="we-menu-item-title-inner-icon">-->
                    <!--<we-icon name="edit"></we-icon>-->
                    <!--</div>-->
                    <div class="we-menu-item-title-inner-text">二级菜单</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="we-menu-item">
          <div class="we-menu-item-title"
               :style="[itemStyle, { backgroundColor }]"
               @mouseenter="onMouseEnter($event)"
               @mouseleave="onMouseLeave($event)">
            <div class="we-menu-item-title-arrow">
              <we-icon name="angle-down"></we-icon>
            </div>
            <div class="we-menu-item-title-inner">
              <div class="we-menu-item-title-inner-icon">
                <we-icon name="edit"></we-icon>
              </div>
              <div class="we-menu-item-title-inner-text">一级菜单</div>
            </div>
          </div>
        </div>
        <div class="we-menu-vertical-line" style="top: 0; left: 0;"></div>
      </div>
    </div>
    <!--/一级带图标菜单-->

    <!--正常菜单-->
    <h3>正常菜单</h3>
    <div style="height: 300px; width: 220px; position: relative; border: 1px solid #e5e5e5;">
      <div class="we-menu is-full">
        <div class="we-menu-item is-active">
          <div class="we-menu-item-title is-selected"
               :style="[itemStyle, { backgroundColor }, {'padding-left':textPaddingLeft + `px`}]"
               @mouseenter="onMouseEnter($event)"
               @mouseleave="onMouseLeave($event)"
               style="padding-left: 15px;">
            <div class="we-menu-item-title-arrow">
              <we-icon name="angle-down"></we-icon>
            </div>
            <div class="we-menu-item-title-inner">
              <!--<div class="we-menu-item-title-inner-icon">-->
                <!--<we-icon name="edit"></we-icon>-->
              <!--</div>-->
              <div class="we-menu-item-title-inner-text">一级菜单</div>
            </div>
          </div>
          <div class="we-menu-child is-fold" style="display: block">
            <div class="we-menu-item-group">
              <h3 class="we-menu-item-group-title"
                  :style="[{ backgroundColor }, {'padding-left':50 + textPaddingLeft*0 + `px`}]">分组</h3>
              <div class="we-menu-item">
                <div class="we-menu-item-title"
                     :style="[itemStyle, { backgroundColor }, {'padding-left':textPaddingLeft*2 + `px`}]"
                     @mouseenter="onMouseEnter($event)"
                     @mouseleave="onMouseLeave($event)"
                     style="padding-left: 30px;">
                  <div class="we-menu-item-title-arrow">
                    <we-icon name="angle-down"></we-icon>
                  </div>
                  <div class="we-menu-item-title-inner isFull">
                    <!--<div class="we-menu-item-title-inner-icon">-->
                    <!--<we-icon name="edit"></we-icon>-->
                    <!--</div>-->
                    <div class="we-menu-item-title-inner-text">二级菜单</div>
                  </div>
                </div>
                <div class="we-menu-item">
                  <div class="we-menu-item-title"
                       :style="[itemStyle, { backgroundColor }, {'padding-left':textPaddingLeft*3 + `px`}]"
                       @mouseenter="onMouseEnter($event)"
                       @mouseleave="onMouseLeave($event)"
                       style="padding-left: 30px;">
                    <div class="we-menu-item-title-arrow">
                      <we-icon name="angle-down"></we-icon>
                    </div>
                    <div class="we-menu-item-title-inner isFull">
                      <!--<div class="we-menu-item-title-inner-icon">-->
                      <!--<we-icon name="edit"></we-icon>-->
                      <!--</div>-->
                      <div class="we-menu-item-title-inner-text">三级菜单</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="we-menu-item">
                <div class="we-menu-item-title"
                     :style="[itemStyle, { backgroundColor }, {'padding-left':textPaddingLeft*2 + `px`}]"
                     @mouseenter="onMouseEnter($event)"
                     @mouseleave="onMouseLeave($event)">
                  <div class="we-menu-item-title-arrow">
                    <!--<we-icon name="angle-right"></we-icon>-->
                  </div>
                  <div class="we-menu-item-title-inner isFull">
                    <!--<div class="we-menu-item-title-inner-icon">-->
                    <!--<we-icon name="edit"></we-icon>-->
                    <!--</div>-->
                    <div class="we-menu-item-title-inner-text">二级菜单</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="we-menu-item">
          <div class="we-menu-item-title"
               :style="[itemStyle, { backgroundColor }, {'padding-left':textPaddingLeft + `px`}]"
               @mouseenter="onMouseEnter($event)"
               @mouseleave="onMouseLeave($event)">
            <div class="we-menu-item-title-arrow">
              <we-icon name="angle-down"></we-icon>
            </div>
            <div class="we-menu-item-title-inner">
              <!--<div class="we-menu-item-title-inner-icon">-->
                <!--<we-icon name="edit"></we-icon>-->
              <!--</div>-->
              <div class="we-menu-item-title-inner-text">一级菜单</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/正常菜单-->

    <!--右键菜单-->
    <div class="we-menu we-menu-right is-shadow is-full" style="height: 300px; width: 220px; left: 50%; top: 100px;">
      <div class="we-menu-item">
        <div class="we-menu-item-title"
             :style="[itemStyle, { backgroundColor }]"
             @mouseenter="onMouseEnter($event)"
             @mouseleave="onMouseLeave($event)">
          <div class="we-menu-item-title-arrow">
            <we-icon name="angle-down"></we-icon>
          </div>
          <div class="we-menu-item-title-inner">
            <div class="we-menu-item-title-inner-icon">
              <we-icon name="edit"></we-icon>
            </div>
            <div class="we-menu-item-title-inner-text">一级菜单</div>
          </div>
        </div>
        <div class="we-menu-item-group">
          <h3 class="we-menu-item-group-title"
              :style="[{ backgroundColor }, {'padding-left':50 + textPaddingLeft*0 + `px`}]">分组</h3>
          <div class="we-menu-item-title"
               :style="[itemStyle, { backgroundColor }]"
               @mouseenter="onMouseEnter($event)"
               @mouseleave="onMouseLeave($event)">
            <div class="we-menu-item-title-arrow">
              <!--<we-icon name="angle-down"></we-icon>-->
            </div>
            <div class="we-menu-item-title-inner">
              <div class="we-menu-item-title-inner-icon">
                <!--<we-icon name="edit"></we-icon>-->
              </div>
              <div class="we-menu-item-title-inner-text">一级菜单</div>
            </div>
          </div>
          <div class="we-menu-item-title is-disabled"
               :style="[itemStyle, { backgroundColor }]"
               @mouseenter="onMouseEnter($event)"
               @mouseleave="onMouseLeave($event)">
            <div class="we-menu-item-title-arrow">
              <!--<we-icon name="angle-down"></we-icon>-->
            </div>
            <div class="we-menu-item-title-inner">
              <div class="we-menu-item-title-inner-icon">
                <!--<we-icon name="edit"></we-icon>-->
              </div>
              <div class="we-menu-item-title-inner-text">一级菜单</div>
            </div>
          </div>
        </div>
        <div class="we-menu-item-title"
             :class="{'is-quick':isQuick}"
             :style="[itemStyle, { backgroundColor }]"
             @mouseenter="onMouseEnter($event)"
             @mouseleave="onMouseLeave($event)">
          <!--<div class="we-menu-item-title-arrow">-->
            <!--<we-icon name="angle-down"></we-icon>-->
          <!--</div>-->
          <div class="we-menu-item-title-quick">
            Ctrl+Shift+U
          </div>
          <div class="we-menu-item-title-inner">
            <div class="we-menu-item-title-inner-icon">
              <!--<we-icon name="edit"></we-icon>-->
            </div>
            <div class="we-menu-item-title-inner-text">一级菜单</div>
          </div>
        </div>
        <div class="we-menu-item-title"
             :style="[itemStyle, { backgroundColor }]"
             @mouseenter="onMouseEnter($event)"
             @mouseleave="onMouseLeave($event)">
          <div class="we-menu-item-title-arrow">
            <we-icon name="angle-right"></we-icon>
          </div>
          <div class="we-menu-item-title-inner">
            <div class="we-menu-item-title-inner-icon">
              <!--<we-icon name="edit"></we-icon>-->
            </div>
            <div class="we-menu-item-title-inner-text">一级菜单</div>
          </div>
        </div>
        <div class="we-menu-item-split"></div>
      </div>
    </div>
    <!--/右键菜单-->

    <br/><br/>
    <!--<div class="we-menu is-shadow" style="width: 220px;">-->
      <!--<div class="we-menu-item type-title">-->
        <!--<div class="we-menu-item-icon"></div>-->
        <!--<div class="we-menu-item-text">分类</div>-->
        <!--<div class="we-menu-item-title-arrow"></div>-->
      <!--</div>-->
      <!--<div class="we-menu-item" @mouseenter="menuSubOpen($event)" @mouseleave="isShow =! isShow">-->
        <!--<div class="we-menu-item-icon"><we-icon name="search-o"></we-icon></div>-->
        <!--<div class="we-menu-item-text">一级菜单一级菜单一级菜单一级菜单</div>-->
        <!--<div class="we-menu-item-quick">Ctrl+Shift+A</div>-->
        <!--<div class="we-menu is-shadow sub" v-show="isShow" style="width: 220px;" :style="{'top':menuSubTop+`px`,'left':menuSubLeft+`px`}">-->
          <!--<div class="we-menu-item type-title">-->
            <!--<div class="we-menu-item-icon"></div>-->
            <!--<div class="we-menu-item-text">分类</div>-->
            <!--<div class="we-menu-item-title-arrow"></div>-->
          <!--</div>-->
          <!--<div class="we-menu-item">-->
            <!--<div class="we-menu-item-icon"><we-icon name="search-o"></we-icon></div>-->
            <!--<div class="we-menu-item-text">二级菜单</div>-->
            <!--<div class="we-menu-item-quick">Ctrl+A</div>-->
          <!--</div>-->
          <!--<div class="we-menu-item">-->
            <!--<div class="we-menu-item-icon"><we-icon name="search-o"></we-icon></div>-->
            <!--<div class="we-menu-item-text">二级菜单</div>-->
            <!--<div class="we-menu-item-quick">Ctrl+Shift+A</div>-->
          <!--</div>-->
          <!--<div class="we-menu-item">-->
            <!--<div class="we-menu-item-icon"><we-icon name="search-o"></we-icon></div>-->
            <!--<div class="we-menu-item-text">二级菜单</div>-->
            <!--<div class="we-menu-item-title-arrow"><we-icon name="caret-right"></we-icon></div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="we-menu-item-split"></div>-->
      <!--<div class="we-menu-item" @mouseenter="isShow1 =! isShow1" @mouseleave="isShow1 =! isShow1">-->
        <!--<div class="we-menu-item-icon"></div>-->
        <!--<div class="we-menu-item-text">一级菜单</div>-->
        <!--<div class="we-menu-item-title-arrow"><we-icon name="caret-right"></we-icon></div>-->
        <!--<div class="we-menu is-shadow is-full" :style="{'left':menuSubLeft+`px`}" v-show="isShow1">-->
          <!--<div @click="scrollUpDo" class="we-menu-item-scroll-btn up"><we-icon name="angle-up"></we-icon></div>-->
          <!--<div id="menu-content" class="we-menu-content">-->
            <!--<div class="we-menu-item" v-for="(item,index) in menuSub" :key="item.menuTile">-->
              <!--<div class="we-menu-item-icon checked" :class="{'is-checked':index <= 3}"><we-icon v-show="index <= 3" name="check"></we-icon></div>-->
              <!--<div class="we-menu-item-text">{{item.menuTile}}</div>-->
              <!--<div class="we-menu-item-title-arrow"><we-icon name="caret-right"></we-icon></div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div @click="scrollDownDo" class="we-menu-item-scroll-btn down"><we-icon name="angle-down"></we-icon></div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="we-menu-item">-->
        <!--<div class="we-menu-item-text no-icon"><we-button type="default" size="mini"><we-icon name="plus"></we-icon></we-button></div>-->
        <!--<div class="we-menu-item-title-arrow"></div>-->
      <!--</div>-->
      <!--<div class="we-menu-item">-->
        <!--<div class="we-menu-item-icon"></div>-->
        <!--<div class="we-menu-item-text">一级菜单</div>-->
        <!--<div class="we-menu-item-title-arrow"><we-icon name="caret-right"></we-icon></div>-->
      <!--</div>-->
      <!--<div class="we-menu-item-split"></div>-->
      <!--<div class="we-menu-item is-disabled">-->
        <!--<div class="we-menu-item-icon"></div>-->
        <!--<div class="we-menu-item-text">一级菜单</div>-->
        <!--<div class="we-menu-item-title-arrow"><we-icon name="caret-right"></we-icon></div>-->
      <!--</div>-->
    <!--</div>-->
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
            timeInter: null,

            backgroundColor: "",
            textColor: "",
            activeTextColor: "",
            active: false,

            verticalLineTop: 0,
            verticalLineHeight: 0,
            menuBarOpacity: 0,

            isIcon: false,
            currScrollHeight: 0,
            textPaddingLeft: 20,

            isMenuChildShow: true,
            isMenuShowDisplay: true,

            isQuick: true
          }
        },

        computed: {
          hoverBackground() {
            return this.backgroundColor ? this.mixColor(this.backgroundColor, 0.2) : '';
          },
          itemStyle() {
            const style = {
              color: this.active ? this.activeTextColor : this.textColor
            };
            return style;
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
          },

          onMouseEnter(e) {
            if (!this.backgroundColor) return;
            e.currentTarget.style.backgroundColor = this.hoverBackground;
          },
          onMouseLeave(e) {
            if (!this.backgroundColor) return;
            e.currentTarget.style.backgroundColor = this.backgroundColor;
          },

          getColorChannels(color) {
            color = color.replace('#', '');
            if (/^[0-9a-fA-F]{3}$/.test(color)) {
              color = color.split('');
              for (let i = 2; i >= 0; i--) {
                color.splice(i, 0, color[i]);
              }
              color = color.join('');
            }
            if (/^[0-9a-fA-F]{6}$/.test(color)) {
              return {
                red: parseInt(color.slice(0, 2), 16),
                green: parseInt(color.slice(2, 4), 16),
                blue: parseInt(color.slice(4, 6), 16)
              };
            } else {
              return {
                red: 255,
                green: 255,
                blue: 255
              };
            }
          },
          mixColor(color, percent) {
            let { red, green, blue } = this.getColorChannels(color);
            if (percent > 0) { // shade given color
              red *= 1 - percent;
              green *= 1 - percent;
              blue *= 1 - percent;
            } else { // tint given color
              red += (255 - red) * percent;
              green += (255 - green) * percent;
              blue += (255 - blue) * percent;
            }
            return `rgb(${ Math.round(red) }, ${ Math.round(green) }, ${ Math.round(blue) })`;
          },

          foldShow(){
            let self = this;
            this.isMenuShowDisplay =! this.isMenuShowDisplay;
            setTimeout(function(){
              self.isMenuChildShow =! self.isMenuChildShow;
            });
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
