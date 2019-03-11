<template>
  <div style="width:250px; height: 250px">
    <div class="we-table we-table-align-left we-table-border we-table-scroll-x we-table-scroll-y">
      <div class="we-table-header-wrapper">
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
            </tr>
          </thead>
        </table>
      </div>
      <div class="we-table-content-wrapper" style="height: 202px">
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
          </tbody>
        </table>
      </div>
      <div class="we-table-fixed-left" style="width: 50px; height: 233px">
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
        <div class="we-table-fixed-left-content-wrapper" style="top: 48px; height: 185px;">
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
            </tbody>
          </table>
        </div>
      </div>
      <div class="we-table-fixed-right"></div>
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
        checked: false
      };
    },

    methods: {},

    created() {
    }
  }
</script>

<style scoped>
  .mt15 {
    margin-top: 15px;
  }
</style>
