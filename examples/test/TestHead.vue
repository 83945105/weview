<template>
  <div style="padding-bottom:20px;">
    <button @click="$router.push({name: 'Test'})">首页</button>
    <button @click="$router.push({name: 'LayerFrameTest'})">弹层框架测试</button>
    <button @click="$router.push({name: 'ButtonTest'})">按钮测试</button>
    <button @click="$router.push({name: 'ApiFrameTest'})">api框架测试</button>
  </div>
</template>

<script>
  export default {
    name: "test-head"
  }
</script>

<style scoped>

</style>
