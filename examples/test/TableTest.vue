<template>
  <div style="width:700px; height: 250px">
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
              <we-tooltip trigger="hover" max-width="200px" placement="top"
                          content="列内容1列内容1列内容1列内容1">
                <div class="cell" :class="{'is-ellipsis': showOverflowTooltip}">
                  列内容1列内容1列内容1列内容1
                </div>
              </we-tooltip>
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
        <div ref="fixedLeft" class="we-table-fixed-left-content-wrapper" style="top: 47px; height: 185px;">
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
        <div ref="fixedRight" class="we-table-fixed-right-content-wrapper" style="top: 47px; height: 185px;">
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
        scrollRight: false,
        showOverflowTooltip: true
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

        let scrollWidth = this.$refs.content.scrollLeft + this.$refs.content.clientWidth;
        if (this.$refs.content.scrollWidth === scrollWidth) {
          this.scrollRight = true;
        } else {
          this.scrollRight = false;
        }

        this.$refs.fixedLeft.scrollTop = this.$refs.content.scrollTop;
        this.$refs.fixedRight.scrollTop = this.$refs.content.scrollTop;
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
