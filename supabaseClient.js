import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90aXdvaGt5cndjZnh5Z2lrd3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2MTI1MTgsImV4cCI6MjA3NzE4ODUxOH0.qll3uaSBvNMnYst5GhreSzwFAou_3fy57HSWpkyl4_k';
const supabaseUrl = 'https://otiwohkyrwcfxygikwpz.supabase.co/';

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