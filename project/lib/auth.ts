import { supabase } from './supabase';
import { Database } from './database.types';

type Company = Database['public']['Tables']['companies']['Insert'];
type Profile = Database['public']['Tables']['profiles']['Insert'];

export async function signUpUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
}

export async function createCompany(company: Company) {
  const { data, error } = await supabase
    .from('companies')
    .insert(company)
    .select()
    .single();
    
  if (error) throw error;
  return data;
}

export async function createProfile(profile: Profile) {
  const { error } = await supabase
    .from('profiles')
    .insert(profile);
    
  if (error) throw error;
}