<template>
  <router-view />
</template>
<script setup>
onMounted(() => {
  window.addEventListener("beforeunload", function () {
    console.log("监听到浏览器刷新事件");
  });
});
</script>

