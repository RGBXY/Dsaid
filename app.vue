<template>
  <div>
    <NuxtPage />
    <ModalAddPost />
    <UiToastNotification v-if="method.notifStat" />
  </div>
</template>

<script setup>
const method = useMethodstore();
</script>
