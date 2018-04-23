<!--弹层框架-->
<template>
  <div>
    弹层框架
    <!--<div id="we-layer-mask" class="we-layer-mask bg-black" onclick="layerCloseAll()"></div>-->
    <!--右侧详情-->
    <!--<div id="rightLayer" class="we-layer-frame" style="top:0;bottom:0;"-->
         <!--:style="{'width':layerWidth,'right':'-'+layerWidth}">-->
      <!--<div class="we-layer-frame-title">-->
        <!--<h3>详情</h3>-->
        <!--<i class="weiconfont we-icon-shanchu we-layer-frame-close" onclick="layerClose('rightLayer')"></i>-->
      <!--</div>-->
      <!--<div class="we-layer-frame-content we-v-scroll">-->
        <!--<div class="we-pa10 we-hidden">-->
          <!--<ul class="we-form we-form-info">-->
            <!--<li>-->
              <!--<em class="form-left we-w-mini we-tar we-fc-txt3">登录名：</em>-->
              <!--<div class="form-right we-wordwrap we-fc-txt1">wangxiaoming</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<em class="form-left we-w-mini we-tar we-fc-txt3">真实姓名：</em>-->
              <!--<div class="form-right we-wordwrap we-fc-txt1">王晓明</div>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="we-layer-frame-btn we-tac">-->
        <!--<button class="we-btn" onclick="layerClose('rightLayer')">提交</button>-->
        <!--<input type="button" class="we-btn we-btn-close" onclick="layerClose('rightLayer')" value="取消"/>-->
      <!--</div>-->
    <!--</div>-->
    <!--/右侧详情-->

    <!--上侧详情-->
    <!--<div id="topLayer" class="we-layer-frame" style="left:0;right:0;"-->
         <!--:style="{'height':layerHeight,'top':'-'+layerHeight}">-->
      <!--<div class="we-layer-frame-title">-->
        <!--<h3>详情</h3>-->
        <!--<i class="weiconfont we-icon-shanchu we-layer-frame-close" onclick="layerTopClose('topLayer')"></i>-->
      <!--</div>-->
      <!--<div class="we-layer-frame-content we-v-scroll">-->
        <!--<div class="we-pa10 we-hidden">-->
          <!--<ul class="we-form we-form-info">-->
            <!--<li>-->
              <!--<em class="form-left we-w-mini we-tar we-fc-txt3">登录名：</em>-->
              <!--<div class="form-right we-wordwrap we-fc-txt1">wangxiaoming</div>-->
            <!--</li>-->
            <!--<li>-->
              <!--<em class="form-left we-w-mini we-tar we-fc-txt3">真实姓名：</em>-->
              <!--<div class="form-right we-wordwrap we-fc-txt1">王晓明</div>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="we-layer-frame-btn we-tac">-->
        <!--<button class="we-btn" onclick="layerTopClose('rightLayer')">提交</button>-->
        <!--<input type="button" class="we-btn we-btn-close" onclick="layerTopClose('topLayer')" value="取消"/>-->
      <!--</div>-->
    <!--</div>-->
    <!--/上侧详情-->
  </div>
</template>

<script>
  export default {
    name: "layer-frame"
  }
</script>

<style scoped>

</style>
