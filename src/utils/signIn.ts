import { SupabaseClient } from '@supabase/supabase-js';

export const signIn = async (supabaseClient: SupabaseClient) => {
   const { error } = await supabaseClient.auth.signInWithOAuth({ provider: 'google' });
   if (error) console.log(error);
};

export default signIn;
