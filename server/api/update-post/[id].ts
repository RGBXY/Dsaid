import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  // Mengambil ID dari URL
  const { id } = event.context.params as { id?: number }; // Ambil ID dari parameter URL

  // Membaca body request
  const body = await readBody(event);

  // Validasi data
  if (!body.name || !body.text) {
    return createError({ statusCode: 400, statusMessage: "Name and text are required." });
  }

  // Melakukan update data di tabel 'posts'
  const { error } = await supabase.from("posts").update({ name: body.name, text: body.text }).eq("id", id);

  if (error) {
    return createError({ statusCode: 500, statusMessage: error.message });
  }

  return {
    status: 200,
    message: "Post updated successfully",
  };
});
