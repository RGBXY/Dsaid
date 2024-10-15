import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params as { id?: number }; // Ambil ID dari parameter URL

  if (!id) {
    return createError({ statusCode: 400, statusMessage: "ID is required." });
  }

  // Hapus data dari tabel 'posts'
  const { error } = await supabase.from("posts").delete().eq("id", id);

  if (error) {
    return createError({ statusCode: 500, statusMessage: error.message });
  }

  return {
    status: 200,
    message: "Post deleted successfully",
  };
});
