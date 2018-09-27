<template>
  <div>
    <!--一级带图标菜单-->
    <h3>一级带图标菜单</h3>
    <div style="height: 100px; width: 220px; position: relative; border: 1px solid #e5e5e5;">
      <div class="we-menu is-full" :style="[{ backgroundColor }]">
        <div class="we-menu-inner vertical-scroll">
          <div class="we-menu-item"
               @mouseenter="itemMouseEnter($event)"
               @mouseleave="itemMouseLeave($event)">
            <div class="we-menu-item-title is-active"
                 :style="[itemStyle, { backgroundColor }]"
                 @mouseenter="onMouseEnter($event)"
                 @mouseleave="onMouseLeave($event)"
                 @click="foldShow">
              <div class="we-menu-item-title-arrow"
                   :class="{'is-selected':isMenuChildShow}"
                   :style="[ itemArrowColor ]">
                <we-icon name="angle-down"></we-icon>
              </div>
              <div class="we-menu-item-title-inner">
                <div class="we-menu-item-title-inner-icon">
                  <we-icon name="edit"></we-icon>
                </div>
                <div class="we-menu-item-title-inner-text">一级菜单</div>
              </div>
            </div>
            <div class="we-menu-child" :class="{'is-fold':isMenuChildShow}"
                 :style="{'display':isMenuShowDisplay ? 'block' : 'none'}">
              <div class="we-menu-item-group">
                <h3 class="we-menu-item-group-title"
                    :style="[ textGroupColor , {'padding-left':50 + textPaddingLeft*0 + `px`}]">分组</h3>
                <div class="we-menu-item">
                  <div class="we-menu-item-title"
                       :style="[itemStyle, { backgroundColor }, {'padding-left':50 + textPaddingLeft*0 + `px`}]"
                       @mouseenter="onMouseEnter($event)"
                       @mouseleave="onMouseLeave($event)">
                    <div class="we-menu-item-title-arrow"
                         :style="[ itemArrowColor ]">
                      <we-icon name="angle-down"></we-icon>
                    </div>
                    <div class="we-menu-item-title-inner is-full">
                      <!--<div class="we-menu-item-title-inner-icon">-->
                      <!--<we-icon name="edit"></we-icon>-->
                      <!--</div>-->
                      <div class="we-menu-item-title-inner-text">二级菜单</div>
                    </div>
                  </div>
                  <div class="we-menu-item">
                    <div class="we-menu-item-title is-selected"
                         :style="[itemStyle, backgroundSelectedSyle , {'padding-left':50 + textPaddingLeft*1 + `px`}]"
                         @mouseenter="onMouseEnter($event)"
                         @mouseleave="onMouseLeave($event)">
                      <div class="we-menu-item-title-arrow"
                           :style="[ itemArrowColor ]">
                        <!--<we-icon name="angle-down"></we-icon>-->
                      </div>
                      <div class="we-menu-item-title-inner is-full">
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
                    <div class="we-menu-item-title-arrow"
                         :style="[ itemArrowColor ]">
                      <!--<we-icon name="angle-right"></we-icon>-->
                    </div>
                    <div class="we-menu-item-title-inner is-full">
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
          <div class="we-menu-item"
               @mouseenter="itemMouseEnter($event)"
               @mouseleave="itemMouseLeave($event)">
            <div class="we-menu-item-title"
                 :style="[itemStyle, { backgroundColor }]"
                 @mouseenter="onMouseEnter($event)"
                 @mouseleave="onMouseLeave($event)">
              <div class="we-menu-item-title-arrow"
                   :style="[ itemArrowColor ]">
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

          <div class="we-menu-vertical-line"
               :style="{'top':verticalLineTop+'px','height':verticalLineHeight+'px','opacity':menuBarOpacity}"></div>
        </div>
      </div>
    </div>
    <!--/一级带图标菜单-->

    <!--折叠菜单-->
    <h3>折叠菜单</h3>
    <div class="we-menu-external" style="left: 0;"
         :style="{'width': menuWidth + `px`}"
         @mouseenter="menuWidth = 210"
         @mouseleave="menuWidth = 50">
      <div class="we-menu" :style="[{'width':menuInnerWidth + `px`} , { backgroundColor }]">
        <div class="we-menu-inner">
          <div class="we-menu-item"
               @mouseenter="itemMouseEnter($event)"
               @mouseleave="itemMouseLeave($event)">
            <div class="we-menu-item-title is-active"
                 :style="[itemStyle]"
                 @mouseenter="onMouseEnter($event)"
                 @mouseleave="onMouseLeave($event)"
                 @click="foldShow">
              <div class="we-menu-item-title-arrow"
                   :class="{'is-selected':isMenuChildShow}"
                   :style="[ itemArrowColor ]">
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
          <div class="we-menu-item"
               @mouseenter="itemMouseEnter($event)"
               @mouseleave="itemMouseLeave($event)">
            <div class="we-menu-item-title"
                 :style="[itemStyle, { backgroundColor }]"
                 @mouseenter="onMouseEnter($event)"
                 @mouseleave="onMouseLeave($event)">
              <div class="we-menu-item-title-arrow"
                   :style="[ itemArrowColor ]">
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

          <div class="we-menu-vertical-line"
               :style="{'top':verticalLineTop+'px','height':verticalLineHeight+'px','opacity':menuBarOpacity}"></div>
        </div>
      </div>
    </div>
    <!--/折叠菜单-->

    <!--正常菜单-->
    <h3>正常菜单</h3>
    <div style="width: 220px; position: relative; border: 1px solid #e5e5e5;height: 300px">
      <ul class="we-menu we-menu-scroll vertical is-full" :style="[{ backgroundColor }]" style="height: auto;">
        <li class="we-menu-item"
             @mouseenter="itemMouseEnter($event)"
             @mouseleave="itemMouseLeave($event)">
          <div class="we-menu-item-title is-active"
               :style="[itemStyle, { backgroundColor }, {'padding-left':textPaddingLeft + `px`}]"
               @mouseenter="onMouseEnter($event)"
               @mouseleave="onMouseLeave($event)"
               style="padding-left: 15px;">
            <div class="we-menu-item-title-arrow"
                 :style="[ itemArrowColor ]">
              <we-icon name="angle-down"></we-icon>
            </div>
            <div class="we-menu-item-title-inner">
              <!--<div class="we-menu-item-title-inner-icon">-->
              <!--<we-icon name="edit"></we-icon>-->
              <!--</div>-->
              <div class="we-menu-item-title-inner-text">一级菜单</div>
            </div>
          </div>


          <div class=" is-fold" style="display: block">

            <ul class="we-menu" :style="[{ backgroundColor }]">
              <li class="we-menu-item-group">
                <h3 class="we-menu-item-group-title"
                    :style="[ textGroupColor , {'padding-left':textPaddingLeft*2 + `px`}]">分组</h3>
                <ul>
                  <li class="we-menu-item">
                    <div class="we-menu-item-title"
                         :style="[itemStyle, {'padding-left':textPaddingLeft*2 + `px`}]"
                         @mouseenter="onMouseEnter($ewe-menu-childvent)"
                         @mouseleave="onMouseLeave($event)"
                         style="padding-left: 30px;">
                      <div class="we-menu-item-title-arrow"
                           :style="[ itemArrowColor ]">
                        <we-icon name="angle-down"></we-icon>
                      </div>
                      <div class="we-menu-item-title-inner is-full">
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
                        <div class="we-menu-item-title-arrow"
                             :style="[ itemArrowColor ]">
                          <we-icon name="angle-down"></we-icon>
                        </div>
                        <div class="we-menu-item-title-inner is-full">
                          <!--<div class="we-menu-item-title-inner-icon">-->
                          <!--<we-icon name="edit"></we-icon>-->
                          <!--</div>-->
                          <div class="we-menu-item-title-inner-text">三级菜单</div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="we-menu-item">
                  <div class="we-menu-item-title"
                       :style="[itemStyle, { backgroundColor }, {'padding-left':textPaddingLeft*2 + `px`}]"
                       @mouseenter="onMouseEnter($event)"
                       @mouseleave="onMouseLeave($event)">
                    <div class="we-menu-item-title-arrow"
                         :style="[ itemArrowColor ]">
                      <!--<we-icon name="angle-right"></we-icon>-->
                    </div>
                    <div class="we-menu-item-title-inner is-full">
                      <!--<div class="we-menu-item-title-inner-icon">-->
                      <!--<we-icon name="edit"></we-icon>-->
                      <!--</div>-->
                      <div class="we-menu-item-title-inner-text">二级菜单</div>
                    </div>
                  </div>
                </div>
              </li>

            </ul>

          </div>

        </li>
        <div class="we-menu-item"
             @mouseenter="itemMouseEnter($event)"
             @mouseleave="itemMouseLeave($event)">
          <div class="we-menu-item-title"
               :style="[itemStyle, { backgroundColor }, {'padding-left':textPaddingLeft + `px`}]"
               @mouseenter="onMouseEnter($event)"
               @mouseleave="onMouseLeave($event)">
            <div class="we-menu-item-title-arrow"
                 :style="[ itemArrowColor ]">
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
        <div class="we-menu-item"
             @mouseenter="itemMouseEnter($event)"
             @mouseleave="itemMouseLeave($event)">
          <div class="we-menu-item-title"
               :style="[itemStyle, { backgroundColor }, {'padding-left':textPaddingLeft + `px`}]"
               @mouseenter="onMouseEnter($event)"
               @mouseleave="onMouseLeave($event)">
            <div class="we-menu-item-title-arrow"
                 :style="[ itemArrowColor ]">
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
        <div class="we-menu-item"
             @mouseenter="itemMouseEnter($event)"
             @mouseleave="itemMouseLeave($event)">
          <div class="we-menu-item-title"
               :style="[itemStyle, { backgroundColor }, {'padding-left':textPaddingLeft + `px`}]"
               @mouseenter="onMouseEnter($event)"
               @mouseleave="onMouseLeave($event)">
            <div class="we-menu-item-title-arrow"
                 :style="[ itemArrowColor ]">
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
      </ul>
    </div>
    <!--/正常菜单-->

    <!--正常菜单-->
    <h3>正常菜单组件</h3>
    <div style="height: 800px; width: 220px; position: relative; border: 1px solid #e5e5e5;">
      <we-menu>
        <we-menu-item>我的工作台</we-menu-item>
        <we-menu-group label="分组">
          <we-menu-item>选项一</we-menu-item>
          <we-menu-item>选项二</we-menu-item>
          <we-menu-item>

            二级菜单

            <we-menu slot="subMenu">
              <we-menu-item>二级选项一</we-menu-item>
              <we-menu-item>

                三级菜单

                <we-menu slot="subMenu">
                  <we-menu-item>三级选项一</we-menu-item>
                  <we-menu-item>三级选项二</we-menu-item>
                </we-menu>

              </we-menu-item>
            </we-menu>

          </we-menu-item>
        </we-menu-group>
      </we-menu>
    </div>
    <!--/正常菜单-->

    <!--右键菜单-->
    <div class="we-menu we-menu-right is-shadow is-full" style="height: 200px; width: 220px; left: 50%; top: 50px;"
         :style="[ menuBorderStyle ]">
      <div class="we-menu-arrow we-menu-arrow-up"
           :style="[arrowStyle]"
           @mouseenter="onArrowMouseEnter($event)"
           @mouseleave="onArrowMouseLeave($event)"
           @click="scrollUpDo($event)">
        <we-icon name="angle-up"></we-icon>
      </div>
      <div class="we-menu-inner" style="top: 20px; bottom: 20px;" :style="[{ backgroundColor }]">
        <div class="we-menu-item">
          <div class="we-menu-item-title"
               :style="[itemStyle]"
               @mouseenter="onMouseEnter($event)"
               @mouseleave="onMouseLeave($event)">
            <div class="we-menu-item-title-arrow"
                 :style="[ itemArrowColor ]">
              <!--<we-icon name="angle-down"></we-icon>-->
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
                :style="[ textGroupColor, {'padding-left': textPaddingLeft*2 + `px`}]">分组</h3>
            <div class="we-menu-item-title"
                 :style="[itemStyle, { backgroundColor }]"
                 @mouseenter="onMouseEnter($event)"
                 @mouseleave="onMouseLeave($event)">
              <div class="we-menu-item-title-arrow"
                   :style="[ itemArrowColor ]">
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
              <div class="we-menu-item-title-arrow"
                   :style="[ itemArrowColor ]">
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
            <div class="we-menu-item-title-quick" :style="[ textQuickColor ]">
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
            <div class="we-menu-item-title-arrow"
                 :style="[ itemArrowColor ]">
              <we-icon name="angle-right"></we-icon>
            </div>
            <div class="we-menu-item-title-inner">
              <div class="we-menu-item-title-inner-icon">
                <!--<we-icon name="edit"></we-icon>-->
              </div>
              <div class="we-menu-item-title-inner-text">一级菜单</div>
            </div>
          </div>
          <div class="we-menu-item-split" :style="[splitStyle]"></div>
          <div class="we-menu-item-title"
               :style="[itemStyle, { backgroundColor }]"
               @mouseenter="onMouseEnter($event)"
               @mouseleave="onMouseLeave($event)">
            <div class="we-menu-item-title-arrow"
                 :style="[ itemArrowColor ]">
              <we-icon name="angle-right"></we-icon>
            </div>
            <div class="we-menu-item-title-inner">
              <div class="we-menu-item-title-inner-icon">
                <!--<we-icon name="edit"></we-icon>-->
              </div>
              <div class="we-menu-item-title-inner-text">一级菜单</div>
            </div>
          </div>
        </div>
      </div>
      <div class="we-menu-arrow we-menu-arrow-down is-disabled"
           :style="[arrowStyle]"
           @mouseenter="onArrowMouseEnter($event)"
           @mouseleave="onArrowMouseLeave($event)"
           @click="scrollDownDo($event)">
        <we-icon name="angle-down"></we-icon>
      </div>
    </div>
    <!--/右键菜单-->

    <!--横向菜单-->
    <h3>横向菜单</h3>
    <div style="height: 50px; width: 800px; position: relative; border: 1px solid #e5e5e5;">
      <div class="we-menu is-full" :style="[{ backgroundColor }]">
        <div class="we-menu-inner">
          <div class="we-menu-item is-horizontal"
               @mouseenter="itemHorizontalMouseEnter($event)"
               @mouseleave="itemHorizontalMouseLeave($event)">
            <div class="we-menu-item-title"
                 :style="[itemStyle, { backgroundColor }]"
                 @mouseenter="onMouseEnter($event)"
                 @mouseleave="onMouseLeave($event)">
              <div class="we-menu-item-title-arrow"
                   :style="[ itemArrowColor ]">
                <we-icon name="angle-down"></we-icon>
              </div>
              <div class="we-menu-item-title-inner">
                <!--<div class="we-menu-item-title-inner-icon">-->
                <!--<we-icon name="edit"></we-icon>-->
                <!--</div>-->
                <div class="we-menu-item-title-inner-text">
                  <we-icon name="edit"></we-icon>
                  <span>一级菜单</span>
                </div>
              </div>
            </div>
          </div>
          <div class="we-menu-item is-horizontal"
               @mouseenter="itemHorizontalMouseEnter($event)"
               @mouseleave="itemHorizontalMouseLeave($event)">
            <div class="we-menu-item-title"
                 :style="[itemStyle, { backgroundColor }]"
                 @mouseenter="onMouseEnter($event)"
                 @mouseleave="onMouseLeave($event)">
              <div class="we-menu-item-title-arrow"
                   :style="[ itemArrowColor ]">
                <we-icon name="angle-down"></we-icon>
              </div>
              <div class="we-menu-item-title-inner">
                <!--<div class="we-menu-item-title-inner-icon">-->
                <!--<we-icon name="edit"></we-icon>-->
                <!--</div>-->
                <div class="we-menu-item-title-inner-text">
                  <we-icon name="edit"></we-icon>
                  <span>一级菜单</span>
                </div>
              </div>
            </div>
          </div>

          <div class="we-menu-horizontal-line"
               :style="{
               'bottom': 0,
               'left':horizontalLineLeft+'px',
               'width':horizontalLineWidth+'px',
               'opacity':menuBarOpacity}"></div>
        </div>
      </div>
    </div>
    <!--/横向菜单-->

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
    components: {
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
