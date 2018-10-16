<template>
  <div>

    <we-layer v-model="normalLayer" icon-name="edit">
      <div>这是一个普通的弹窗</div>
    </we-layer>

    <we-layer v-model="normalRightLayer"
              :width="40"
              :height="100"
              drag
              position="right"
    >
      <div>组件方式弹出右侧</div>
    </we-layer>

    <we-layer v-model="clickCloseLayer"
              :width="50"
              :height="50"
              :z-index="500"
              @click-confirm="(e, close) => {
                this.$confirm({
                  message: '确定要关闭吗？',
                  clickConfirm: (e, c) => {
                    c();
                    close();
                  }
                });
              }"
    >
      <div style="font-size: 20px">点击确定按钮进行校验,校验成功后关闭弹层</div>
    </we-layer>

    <we-layer
      v-model="visible"
      :width="50"
      :height="40"
      drag
      resize
      :drag-out-the-screen="false"
      :show-header="true"
      :show-footer="true"
      :show-mask="true"
      position="center"
      title="按住我可拖拽"
      @click-confirm="confirm"
    >


      <div style="width: 5000px;height: 600px;font-size: 20px;padding: 10px"  slot-scope="scope">
        你可以像缩放windows系统窗口那样将鼠标放在边框上缩放窗口
        <p></p>
        宽：{{scope.width}}
        <p></p>
        高：{{scope.height}}
      </div>

      <!--      <template slot-scope="{ width, height }">

              <iframe src="http://wwww.baidu.com" frameborder="0" width="100%" height="98%"></iframe>

            </template>-->

    </we-layer>

    <div id="dom1" style="display: none">
      <div style="width: 5000px;height: 100px;font-size: 20px">我是使用js方式打开的弹层</div>
    </div>

    <div id="dom2" style="display: none">
      <div style="height: 100px;font-size: 20px">
        <span>不同方向的弹出,为了演示,不同方向我被自定义了不同的宽高</span>
        <span>可以给我绑定宽高,当绑定的值 &gt; 100 时,单位为px</span>
        <span>当绑定的值 &lt; 100 时,单位为%,也就是百分比</span>
      </div>
    </div>
    <div id="dom3" style="display: none">
      <div style="height: 100px;font-size: 20px">
        不想要头部和底部可以不要
      </div>
    </div>
    <div id="dom4" style="display: none">
      <div style="height: 100px;font-size: 20px">
        头部、身体、底部都是可以自定义的
        当使用组件方式调用时,可以使用slot来自定义
        当使用JS方式调用时,可以使用Render函数来自定义
      </div>
    </div>

    <we-button @click="normalLayer = !normalLayer">普通弹层</we-button>
    <we-button @click="normalRightLayer = !normalRightLayer">组件右侧弹窗</we-button>
    <we-button @click="clickCloseLayer = !clickCloseLayer">可以点击确定按钮关闭的弹层</we-button>
    <we-button @click="visible = true">可拖拽可缩放的弹层</we-button>
    <we-button @click="$layer({target:'#dom1', drag: true, resize: true, height: 400})">使用$layer打开弹层</we-button>
    <we-button @click="layer01">弹出指定文本</we-button>

    <div style="margin-top: 20px">
      <we-button type="primary" @click="$layer({target: '#dom2', width: 600, height: 200})">中间弹出</we-button>
      <we-button type="primary" @click="$layer({target: '#dom2', width: 100, height: 400, position: 'top'})">上方弹出
      </we-button>
      <we-button type="primary" @click="$layer({target: '#dom2', width: 50, height: 100, position: 'right'})">右方弹出
      </we-button>
      <we-button type="primary" @click="$layer({target: '#dom2', width: 100, height: 30, position: 'bottom'})">下方弹出
      </we-button>
      <we-button type="primary" @click="$layer({target: '#dom2', width: 100, height: 50, position: 'left'})">左方弹出
      </we-button>
    </div>
    <div style="margin-top: 20px">
      <we-button type="primary" @click="$layer({target: '#dom2', width: 50, height: 50, position: 'left-top'})">左上角弹出
      </we-button>
      <we-button type="primary" @click="$layer({target: '#dom2', width: 90, height: 90, position: 'right-top'})">右上角弹出
      </we-button>
      <we-button type="primary" @click="$layer({target: '#dom2', width: 20, height: 30, position: 'right-bottom'})">
        右下角弹出
      </we-button>
      <we-button type="primary" @click="$layer({target: '#dom2', width: 300, height: 30, position: 'left-bottom'})">
        左下角弹出
      </we-button>
    </div>
    <div style="margin-top: 20px">
      <we-button type="danger"
                 @click="$layer({target: '#dom3', width: 50, height: 50, showHeader: false, showFooter: false})">
        可以没有头部、底部的弹层
      </we-button>
      <we-button type="warning" @click="customLayer">自定义</we-button>
    </div>
    <div style="margin-top: 20px">
      <we-button type="primary" @click="$layer({target: '#dom1', width: 50, height: 50, resizePosition: ['left']})">
        只有左边可以缩放的弹层
      </we-button>
      <we-button type="primary"
                 @click="$layer({target: '#dom1', width: 50, height: 50, resizePosition: ['left', 'top']})">
        只有左边和上边可以缩放的弹层
      </we-button>
      <we-button type="primary"
                 @click="$layer({target: '#dom1', width: 50, height: 50, resizePosition: ['left', 'right']})">
        只有左边和右边可以缩放的弹层
      </we-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "layer-test",

    data() {
      return {
        normalLayer: false,
        normalRightLayer: false,
        clickCloseLayer: false,
        visible: false,
        o: {
          value: false
        }
      };
    },

    watch: {
      'o.value': {
        handler(v) {
          console.log(v)
        },
        deep: true
      }
    },

    methods: {
      confirm(e, close) {
        close();
      },
      layer01() {
        this.$layer('<div style="color: red">这是一段HTML文本</div>')
      },
      customLayer() {
        this.$layer({
          target: '#dom4',
          width: 800,
          headerRender(h) {
            return h('we-button', {
              style: {
                marginTop: '10px'
              },
              props: {
                type: 'primary'
              }
            }, '我来组成头部');
          },
          render(h) {
            return h('we-button', {
              props: {
                type: 'danger'
              },
              style: {
                margin: '10px 0 10px 0'
              }
            }, '我来组成身体');
          },
          footerRender(h) {
            return h('div', {
              style: {
                padding: '10px'
              }
            }, [
              h('we-button', '我们来组成底部'),
              h('we-button', '我们来组成底部'),
              h('we-button', '我们来组成底部'),
              h('we-button', '我们来组成底部'),
              h('we-button', '我们来组成底部')
            ]);
          }
        });
      }
    },

    created() {
    }
  }
</script>

<style>

</style>
