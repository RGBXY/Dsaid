<template>
  <div :class="method.notifStat ? 'right-5 visible' : '-right-[100%] invisible'" class="fixed right-5 bottom-5 py-2 w-[320px] transition-all duration-200 ease-in-out max-h-[300px] overflow-y-auto bg-white border rounded-xl shadow-md">
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

<script setup>
const method = useMethodstore();
</script>
