import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Validasi data
  if (!body.name || !body.text) {
    return createError({ statusCode: 400, statusMessage: "Name and text are required." });
  }

  // Melakukan insert data ke tabel 'posts'
  const { data, error } = await supabase.from("posts").insert([
    {
      name: body.name,
      text: body.text,  
      createdAt: new Date().toISOString(),
    },
  ]);

  // Penanganan error
  if (error) {
    console.error("Error inserting data:", error);
    return createError({ statusCode: 500, statusMessage: error.message });
  }

  // Mengambil data yang baru ditambahkan
  const { data: newPost, error: fetchError } = await supabase.from("posts").select("*").order("createdAt", { ascending: false }).limit(1).single();

  if (fetchError) {
    console.error("Error fetching newly added post:", fetchError);
    return createError({ statusCode: 500, statusMessage: fetchError.message });
  }

  // Mengembalikan data yang telah disisipkan
  return {
    status: 200,
    message: "Post added successfully",
    data: newPost, // Mengembalikan data yang baru ditambahkan
  };
});
