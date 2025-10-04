import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY;

/* connect to supabase project */
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;

//Uncaught Error: supabaseKey is required.