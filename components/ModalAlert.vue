<template>
  <div class="bg-black bg-opacity-25 h-screen fixed top-0 right-0 left-0 z-40 flex justify-center items-center" :class="method.modalAlertStat ? 'visible' : 'invisible'">
    <div class="w-[500px] bg-white z-10 rounded-lg border shadow-md py-5 flex-col px-7 flex justify-center items-center">
      <h1 class="text-start w-full text-xl font-semibold mb-1.5">Are you absolutely sure?</h1>
      <p class="mb-4 text-gray-500 text-sm">This action cannot be undone. This will permanently delete your account and remove your data from our servers?</p>
      <div class="flex items-center justify-end w-full gap-3">
        <button @click="method.modalAlertClose" class="border-[1.5px] text-slate-950 h-10 px-4 rounded-lg font-semibold">Cancel</button>
        <button @click="submitDelete(dataPostId)" class="bg-slate-950 h-10 px-4 rounded-lg text-white font-semibold">
          <p class="text-sm">Continue</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const api = useApistore();
const method = useMethodstore();

const submitDelete = (data) => {
  api.deletePost(data);
  method.modalAlertClose();
  method.notifFnc("Post berhasil di hapus")
  document.body.style.overflowY = "auto";
};

const props = defineProps(["dataPostId"]);
</script>
