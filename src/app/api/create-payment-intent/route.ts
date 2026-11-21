import { stripe } from '@/lib/stripe';
import { getMerchant } from '@/lib/db/merchants';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { amount, merchantId } = await req.json();

    if (!merchantId) {
      return new NextResponse('Merchant ID is required', { status: 400 });
    }

    // 1. Get the merchant's connected Stripe Account ID from our DB
    const merchant = await getMerchant(merchantId);
    if (!merchant || !merchant.stripe_user_id) {
      return new NextResponse('Merchant not found or not connected to Stripe', { status: 404 });
    }

    const connectedAccountId = merchant.stripe_user_id;

    // 2. Calculate Application Fee (e.g., 0.5%)
    const fee = Math.round(amount * 0.005); 

    // 3. Create PaymentIntent logic (Direct Charge)
    const paymentIntent = await stripe.paymentIntents.create(
      {
        amount: amount, // Amount in cents
        currency: 'usd',
        payment_method_types: ['card'],
        application_fee_amount: fee,
        payment_method_options: {
          card: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            request_three_d_secure: 'never' as any, // 2D Payment Logic
          },
        },
      },
      {
        stripeAccount: connectedAccountId, // Direct Charge Header
      }
    );

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: unknown) {
    console.error('Payment Intent Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new NextResponse(errorMessage, { status: 500 });
  }
}
