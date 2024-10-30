<template>
  <div :class="method.modalProfileStat ? 'flex' : 'hidden'" class="w-full flex-col bg-white rounded-lg border shadow absolute overflow-hidden -top-20 left-0">
    <button class="p-2 hover:bg-slate-200 flex items-center justify-center gap-1 text-green-600 font-semibold">
      <PhosphorIconUserCircle class="" />
      <p class="text-sm">Profile</p>
    </button>
    <button @click="logout" class="p-2 hover:bg-slate-200 flex items-center justify-center gap-1 text-red-600 font-semibold">
      <PhosphorIconSignOut class="" />
      <p class="text-sm">Log Out</p>
    </button>
  </div>
</template>

<script setup>
const method = useMethodstore();
const router = useRouter();
const user = useSupabaseUser();
const client = useSupabaseClient();

const logout = async () => {
  const { error } = await client.auth.signOut();
  navigateTo("/login");

  //   try {
  //     const response = await $fetch("/api/auth/logout", {
  //       method: "POST",
  //     });
  //     if (response.statusCode === 200) {
  //       router.push("/login");
  //     } else {
  //       console.error("Error during logout:", response.error);
  //     }
  //   } catch (error) {
  //     console.error("Error during logout:", error);
  //   }
};
</script>
