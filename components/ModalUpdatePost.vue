<template>
  <div class="bg-black bg-opacity-25 h-screen fixed top-0 right-0 left-0 z-40 flex" :class="method.modalUpdateStat ? 'visible' : 'invisible'">
    <div :class="method.modalUpdateStat ? 'bottom-0' : '-bottom-full'" class="left-0 z-40 transition-all duration-500 ease-in-out h-[90vh] absolute right-0 border rounded-t-[50px] bg-white w-full justify-center py-10 flex">
      <button @click.stop @click="method.modalUpdateFnc()" class="right-10 absolute top- z-50 border-2 rounded-full p-2">
        <PhosphorIconX />
      </button>
      <form @submit.prevent="submitUpdate" class="w-full">
        <div class="w-full flex flex-col items-center relative h-full">
          <h1 class="text-3xl font-bold">Edit Post</h1>
          <div class="max-w-lg w-full flex flex-col items-center p-10">
            <div class="flex flex-col w-full mb-5">
              <label for="name" class="mb-2.5 font-semibold">Your Name :</label>
              <input type="text" class="outline-none border-2 px-5 w-full h-10 text-sm rounded-md" v-model="form.name" id="name" required />
            </div>
            <div class="flex flex-col w-full mb-8">
              <label for="text" class="mb-2.5 font-semibold">Your Content</label>
              <textarea v-model="form.text" rows="8" class="outline-none border-2 p-3 w-full text-sm rounded-md" id="text" required></textarea>
            </div>
            <button type="submit" class="w-full font-semibold text-gray-700 bg-gradient-to-r from-gray-200 via-white to-gray-200 border border-slate-200 h-10 rounded-md">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const method = useMethodstore();
const api = useApistore();

const props = defineProps(["datas"]);

const form = ref({
  name: props.datas.name || "",
  text: props.datas.text || "",
});

const id = props.datas.id;

const submitUpdate = () => {
  api.updatePost(id, form.value);
  method.modalActFnc();
  method.modalUpdateClose();
  method.notifFnc("Post berhasil di update");
};
</script>
