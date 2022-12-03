<script setup lang="ts">
import { checkUpdate, installUpdate } from "@tauri-apps/api/updater";
import { relaunch } from "@tauri-apps/api/process";

try {
  const { shouldUpdate, manifest } = await checkUpdate();
  if (shouldUpdate) {
    // display dialog
    await installUpdate();
    // install complete, restart app
    await relaunch();
  }
} catch (error) {
  console.log(error);
}

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
