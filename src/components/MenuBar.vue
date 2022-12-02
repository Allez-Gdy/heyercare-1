<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { pageRouter } from '@/router/pageRouter';
import { RouteRecordRaw, useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const currentPage = ref('')
const system = navigator.userAgent.indexOf('Mac') !== -1

onMounted(() => {
  currentPage.value = route.fullPath
})

const changeRoute = (routeRaw: RouteRecordRaw) => {
  currentPage.value = routeRaw.path
  router.push(routeRaw.path)
}

</script>
<template>
  <header class="flex-jc-center">
    <div class="fn_buttons flex" :style="{right: system ? '20px' : '', left: system ? '' : 0}">
      <div class="menu-icon cs"><svg-icon icon-class="xinjian"></svg-icon></div>
      <div class="menu-icon cs"><svg-icon icon-class="shangchuan"></svg-icon></div>
    </div>
    <div class="page_menu flex flex-ai-center">
      <div v-for="item in pageRouter">
        <div :class="{'active_page': item.path === currentPage}" @click="changeRoute(item)">
          {{item.meta.title}}
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss">
.active_page {
  color: #FFC639;
}

header {
  height: 50px;
  background-color: #1A874F;
  position: relative;
  .fn_buttons {
    position: absolute;
    top: 0;
    bottom: 0;
    .menu-icon {
      color: #fff; font-size: 20px;
      display: flex;
      align-items: center;
      margin-left: 30px;
    }
  }
  .page_menu {
    color: #fff;
    font-size: 16px;
    >:first-child {
      margin-left: 0;
    }
    div {
      text-align: center;
      cursor: pointer;
      margin-left: 20px;
    }
  }
}
</style>