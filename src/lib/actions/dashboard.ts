'use server';

import { stripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";

// Hardcoded Test Merchant ID for MVP Demo
const DEMO_MERCHANT_ID = '11111111-1111-1111-1111-111111111111';

// Safe lazy init helper
const getSupabaseAdmin = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
};

export async function getMerchantProfile() {
  const supabaseAdmin = getSupabaseAdmin();
  if (!supabaseAdmin) return null;

  const { data: merchant, error } = await supabaseAdmin
    .from('merchants')
    .select('*')
    .eq('id', DEMO_MERCHANT_ID)
    .single();

  if (error || !merchant) {
    console.error("Error fetching merchant:", error);
    return null;
  }
  return merchant;
}

export async function getDashboardStats() {
  const merchant = await getMerchantProfile();
  if (!merchant || !merchant.stripe_user_id) return null;

  try {
    const balance = await stripe.balance.retrieve({
      stripeAccount: merchant.stripe_user_id,
    });

    const charges = await stripe.charges.list({
      limit: 100,
    }, {
      stripeAccount: merchant.stripe_user_id,
    });

    // Calculate aggregations
    const totalVolumeCents = charges.data.reduce((acc, curr) => acc + curr.amount, 0);
    const totalVolume = (totalVolumeCents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    
    // Pending payouts are roughly equivalent to pending balance for this demo
    const pendingAmountCents = balance.pending.reduce((acc, curr) => acc + curr.amount, 0);
    const pendingPayouts = (pendingAmountCents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    
    // 2D Sales count
    const salesCount = charges.data.length;

    // Available for Instant Payout
    const availableAmountCents = balance.available.reduce((acc, curr) => acc + curr.amount, 0);
    const availableBalance = (availableAmountCents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    return {
      totalVolume,
      pendingPayouts,
      salesCount,
      availableBalance,
      charges_enabled: merchant.charges_enabled,
      payouts_enabled: merchant.payouts_enabled,
      instant_payouts_enabled: merchant.instant_payouts_enabled,
      stripe_user_id: merchant.stripe_user_id
    };
  } catch (error) {
    console.error("Stripe Stats Error:", error);
    return null;
  }
}

export async function getRecentTransactions(limit: number = 5) {
  const merchant = await getMerchantProfile();
  if (!merchant || !merchant.stripe_user_id) return [];

  try {
    const charges = await stripe.charges.list({
      limit: limit,
    }, {
      stripeAccount: merchant.stripe_user_id,
    });

    return charges.data.map((charge) => ({
      id: charge.id,
      amount: (charge.amount / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      status: charge.status, // succeeded, pending, failed
      customer: charge.billing_details.name || charge.billing_details.email || 'Guest Customer',
      date: new Date(charge.created * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }),
      method: charge.payment_method_details?.card?.brand ? 
        `${charge.payment_method_details.card.brand.toUpperCase()} •••• ${charge.payment_method_details.card.last4}` : 
        'Card'
    }));
  } catch (error) {
    console.error("Stripe Transactions Error:", error);
    return [];
  }
}

export async function getAllTransactions() {
  return getRecentTransactions(100);
}
