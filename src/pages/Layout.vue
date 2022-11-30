<script setup lang="ts">
import MenuBar from '@/components/MenuBar.vue'
</script>
<template>
  <div class="bar_title" data-tauri-drag-region>aaa</div>
  <MenuBar />
  <router-view></router-view>
</template>
<style lang="scss">
.bar_title {
  border: 1px solid red;
}

</style>