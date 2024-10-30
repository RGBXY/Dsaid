<template>
  <div :class="method.modalActStat ? 'flex' : 'hidden'" class="w-[100px] flex-col bg-white rounded-lg border shadow absolute overflow-hidden top-8 right-0">
    <button @click="method.modalUpdateFnc(dataPost.id)" class="p-2 hover:bg-slate-200 flex items-center justify-center gap-1 text-green-600 font-semibold">
      <PhosphorIconNotePencil class="" />
      <p class="text-sm">Edit</p>
    </button>
    <ModalUpdatePost :datas="data" />
    <button @click="method.modalAlertFnc" class="p-2 hover:bg-slate-200 flex items-center justify-center gap-1 text-red-600 font-semibold">
      <PhosphorIconTrash class="" />
      <p class="text-sm">Delete</p>
    </button>
    <ModalAlert :dataPostId="dataPost.id" />
  </div>
</template>

<script setup>
const method = useMethodstore();
const api = useApistore();

const props = defineProps(["dataPost"]);

const data = props.dataPost;
</script>
