import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return {
        statusCode: 400,
        error: error.message,
      };
    }

    return {
      statusCode: 200,
      message: "logout success",
    };
  } catch (err) {
    return {
      statusCode: 500,
      message: "error",
    };
  }
});
