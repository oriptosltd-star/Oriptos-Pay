import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Use Service Role Key to bypass RLS
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabaseAdmin
      .from('merchants')
      .upsert({
        id: '11111111-1111-1111-1111-111111111111', // Valid UUID
        email: 'demo@upfinit.com',
        stripe_user_id: 'acct_123456789', // Placeholder connected account
        charges_enabled: true,
        payouts_enabled: true,
        instant_payouts_enabled: true
      })
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Seed Error:", error);
    return NextResponse.json({ error: error.message, hint: "Did you add SUPABASE_SERVICE_ROLE_KEY to .env.local?" }, { status: 500 });
  }
}
