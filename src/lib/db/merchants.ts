import { supabase } from '@/lib/supabase';

export interface Merchant {
  id: string;
  email: string;
  stripe_user_id: string | null;
  stripe_account_email: string | null;
  charges_enabled: boolean;
  payouts_enabled: boolean;
  instant_payouts_enabled: boolean;
  created_at: string;
}

export async function getMerchant(userId: string) {
  // Use Service Role Key for Admin access (API routes) if available
  // Fallback to Anon client (client-side)
  const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

  let client = supabase;
  
  // Create a fresh admin client if possible for this request
  if (url && adminKey) {
     const { createClient } = await import('@supabase/supabase-js');
     client = createClient(url, adminKey);
  }

  if (!client) {
    console.error('Supabase client not initialized (missing keys)');
    return null;
  }

  const { data, error } = await client
    .from('merchants')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching merchant:', error);
    return null;
  }

  return data as Merchant;
}

export async function createMerchant(userId: string, email: string) {
  if (!supabase) throw new Error("Supabase client not initialized");
  
  const { data, error } = await supabase
    .from('merchants')
    .insert([{ id: userId, email }])
    .select()
    .single();

  if (error) {
    console.error('Error creating merchant:', error);
    throw error;
  }

  return data as Merchant;
}

export async function updateMerchantStripeId(userId: string, stripeUserId: string) {
  // Try to use admin client if available for updates
  const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  let client = supabase;
  if (url && adminKey) {
      const { createClient } = await import('@supabase/supabase-js');
      client = createClient(url, adminKey);
  }

  if (!client) throw new Error("Supabase client not initialized");

  const { data, error } = await client
    .from('merchants')
    .update({ stripe_user_id: stripeUserId })
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Error updating merchant stripe id:', error);
    throw error;
  }

  return data as Merchant;
}
