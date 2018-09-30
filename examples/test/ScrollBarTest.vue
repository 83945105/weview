<template>
  <div>
    <div style="height: 150px;">
      <el-scrollbar style="height:100%;">
        <div style="background-color: #EEEEEE">
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
        </div>
      </el-scrollbar>
    </div>
    <div style="height: 20px; background-color: #f0c78a; margin: 20px 0;"></div>

    <div style="height: 150px; width: 300px;">
      <div class="we-scrollbar" style="height: 100%; background-color: #EEEEEE">
        <div class="we-scrollbar-inner" id="scrollBar" ref="inner">
          <div style="width: 600px;">
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          <div class="test">12312</div>
          </div>
        </div>
        <div class="we-scrollbar-bar is-vertical"
             @mousedown="clickTrackHandler">
          <div class="we-scrollbar-bar-thumb"
               :style="{
               height: `${verticalHeight}`,
               transform: `translateY(${verticalTranslate}%)`}"
               @mousedown="clickThumbHandler"
               ></div>
        </div>
        <div class="we-scrollbar-bar is-horizontal">
          <div class="we-scrollbar-bar-thumb"
               :style="{
               width: `${horizontalWidth}`,
               transform: `translateY(${horizontalTranslate}%)`}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import WeIcon from "../../packages/icon/src/Icon.vue";
  import WeButton from "../../packages/button/src/Button.vue";

  export default {
    name: "scroll-bar-test",

    components: {
      weIcon: WeIcon,
      weButton: WeButton
    },
    data() {
      return {
        isShow: false,
        verticalHeight: 0,
        verticalTranslate: 0,
        horizontalWidth: 0,
        horizontalTranslate: 0,
        scrollRatio: 0
      }
    },

    computed: {
    },

    created(){
      this.$nextTick(function() {
        let box = this.$refs.inner;
        // let _this = this;
        box.addEventListener('scroll', (e) => {
          // this.scrollTop += e.deltaY;
          // console.log(box.scrollTop * 100 / box.clientHeight);
          this.verticalTranslate = box.scrollTop * 100 / box.clientHeight;
          // this.$refs.inner.addEventListener('scroll', _this.handleScroll)
        }, false);
      });
    },

    methods: {
      updateScrollBar(){
        let inner = document.getElementById("scrollBar");
        let heightPercentage = inner.clientHeight * 100 / inner.scrollHeight;
        let widthPercentage = inner.clientWidth * 100 / inner.scrollWidth;
        this.verticalHeight = (heightPercentage < 100) ? (heightPercentage + '%') : '';
        this.horizontalWidth = (widthPercentage < 100) ? (widthPercentage + '%') : '';
      },
      clickTrackHandler(e){
        let box = this.$refs.inner;
        //this.verticalTranslate = (this.verticalHeight+50)/2;
        box.scrollTop = this.verticalTranslate / box.clientHeight *100;

        console.log(this.verticalTranslate);
        // console.log(this.$refs.inner.scrollTop);
        // console.log(e.clientY);
        // document.addEventListener('mousemove', this.clickThumbHandler);
      },
      clickThumbHandler(e) {
        // console.log(e);
        // e.currentTarget.onmousemove = (e)=>{
        //   this.startDrag(e);
        // };
        // document.onmouseup = (e) => {
        //   document.onmousemove = null;
        //   document.onmouseup = null;
        // };
        // this[this.bar.axis] = (e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]));
      },
      startDrag(e){
        e.stopImmediatePropagation();

        this.startDrag(e);
        // console.log("startDrag" + e);
        // on(e.currentTarget, 'mousemove', this.mouseMoveDocumentHandler);
      },
      mouseMoveDocumentHandler(e){
        console.log("mouseMoveDocumentHandler" + e);
      }
    },

    mounted(){
      this.$nextTick(this.updateScrollBar);

      //let inner = document.getElementById("scrollBar");
      //this.scrollRatio = (inner.scrollHeight - inner.offsetHeight) / (inner.offsetHeight - this.verticalHeight);
    }
  }
</script>

<style scoped>
  .testUl li{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #e5e5e5;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .test{
    /*float: left;*/
  }
  .el-scrollbar__wrap{
    overflow: hidden;
  }
</style>
