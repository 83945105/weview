<template>
  <div>
    <div style="width: 150px">
      <div class="we-menu">
        <div class="we-menu-item">
          <div class="we-menu-icon"><we-icon name="search-o"></we-icon></div>
          <div class="we-menu-text">一级菜单</div>
          <div class="we-menu-angle"><we-icon name="caret-right"></we-icon></div>
          <div class="we-menu sub">
            <div class="we-menu-item">
              <div class="we-menu-icon"><we-icon name="search-o"></we-icon></div>
              <div class="we-menu-text">二级菜单</div>
              <div class="we-menu-angle"><we-icon name="caret-right"></we-icon></div>
            </div>
            <div class="we-menu-item">
              <div class="we-menu-icon"><we-icon name="search-o"></we-icon></div>
              <div class="we-menu-text">二级菜单</div>
              <div class="we-menu-angle"><we-icon name="caret-right"></we-icon></div>
            </div>
            <div class="we-menu-item">
              <div class="we-menu-icon"><we-icon name="search-o"></we-icon></div>
              <div class="we-menu-text">二级菜单</div>
              <div class="we-menu-angle"><we-icon name="caret-right"></we-icon></div>
            </div>
          </div>
        </div>
        <div class="we-menu-split"></div>
        <div class="we-menu-item">
          <div class="we-menu-icon"></div>
          <div class="we-menu-text">一级菜单</div>
          <div class="we-menu-angle"><we-icon name="caret-right"></we-icon></div>
        </div>
        <div class="we-menu-item">
          <div class="we-menu-icon"></div>
          <div class="we-menu-text">一级菜单</div>
          <div class="we-menu-angle"><we-icon name="caret-right"></we-icon></div>
        </div>
        <div class="we-menu-item">
          <div class="we-menu-icon"></div>
          <div class="we-menu-text">一级菜单</div>
          <div class="we-menu-angle"><we-icon name="caret-right"></we-icon></div>
        </div>
        <div class="we-menu-split"></div>
        <div class="we-menu-item">
          <div class="we-menu-icon"></div>
          <div class="we-menu-text">一级菜单</div>
          <div class="we-menu-angle"><we-icon name="caret-right"></we-icon></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import WeIcon from "../../packages/icon/src/Icon.vue";

    export default {
        components:{
          weIcon:WeIcon
        },
        data() {
          return {
            name: 'menu'
          }
        }
    }
</script>

<style scoped>

</style>
