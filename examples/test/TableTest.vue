<template>
  <div style="width:400px; height: 250px">
    <!--we-table-scroll-x we-table-scroll-y-->
    <div class="we-table we-table-align-left we-table-border we-table-scroll-x we-table-scroll-y">
      <div ref="header" class="we-table-header-wrapper">
        <table cellpadding="0" cellspacing="0" border="0" class="we-table-header" style="width: 750px">
          <colgroup>
            <col width="50">
            <col width="150">
            <col width="150">
            <col width="150">
            <col width="150">
            <col width="100">
            <col name="gutter" width="17">
          </colgroup>
          <thead>
          <tr>
            <th class="we-table-column-selection is-leaf">
              <div class="cell">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </th>
            <th class="is-leaf">
              <div class="cell">列1</div>
            </th>
            <th class="is-leaf">
              <div class="cell">列2</div>
            </th>
            <th class="is-leaf">
              <div class="cell">列3</div>
            </th>
            <th class="is-leaf">
              <div class="cell">列4</div>
            </th>
            <th class="is-leaf">
              <div class="cell">操作</div>
            </th>
            <th class="gutter" style="width: 17px;"></th>
          </tr>
          </thead>
        </table>
      </div>
      <div ref="content" class="we-table-content-wrapper" style="max-height: 202px">
        <table cellpadding="0" cellspacing="0" border="0" class="we-table-content" style="width: 750px">
          <colgroup>
            <col width="50">
            <col width="150">
            <col width="150">
            <col width="150">
            <col width="150">
            <col width="100">
          </colgroup>
          <tbody>
          <tr>
            <td class="we-table-column-selection is-leaf">
              <div class="cell">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容1</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容2</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容3</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容4</div>
            </td>
            <td class="is-leaf">
              <div class="cell">修改</div>
            </td>
          </tr>
          <tr>
            <td class="we-table-column-selection is-leaf">
              <div class="cell">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容1</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容2</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容3</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容4</div>
            </td>
            <td class="is-leaf">
              <div class="cell">修改</div>
            </td>
          </tr>
          <tr>
            <td class="we-table-column-selection is-leaf">
              <div class="cell">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容1</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容2</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容3</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容4</div>
            </td>
            <td class="is-leaf">
              <div class="cell">修改</div>
            </td>
          </tr>
          <tr>
            <td class="we-table-column-selection is-leaf">
              <div class="cell">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容1</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容2</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容3</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容4</div>
            </td>
            <td class="is-leaf">
              <div class="cell">修改</div>
            </td>
          </tr>
          <tr>
            <td class="we-table-column-selection is-leaf">
              <div class="cell">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容1</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容2</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容3</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容4</div>
            </td>
            <td class="is-leaf">
              <div class="cell">修改</div>
            </td>
          </tr>
          <tr>
            <td class="we-table-column-selection is-leaf">
              <div class="cell">
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容1</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容2</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容3</div>
            </td>
            <td class="is-leaf">
              <div class="cell">列内容4</div>
            </td>
            <td class="is-leaf">
              <div class="cell">修改</div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>


      <div class="we-table-fixed-left" style="width: 50px; bottom: 17px;"
           :class="{'is-fixed-shadow':scrollLeft}">
        <div class="we-table-fixed-left-header-wrapper">
          <table cellpadding="0" cellspacing="0" border="0" class="we-table-header" style="width: 750px">
            <colgroup>
              <col width="50">
              <col width="150">
              <col width="150">
              <col width="150">
              <col width="150">
              <col width="100">
            </colgroup>
            <thead>
            <tr>
              <th class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </th>
              <th class="is-leaf">
                <div class="cell">列1</div>
              </th>
              <th class="is-hidden is-leaf">
                <div class="cell">列2</div>
              </th>
              <th class="is-hidden is-leaf">
                <div class="cell">列3</div>
              </th>
              <th class="is-hidden is-leaf">
                <div class="cell">列4</div>
              </th>
              <th class="is-hidden is-leaf">
                <div class="cell">操作</div>
              </th>
            </tr>
            </thead>
          </table>
        </div>
        <div class="we-table-fixed-left-content-wrapper" style="top: 47px; height: 185px;">
          <table cellpadding="0" cellspacing="0" border="0" class="we-table-content" style="width: 750px">
            <colgroup>
              <col width="50">
              <col width="150">
              <col width="150">
              <col width="150">
              <col width="150">
              <col width="100">
            </colgroup>
            <tbody>
            <tr>
              <td class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容1</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容2</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容3</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容4</div>
              </td>
              <td class="is-leaf">
                <div class="cell">修改</div>
              </td>
            </tr>
            <tr>
              <td class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容1</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容2</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容3</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容4</div>
              </td>
              <td class="is-leaf">
                <div class="cell">修改</div>
              </td>
            </tr>
            <tr>
              <td class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容1</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容2</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容3</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容4</div>
              </td>
              <td class="is-leaf">
                <div class="cell">修改</div>
              </td>
            </tr>
            <tr>
              <td class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容1</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容2</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容3</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容4</div>
              </td>
              <td class="is-leaf">
                <div class="cell">修改</div>
              </td>
            </tr>
            <tr>
              <td class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容1</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容2</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容3</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容4</div>
              </td>
              <td class="is-leaf">
                <div class="cell">修改</div>
              </td>
            </tr>
            <tr>
              <td class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容1</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容2</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容3</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容4</div>
              </td>
              <td class="is-leaf">
                <div class="cell">修改</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="we-table-fixed-right" style="width: 100px; bottom: 17px; right: 17px;"
           :class="{'is-fixed-shadow':scrollRight}">
        <div class="we-table-fixed-right-header-wrapper">
          <table cellpadding="0" cellspacing="0" border="0" class="we-table-header" style="width: 750px">
            <colgroup>
              <col width="50">
              <col width="150">
              <col width="150">
              <col width="150">
              <col width="150">
              <col width="100">
            </colgroup>
            <thead>
            <tr>
              <th class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </th>
              <th class="is-leaf">
                <div class="cell">列1</div>
              </th>
              <th class="is-hidden is-leaf">
                <div class="cell">列2</div>
              </th>
              <th class="is-hidden is-leaf">
                <div class="cell">列3</div>
              </th>
              <th class="is-hidden is-leaf">
                <div class="cell">列4</div>
              </th>
              <th class="is-hidden is-leaf">
                <div class="cell">操作</div>
              </th>
            </tr>
            </thead>
          </table>
        </div>
        <div class="we-table-fixed-right-content-wrapper" style="top: 47px; height: 185px;">
          <table cellpadding="0" cellspacing="0" border="0" class="we-table-content" style="width: 750px">
            <colgroup>
              <col width="50">
              <col width="150">
              <col width="150">
              <col width="150">
              <col width="150">
              <col width="100">
            </colgroup>
            <tbody>
            <tr>
              <td class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容1</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容2</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容3</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容4</div>
              </td>
              <td class="is-leaf">
                <div class="cell">修改</div>
              </td>
            </tr>
            <tr>
              <td class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容1</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容2</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容3</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容4</div>
              </td>
              <td class="is-leaf">
                <div class="cell">修改</div>
              </td>
            </tr>
            <tr>
              <td class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容1</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容2</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容3</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容4</div>
              </td>
              <td class="is-leaf">
                <div class="cell">修改</div>
              </td>
            </tr>
            <tr>
              <td class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容1</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容2</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容3</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容4</div>
              </td>
              <td class="is-leaf">
                <div class="cell">修改</div>
              </td>
            </tr>
            <tr>
              <td class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容1</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容2</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容3</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容4</div>
              </td>
              <td class="is-leaf">
                <div class="cell">修改</div>
              </td>
            </tr>
            <tr>
              <td class="we-table-column-selection is-leaf">
                <div class="cell">
                  <el-checkbox v-model="checked"></el-checkbox>
                </div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容1</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容2</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容3</div>
              </td>
              <td class="is-leaf">
                <div class="cell">列内容4</div>
              </td>
              <td class="is-leaf">
                <div class="cell">修改</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="we-table-fixed-patch" style="height: 47px; width: 17px;"></div>
    </div>
    <!--<table class="we-table" cellpadding="0" cellspacing="0" border="1">-->
    <!--<colgroup>-->
    <!--<col width="120px" />-->
    <!--<col width="120px" />-->
    <!--</colgroup>-->
    <!--<tr>-->
    <!--<th>-->
    <!--<div class="we-table-cell">标题2</div>-->
    <!--</th>-->
    <!--<th>-->
    <!--<div class="we-table-cell">标题2</div>-->
    <!--</th>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>-->
    <!--<div class="we-table-cell">内容1</div>-->
    <!--</td>-->
    <!--<td>-->
    <!--<div class="we-table-cell">内容2</div>-->
    <!--</td>-->
    <!--</tr>-->
    <!--</table>-->

    <!--<table class="we-table" cellpadding="0" cellspacing="0" border="1">-->
    <!--<colgroup>-->
    <!--<col width="120px" />-->
    <!--<col width="120px" />-->
    <!--</colgroup>-->
    <!--<tr>-->
    <!--<th>-->
    <!--<div class="we-table-cell">标题2</div>-->
    <!--</th>-->
    <!--<th>-->
    <!--<div class="we-table-cell">标题2</div>-->
    <!--</th>-->
    <!--</tr>-->
    <!--<tr>-->
    <!--<td>-->
    <!--<div class="we-table-cell">内容1</div>-->
    <!--</td>-->
    <!--<td>-->
    <!--<div class="we-table-cell">内容2</div>-->
    <!--</td>-->
    <!--</tr>-->
    <!--</table>-->
  </div>
</template>

<script>
  import WeIcon from '../../packages/icon/src/Icon.vue';
  import WeButton from "../../packages/button/src/Button";

  export default {
    components: {
      weIcon: WeIcon,
      weButton: WeButton
    },

    name: "table-test",

    data() {
      return {
        checked: false,
        scrollLeft: true,
        scrollRight: false
      };
    },

    methods: {
      handleScroll(e) {
        this.$refs.header.scrollLeft = this.$refs.content.scrollLeft;
        if (this.$refs.content.scrollLeft === 0) {
          this.scrollLeft = true;
        } else {
          this.scrollLeft = false;
        }

        let scrollBarWidth = this.$refs.content.offsetWidth + this.$refs.content.scrollLeft + (this.$refs.content.offsetWidth - this.$refs.content.clientWidth);
        console.log(scrollBarWidth + '+++' + this.$refs.content.scrollLeft);
        if (this.$refs.content.scrollLeft === scrollBarWidth) {
          this.scrollRight = true;
        } else {
          this.scrollRight = false;
        }
      }
    },

    created() {
    },

    mounted() {
      this.$refs.content.addEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style scoped>
  .mt15 {
    margin-top: 15px;
  }
</style>
