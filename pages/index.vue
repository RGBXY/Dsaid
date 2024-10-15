<template>
  <Lay>
    <div class="flex flex-col items-center justify-center w-[55%]">
      <div class="w-full px-6 h-[71px] shadow z-10 sticky left-0 top-0 bg-white border-b border-gray-200 text-center flex justify-between items-center">
        <p class="text-xl font-bold">What On Your Mind Today</p>
        <button @click="method.modalFnc" class="h-9 px-4 flex items-center justify-center gap-2 rounded-full hover:shadow-inner bg-gradient-to-r from-white via-gray-50 to-gray-100 transition-all border border-gray-400">
          <p class="text-sm font-semibold">Create Post</p>
          <PhosphorIconPlus class="text-sm" weight="bold" />
        </button>
      </div>
      <div class="max-w-lg w-full h-full py-5">
        <div class="w-full">
          <PostCard />
        </div>
      </div>
    </div>
  </Lay>
</template>

<script setup>
import Lay from "~/layouts/Lay.vue";

const method = useMethodstore();
const api = useApistore();
</script>
