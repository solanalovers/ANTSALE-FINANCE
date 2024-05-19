import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
