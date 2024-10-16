<template>
  <form @submit.prevent="signUp" class="w-full h-screen flex justify-center items-center">
    <div class="bg-white w-[450px] shadow-lg border py-5 px-6 rounded-xl">
      <img class="w-12 border mb-4 border-slate-400 h-12 rounded-md" src="https://eswpcd25uod.exactdn.com/blog/wp-content/uploads/2017/05/01-1024x1024.jpg?strip=all&lossy=1&ssl=1" alt="" />
      <h1 class="text-2xl font-semibold mb-6">Sign up to D`said</h1>
      <input type="email" placeholder="Your Email" v-model="email" class="w-full px-3 h-12 border-2 rounded-md outline-none mb-5" />
      <input type="password" placeholder="Your Password" v-model="password" class="w-full px-3 h-12 border-2 rounded-md outline-none mb-5" />
      <button class="w-full font-semibold text-gray-700 bg-gradient-to-r from-gray-200 via-white to-gray-200 border border-slate-200 h-10 rounded-md mb-5">Sign up</button>
      <div class="flex items-center gap-3 justify-center mb-5">
        <div class="w-full bg-slate-400 h-[1px]"></div>
        <p class="text-slate-500 font-semibold text-sm">or</p>
        <div class="w-full bg-slate-400 h-[1px]"></div>
      </div>
      <div class="flex items-center gap-5 mb-3">
        <button class="w-full font-semibold flex items-center gap-2 justify-center text-gray-700 bg-gradient-to-r from-gray-200 via-white to-gray-200 border border-slate-200 h-10 rounded-md">
          <img class="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" />
          <p class="text-lg">Google</p>
        </button>
        <button class="w-full font-semibold flex items-center gap-2 justify-center text-gray-700 bg-gradient-to-r from-gray-200 via-white to-gray-200 border border-slate-200 h-10 rounded-md">
          <img class="w-5" src="https://www.ninniku.tw/wp-content/uploads/2023/09/github-logo.png" alt="" />
          <p class="text-lg">Github</p>
        </button>
      </div>
      <div class="flex items-center justify-center gap-2 text-center py-2 w-full">
        <p class="">Alredy on D`said?</p>
        <RouterLink to="/login" class="font-semibold text-blue-600 underline">Sign in</RouterLink>
      </div>
    </div>
  </form>
</template>

<script setup>
const email = ref("");
const password = ref("");
const error = ref(false);
const user = useSupabaseUser();
const method = useMethodstore();

const signUp = async () => {
  try {
    const { user, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (error) {
      console.error("Sign-up error:", error.message);
      method.notifFnc(error.message);
    }

    method.notifFnc("Berhasil sign up silahkan perika email");

    console.log("User signed up:", user);
    // Arahkan pengguna untuk memverifikasi email jika diperlukan
  } catch (err) {
    console.error("Unexpected error during sign-up:", err);
  }
};

onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo("/");
    }
  });
});
</script>
