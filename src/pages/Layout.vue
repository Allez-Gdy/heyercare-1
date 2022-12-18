<script setup lang="ts">
import MenuBar from '@/components/MenuBar.vue'
</script>
<template>
  <MenuBar />
  <!-- <router-view></router-view> -->
  <!-- default – 进入和离开过渡同时发生
  in-out – 新元素的过渡先进入。然后，当前元素过渡出去。
  out-in - 当前元素先过渡出去。然后，新元素过渡进来。 -->
  <!-- <transition name="fade" mode="default">
  </transition> -->
  <router-view />
</template>
<style>
/*页面切换动画*/
/*进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除*/
.fade-enter-active {
    transition: opacity .5s;
}
/*进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除*/
.fade-enter-from {
    opacity: 0;
}
/*离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除*/
.fade-leave-to {
    opacity: 0;
}
/*离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除*/
.fade-leave-active {
    /* opacity:0; */
    transition: opacity .5s;
}
</style>