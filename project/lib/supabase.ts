import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Add error handling and retry logic for fetch operations
const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    },
    global: {
      fetch: async (url, options = {}) => {
        const maxRetries = 3;
        let attempt = 0;
        
        while (attempt < maxRetries) {
          try {
            return await fetch(url, {
              ...options,
              credentials: 'include',
            });
          } catch (error) {
            attempt++;
            if (attempt === maxRetries) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
          }
        }
        
        throw new Error('Failed to fetch after multiple retries');
      }
    }
  });
};

export const supabase = createSupabaseClient();