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
import { ask, confirm } from '@tauri-apps/api/dialog' 
import { onMounted } from 'vue';
import { checkUpdate , installUpdate, onUpdaterEvent} from '@tauri-apps/api/updater';

// confirm(
//   'This action cannot be reverted. Are you sure?', { 
//     title: 'Tauri', 
//     type: 'warning' 
//   }
// ).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })
onMounted(async () => {
  const update = await checkUpdate();
  if (update.shouldUpdate) {
    console.log(`Installing update ${update.manifest?.version}, ${update.manifest?.date}, ${update.manifest!.body}`);
    await installUpdate();
  }
  // const unlisten = await onUpdaterEvent(({ error, status }) => {
  //   console.log('Updater event', error, status);
  // });
  // unlisten();
})
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
