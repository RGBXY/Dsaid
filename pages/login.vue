<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="bg-white w-[450px] shadow-lg border py-5 px-6 rounded-xl">
      <form @submit.prevent="signIn">
        <div class="">
          <img class="w-12 border mb-4 border-slate-400 h-12 rounded-md" src="https://eswpcd25uod.exactdn.com/blog/wp-content/uploads/2017/05/01-1024x1024.jpg?strip=all&lossy=1&ssl=1" alt="" />
          <h1 class="text-2xl font-semibold mb-6">Log in to D`said</h1>
          <input type="email" required v-model="email" autocomplete="" placeholder="Your Email" :class="errorStat ? 'border-red-500' : 'border-slate-100'" class="w-full px-3 h-12 border-2 rounded-md outline-none mb-5" />
          <input type="password" required v-model="password" placeholder="Your Password" :class="errorStat ? 'border-red-500' : 'border-slate-100'" class="w-full px-3 h-12 border-2 rounded-md outline-none mb-5" />
          <p v-if="errorStat" class="text-red-500 mb-5 font-semibold">*Invalid Credential!</p>
          <button type="submit" class="w-full font-semibold text-gray-700 bg-gradient-to-r from-gray-200 via-white to-gray-200 border border-slate-200 h-10 rounded-md mb-5">Sign in</button>
          <div class="flex items-center gap-3 justify-center mb-5">
            <div class="w-full bg-slate-400 h-[1px]"></div>
            <p class="text-slate-500 font-semibold text-sm">or</p>
            <div class="w-full bg-slate-400 h-[1px]"></div>
          </div>
        </div>
      </form>
      <div class="flex items-center gap-5 mb-4">
        <button class="w-full font-semibold flex items-center gap-2 justify-center text-gray-700 bg-gradient-to-r from-gray-200 via-white to-gray-200 border border-slate-200 h-10 rounded-md">
          <img class="w-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="" />
          <p class="text-lg">Google</p>
        </button>
        <button @click="signInWithGithub" class="w-full font-semibold flex items-center gap-2 justify-center text-gray-700 bg-gradient-to-r from-gray-200 via-white to-gray-200 border border-slate-200 h-10 rounded-md">
          <img class="w-5" src="https://www.ninniku.tw/wp-content/uploads/2023/09/github-logo.png" alt="" />
          <p class="text-lg">Github</p>
        </button>
      </div>
      <div class="flex items-center justify-center gap-2 text-center py-2 w-full">
        <p class="">New to D`said?</p>
        <RouterLink to="/signup" class="font-semibold text-blue-600 underline">Join now</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const api = useApistore();

const router = useRouter();

const email = ref("");
const password = ref("");
const errorStat = ref(false);
const user = useSupabaseUser();
const client = useSupabaseClient();
const method = useMethodstore();

const signIn = async () => {
  const { user, error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    errorStat.value = true;
    method.notifFnc(error.message);
  } else {
    method.notifFnc("Login Berhasil");
  }
};

async function signInWithGithub() {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: "github",
  });

  if (error) {
    console.error("Error during sign-in:", error);
    return;
  }

  const user = client.auth.user(); // Ambil user setelah login
  console.log("User after sign-in:", user);
}

onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo("/");
    }
  });
});
</script>
