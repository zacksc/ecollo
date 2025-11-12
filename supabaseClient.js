import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = 'URL do banco';
const supabaseAnonKey = 'Key do banco';

if (!global._supabaseClient) {
  global._supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  });
}

export const supabase = global._supabaseClient;