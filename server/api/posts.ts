import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  const { data, error } = await supabase.from("posts").select("*").order("createdAt", { ascending: false });

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message });
  }

  return data;
});
