<template>
  <div>
    <!--正常菜单-->
    <h3>正常菜单组件</h3>
    <p></p>
    <input v-model="openMenuIndex" type="text">
    <button @click="$refs.menu.open(openMenuIndex)">展开指定菜单</button>
    <input v-model="closeMenuIndex" type="text">
    <button @click="$refs.menu.close(closeMenuIndex)">收起指定菜单</button>
    <p></p>
    <button @click="$refs.menu.openAllSubMenu()">打开根菜单下所有子菜单</button>
    <button @click="$refs.menu.closeAllSubMenu()">收起根菜单下所有子菜单</button>
    <button @click="selectedValue01 = true">测试非点击触发选中切换</button>
    <p></p>
    <button @click="menuShow = !menuShow">打开/关闭</button>
    <button @click="collapse = !collapse">折叠/展开</button>
    <!--@mouseenter.native="collapse = false"-->
    <!--@mouseleave.native="collapse = true"-->
    <div style="height: 1000px;width: 240px; position: relative; border: 1px solid #e5e5e5;">
      <we-menu v-model="menuShow"
               index="根菜单"
               :accordion="false"
               :collapse="collapse"
               ref="menu"
               text-color="#ffffff"
               background-color="#252525"
               active-text-color="#ffff00"
               active-background-color="#333333"
               active-line-color="#ff0000"
               hover-text-color="#ff0000"
               hover-background-color="#666666"
               disabled-text-color="#999999"
               disabled-background-color="transparent"
               style="height: 100%;"
      >
        <we-menu-item icon-name="edit" :value="true" prompt="Ctrl+Enter">我的工作台</we-menu-item>

        <we-menu-item-group title="分组一" before-line>
          <we-menu-item icon-name="edit">选项一</we-menu-item>
        </we-menu-item-group>

        <we-menu-item-group title="分组二" before-line after-line>
          <we-menu-item icon-name="edit">选项二</we-menu-item>
        </we-menu-item-group>

        <we-menu-item icon-name="edit">

          二级菜单

          <template slot="subMenu">

            <we-menu :accordion="false"
                     sub-menu-mode="open"
                     index="二级菜单">

              <we-menu-item-group title="分组">
                <we-menu-item v-model="selectedValue01" icon-name="edit">二级选项一</we-menu-item>
              </we-menu-item-group>

              <we-menu-item>

                <we-icon name="edit" slot="icon" size="large"></we-icon>

                三级菜单

                <we-menu slot="subMenu"
                         :sub-menu-horizontal-offset="1"
                         :accordion="false"
                         index="三级菜单"
                >
                  <we-menu-item icon-name="edit">三级选项一</we-menu-item>
                  <we-menu-item icon-name="edit">三级选项二</we-menu-item>
                </we-menu>

              </we-menu-item>
            </we-menu>

          </template>

        </we-menu-item>
        <we-menu-item icon-name="edit">

          二级菜单02

          <we-menu slot="subMenu" :accordion="true" index="二级菜单02">
            <we-menu-item icon-name="edit">二级选项一</we-menu-item>
            <we-menu-item icon-name="edit">

              三级菜单02

              <we-menu :value="true" slot="subMenu" subMenuMode="open" :accordion="false" index="三级菜单02">

                <we-menu-item-group title="分组" before-line after-line>

                  <we-menu-item disabled icon-name="edit">三级选项一</we-menu-item>
                  <we-menu-item icon-name="edit">三级选项二</we-menu-item>

                </we-menu-item-group>

                <we-menu-item icon-name="edit">

                  四级菜单

                  <we-menu :sub-menu-horizontal-offset="1" subMenuMode="open" slot="subMenu" :accordion="false"
                           index="四级菜单">

                    <we-menu-item-group title="分组">
                      <we-menu-item :value="true" icon-name="edit">
                        五级菜单一

                        <we-menu :sub-menu-horizontal-offset="1" slot="subMenu" :accordion="false" index="五级菜单一">

                          <we-menu-item-group title="分组">

                            <we-menu-item icon-name="edit">四级选项一</we-menu-item>
                            <we-menu-item icon-name="edit">四级选项二</we-menu-item>

                          </we-menu-item-group>

                        </we-menu>
                      </we-menu-item>
                      <we-menu-item icon-name="edit">四级选项一</we-menu-item>
                      <we-menu-item icon-name="edit">
                        五级菜单二

                        <we-menu :sub-menu-horizontal-offset="1" subMenuMode="open" slot="subMenu" :accordion="false"
                                 index="五级菜单二">

                          <we-menu-item-group title="分组">

                            <we-menu-item icon-name="edit">
                              六级菜单一

                              <we-menu :sub-menu-horizontal-offset="1" slot="subMenu" :accordion="false" index="六级菜单一">
                                <we-menu-item icon-name="edit">四级选项二</we-menu-item>
                              </we-menu>

                            </we-menu-item>
                            <we-menu-item :value="true" icon-name="edit">四级选项二</we-menu-item>

                          </we-menu-item-group>

                        </we-menu>

                      </we-menu-item>

                    </we-menu-item-group>

                  </we-menu>

                </we-menu-item>
              </we-menu>

            </we-menu-item>
          </we-menu>

        </we-menu-item>
        <we-menu-item icon-name="edit">后台系统</we-menu-item>
      </we-menu>
    </div>
    <!--/正常菜单-->

    <p></p>

    <!--横向菜单组件-->
    <button @click="hMenuShow = !hMenuShow">展开/折叠</button>
    <p></p>
    <input v-model="hOpenMenuIndex" type="text">
    <button @click="$refs.hMenu.open(hOpenMenuIndex)">展开指定菜单</button>
    <input v-model="hCloseMenuIndex" type="text">
    <input v-model="hCloseMenuIndex" type="text">
    <button @click="$refs.hMenu.close(hCloseMenuIndex)">收起指定菜单</button>
    <p></p>
    <button @click="$refs.hMenu.openAllSubMenu()">打开根菜单下所有子菜单</button>
    <button @click="$refs.hMenu.closeAllSubMenu()">收起根菜单下所有子菜单</button>
    <p></p>
    <button @click="hCollapse = !hCollapse">折叠/展开</button>
    <div style="position: relative; border: 1px solid #e5e5e5;">
      <we-menu mode="horizontal"
               v-model="hMenuShow"
               index="0"
               :collapse="hCollapse"
               ref="hMenu"
               text-color="#ffffff"
               background-color="#252525"
               active-text-color="#ffff00"
               active-background-color="#333333"
               active-line-color="#ff0000"
               selected-text-color="#ffff00"
               selected-background-color="#2199ed"
               hover-text-color="#ff0000"
               hover-background-color="#666666"
      >


        <we-menu-item>
          <we-icon name="edit" size="mini"></we-icon>
          <span style="margin-left: 5px">羽毛球</span>
        </we-menu-item>
        <we-menu-item-group title="分组" before-line after-line>
          <we-menu-item>
            <we-icon name="edit" size="mini"></we-icon>
            <span style="margin-left: 5px">乒乓球</span>
          </we-menu-item>
        </we-menu-item-group>


        <we-menu-item>
          <we-icon name="edit" size="mini"></we-icon>
          <span style="margin-left: 5px">二级菜单</span>

          <we-menu :sub-menu-vertical-offset="4" slot="subMenu" style="z-index: 999999;width: 200px">

            <we-menu-item icon-name="edit">二级菜单项一</we-menu-item>
            <we-menu-item icon-name="edit">二级菜单项二</we-menu-item>
            <we-menu-item icon-name="edit">二级菜单项二</we-menu-item>
            <we-menu-item icon-name="edit">

              <template slot="panel">
                <div style="width: 60px;height: 60px;background-color: #ff0000;border-radius: 50%;float: left"></div>
                <div style="float: left">ffffff<br>fff</div>
              </template>

            </we-menu-item>


          </we-menu>

        </we-menu-item>

        <we-menu-item>
          <we-icon name="edit" size="mini"></we-icon>
          <span style="margin-left: 5px">乒乓球</span>

          <we-menu :sub-menu-vertical-offset="4" slot="subMenu" style="z-index: 999999;width: 200px">

            <we-menu-item icon-name="edit">二级菜单项一</we-menu-item>
            <we-menu-item icon-name="edit">二级菜单项二</we-menu-item>
            <we-menu-item icon-name="edit">二级菜单项二</we-menu-item>

          </we-menu>

        </we-menu-item>

      </we-menu>
    </div>

    <!--横向菜单-->


    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>


  </div>
