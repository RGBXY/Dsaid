<template>
  <div v-if="api.postLoad === true" class="mx-auto text-center">Loading...</div>
  <div v-else v-for="post in api.postData" :key="post.id" class="bg-white p-3 mb-4 rounded-xl shadow border">
    <div class="w-full flex justify-between mb-1">
      <div class="w-[10%]">
        <img class="w-10 h-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSllWfbNNOBU9FDj5S19JluiU2ttdZ3-Z29w&s" alt="" />
      </div>
      <div class="w-[90%] flex items-center justify-between">
        <div class="mb-2">
          <h1 class="font-semibold mb-1 leading-4">{{ post.name }}</h1>
          <p class="text-[11px] text-gray-600">{{ formatDateTime(post.createdAt) }}</p>
        </div>
        <div class="relative">
          <button @click="method.modalActFnc(post.id)">
            <PhosphorIconDotsThree class="text-3xl text-slate-500" />
          </button>
          <UiModalAction :dataPost="post" v-if="post.id === method.modalActId" />
        </div>
      </div>
    </div>

    <div>
      <p class="text-sm">{{ post.text }}</p>
    </div>
  </div>
</template>

<script setup>
const method = useMethodstore();
const api = useApistore();

api.posts();

function formatDateTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
  });
}
</script>
