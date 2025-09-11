import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";

export const createSupabaseClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      async accessToken() {
        // Clerk's auth() returns helpers; we must CALL getToken to get a string or null
        const { getToken } = auth();
        // Optionally specify template if configured in Clerk for Supabase
        const token = await getToken({ template: "supabase" }).catch(() => null);
        return token ?? null;
      },
    }
  );
};