</template>

<script>
  import WeIcon from "../../packages/icon/src/Icon.vue";
  import WeButton from "../../packages/button/src/Button.vue";

  export default {
    components: {
      weIcon: WeIcon,
      weButton: WeButton
    },
    data() {
      return {
        menuShow: true,
        openMenuIndex: '0',
        closeMenuIndex: '0',
        collapse: false,
        selectedValue01: false,

        hMenuShow: true,
        hOpenMenuIndex: '0',
        hCloseMenuIndex: '0',
        hCollapse: false,


        name: 'menu',
        isShow: false,
        isShow1: false,
        menuSub: [],
        menuSubLeft: 720,
        menuSubTop: 0,
        timeInter: null,

        // backgroundColor: "#252525",
        // textColor: "#ffffff",
        // activeColor: "#2199ed",
        // disabledColor: "#666666",
        // menuRightBorderColor: "#252525",
        // selectedColor: "#ffffff",
        // selectedBg: "#2199ed",
        backgroundColor: "",
        textColor: "",
        activeColor: "",
        disabledColor: "",
        menuRightBorderColor: "",
        selectedColor: "",
        selectedBg: "",
        isActive: true,
        isSelected: true,
        isDisabled: true,
        isArrowDisabled: false,

        verticalLineTop: 0,
        verticalLineHeight: 0,
        menuBarOpacity: 0,

        horizontalLineLeft: 0,
        horizontalLineWidth: 0,

        isIcon: false,
        currScrollHeight: 0,
        textPaddingLeft: 20,

        isMenuChildShow: true,
        isMenuShowDisplay: true,

        isQuick: true,
        menuWidth: 50,
        menuInnerWidth: 210
      }
    },

    computed: {
      hoverBackground() {
        return this.backgroundColor ? this.mixColor(this.backgroundColor, 0.4) : '';
      },
      itemStyle() {
        const style = {
          color: this.active ? this.activeColor : this.textColor,
          backgroundColor: this.active ? this.mixColor(this.backgroundColor, 0.2) : this.backgroundColor
        };
        return style;
      },
      itemArrowColor() {
        const style = {
          color: this.mixColor(this.textColor, 0.2)
        };
        return style;
      },
      backgroundSelectedSyle() {
        const style = {
          color: this.isSelected ? this.selectedColor : this.textColor,
          backgroundColor: this.isSelected ? this.selectedBg : this.backgroundColor
        };
        return style;
      },
      menuBorderStyle() {
        const style = {
          border: "1px solid " + this.mixColor(this.menuRightBorderColor, 0.2)
        };
        return style;
      },
      textGroupColor() {
        const style = {
          color: this.mixColor(this.textColor, 0.3)
        };
        return style;
      },
      textQuickColor() {
        const style = {
          color: this.mixColor(this.textColor, 0.3)
        };
        return style;
      },
      splitStyle() {
        const style = {
          backgroundColor: this.mixColor(this.backgroundColor, 0.1)
        };
        return style;
      },
      arrowStyle() {
        const style = {
          color: this.isArrowDisabled ? this.mixColor(this.textColor, 0.5) : this.textColor,
          backgroundColor: this.backgroundColor
        };
        return style;
      }
    },

    methods: {
      menuSubOpen(ev) {
        this.isShow = !this.isShow;
        this.menuSubTop = ev.currentTarget.offsetTop + 80;
      },
      scrollUpDo(e) {
        let menuContent = this.getClass(e.currentTarget.parentNode, "we-menu-inner");
        setTimeout(function () {
          menuContent[0].scrollTop = menuContent[0].scrollTop - 40;
        }, 100);
      },
      scrollDownDo(e) {
        let menuContent = this.getClass(e.currentTarget.parentNode, "we-menu-inner");
        setTimeout(function () {
          menuContent[0].scrollTop = menuContent[0].scrollTop + 40;
        }, 100);

      },
      getClass(obj, name) {
        let arr = [];
        let elems = obj.getElementsByTagName('*');
        for (let i = 0; i < elems.length; i++) {
          if (elems[i].className == name) {
            arr.push(elems[i]);
          }
        }
        return arr;
      },

      onMouseEnter(e) {
        document.getElementById("testMenu").style.top = e.currentTarget.offsetTop + 50 + `px`;
        document.getElementById("testMenu").style.left = document.body.clientWidth - e.currentTarget.offsetLeft + `px`;
        if (!this.backgroundColor) {
          return;
        } else {
          e.currentTarget.style.backgroundColor = this.hoverBackground;
        }
      },
      onMouseLeave(e) {
        if (!this.backgroundColor) {
          return;
        } else {
          if (this.active) {
            e.currentTarget.style.backgroundColor = this.hoverBackground;
          } else {
            e.currentTarget.style.backgroundColor = this.backgroundColor;
          }
        }
      },
      itemMouseEnter(e) {
        let first_level_menu = getByClassDom(e.currentTarget, 'we-menu-item-title');
        this.verticalLineTop = first_level_menu[0].offsetTop;
        this.verticalLineHeight = 50;
        this.menuBarOpacity = 1;
      },
      itemMouseLeave(e) {
        let first_level_menu = getByClassDom(e.currentTarget, 'we-menu-item-title');
        this.verticalLineTop = first_level_menu[0].offsetTop + 28;
        this.verticalLineHeight = 5;
        this.menuBarOpacity = 0;
      },

      itemHorizontalMouseEnter(e) {
        let first_level_menu = getByClassDom(e.currentTarget, 'we-menu-item-title');
        this.horizontalLineLeft = first_level_menu[0].offsetLeft;
        this.horizontalLineWidth = first_level_menu[0].offsetWidth;
        this.menuBarOpacity = 1;
      },
      itemHorizontalMouseLeave(e) {
        let first_level_menu = getByClassDom(e.currentTarget, 'we-menu-item-title');
        this.horizontalLineLeft = first_level_menu[0].offsetLeft + 28;
        this.horizontalLineWidth = 5;
        this.menuBarOpacity = 0;
      },

      onArrowMouseEnter(e) {
        if (!this.backgroundColor) {
          return;
        } else {
          if (!this.arrowDisabled) {
            e.currentTarget.style.backgroundColor = this.hoverBackground;
          } else {
            e.currentTarget.style.backgroundColor = this.backgroundColor;
          }
        }
      },
      onArrowMouseLeave(e) {
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
        let {red, green, blue} = this.getColorChannels(color);
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

      foldShow() {
        let self = this;
        this.isMenuShowDisplay = !this.isMenuShowDisplay;
        setTimeout(function () {
          self.isMenuChildShow = !self.isMenuChildShow;
        });
      }
    },
    mounted() {
      for (let i = 1; i <= 30; i++) {
        this.menuSub.push({"menuTile": "二级菜单"});
      }

    }
  }

  function getByClassDom(parent, cls) {
    let res = [];
    let reg = new RegExp('\\b' + cls + '\\b', 'i');  //匹配cls是一个独立的单词
    let ele = parent.getElementsByTagName('*');
    for (let i = 0; i < ele.length; i++) {
      if (reg.test(ele[i].className)) {
        res.push(ele[i]);
      }
    }
    return res;
  }
</script>

<style scoped>

</style>
