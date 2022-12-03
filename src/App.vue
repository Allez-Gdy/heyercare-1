<script setup lang="ts">
// import { checkUpdate, installUpdate } from '@tauri-apps/api/updater'
// import { relaunch } from '@tauri-apps/api/process'
// try {
//   const { shouldUpdate, manifest } = await checkUpdate()
//   if (shouldUpdate) {
//     // display dialog
//     await installUpdate()
//     // install complete, restart the app
//     await relaunch()
//   }
// } catch (error) {
//   console.log(error)
// }
import { listen } from '@tauri-apps/api/event'
listen('tauri://update-available', function (res) {
  console.log('aaa');
  
  console.log('New version available: ', res)
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
