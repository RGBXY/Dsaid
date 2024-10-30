export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  if (!user.value) {
    return navigateTo("/login");
  } else if ((user.value && to.path === "/login") || (user.value && to.path === "/signup")) {
    return navigateTo("/");
  }
});
