<template>
  <div>
    <table class="we-table" cellpadding="0" cellspacing="0" border="1">
      <colgroup>
        <col style="background-color:#ff0000" width="120px" />
        <col style="background-color:#ff6600" width="120px" />
      </colgroup>
      <tr>
        <th>
          <div class="we-table-cell">标题2</div>
        </th>
        <th>
          <div class="we-table-cell">标题2</div>
        </th>
      </tr>
      <tr>
        <td>
          <div class="we-table-cell">内容1</div>
        </td>
        <td>
          <div class="we-table-cell">内容2</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import WeIcon from '../../packages/icon/src/Icon.vue';
  import WeButton from "../../packages/button/src/Button";
  export default {
    components:{
      weIcon:WeIcon,
      weButton:WeButton
    },

    name: "table-test",

    data() {
      return {

      };
    },

    methods: {

    },

    created() {
    }
  }
</script>

<style scoped>
  .mt15{
    margin-top:15px;
  }
</style>
