<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <div class="layout-drawer-wrapper-body">
          Aside
        </div>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.layout-drawer-wrapper-body {
  display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: #fff;
}
</style>