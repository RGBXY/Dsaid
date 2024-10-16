import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { status: 401, error: error.message };
  } else {
    console.log('hai');
  }

  return {
    status: 200,
    data,
  };
});
