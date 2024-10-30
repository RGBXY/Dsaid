<template>
  <div :class="method.notifStat ? 'right-5 opacity-100' : '-right-[100%] opacity-0'" class="fixed bottom-5 py-2 w-[320px] transition-all duration-200 ease-in-out max-h-[300px] overflow-y-auto bg-white border rounded-xl shadow-md">
    <div class="bg-gradient-to-b to-green-200 via-geen-700 from-green-500 w-0 h-1.5 absolute top-0 progress-bar"></div>
    <div class="flex items-center justify-between border-b px-4 pb-2">
      <h1 class="font-semibold text-lg">Notification</h1>
      <button @click="method.notifFncClose" class="p-1 rounded-full border border-slate-500">
        <PhosphorIconX class="text-slate-500 text-xs" />
      </button>
    </div>
    <div class="px-4 py-2">
      <p>{{ method.notifData }}</p>
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  animation: progress linear;
  animation-duration: 5s;
  animation-fill-mode: forwards;
}

@keyframes progress {
  from {
    width: 0px;
  }
  to {
    width: 100%;
  }
}
</style>

<script setup>
const method = useMethodstore();

onMounted(() => {
  watchEffect(() => {
    if (method.notifStat) {
      const intervalId = setInterval(() => {
        method.notifFncClose();

        if (!method.notifStat) {
          clearInterval(intervalId);
        }
      }, 5000);
    }
  });
});
</script>
