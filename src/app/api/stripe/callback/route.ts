import { stripe } from '@/lib/stripe';
import { updateMerchantStripeId } from '@/lib/db/merchants';
import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    console.error('Stripe Connect Check error:', error);
    return redirect('/dashboard?error=stripe_connect_failed');
  }

  if (!code) {
    return redirect('/dashboard?error=missing_code');
  }

  try {
    const response = await stripe.oauth.token({
      grant_type: 'authorization_code',
      code,
    });

    const stripeUserId = response.stripe_user_id;
    if (!stripeUserId) {
        throw new Error('No stripe_user_id returned');
    }
    
    // TODO: In a real app, get the authenticated user's ID. 
    // For this demo/MVP without full Auth UI, we might need a way to identify the user.
    // Assuming a hardcoded test user or session-based user for now.
    // Replace 'test-merchant-id' with actual auth logic:
    // const { data: { user } } = await supabase.auth.getUser();
    // const userId = user?.id;
    const userId = 'test-merchant-id'; 

    await updateMerchantStripeId(userId, stripeUserId);

    return redirect('/dashboard?success=stripe_connected');
  } catch (err) {
    console.error('Error exchanging token:', err);
    return redirect('/dashboard?error=token_exchange_failed');
  }
}
