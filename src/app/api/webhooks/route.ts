import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const headerList = await headers();
  const signature = headerList.get('Stripe-Signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new NextResponse(`Webhook Error: ${errorMessage}`, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      await handleInstantPayout(paymentIntent, event.account);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new NextResponse(null, { status: 200 });
}

async function handleInstantPayout(
  paymentIntent: Stripe.PaymentIntent,
  stripeAccountId?: string
) {
  if (!stripeAccountId) {
    console.log('No stripe account ID found in event, skipping payout.');
    return;
  }

  // Calculate amount to payout (Amount - Fee)
  // For Direct Charges, the amount on the connected account is (Amount - Application Fee).
  // But Stripe fees are also deducted.
  // We should try to payout the *available* balance or the received amount minus fees.
  // A safe retry strategy is often needed here because funds might be "pending" for a few seconds.

  // Simplified Logic: Attempt to pay out the net amount of this transaction
  // Note: In production, checking actual balance 'stripe.balance.retrieve()' is safer.

  try {
    // We can't easily calculate exact Stripe fees here without looking at balance transaction.
    // So we fetch the balance first.
    
    // Waiting a brief moment or relying on available balance
    const balance = await stripe.balance.retrieve({
      stripeAccount: stripeAccountId
    });

    const available = balance.available.find(b => b.currency === 'usd');
    if (!available || available.amount <= 0) {
      console.log('No available balance to payout yet.');
      return; 
    }

    const payout = await stripe.payouts.create(
      {
        amount: available.amount,
        currency: 'usd',
        method: 'instant', // Critical for Instant Payouts
      },
      {
        stripeAccount: stripeAccountId,
      }
    );

    console.log(`Instant Payout Success for ${stripeAccountId}: ${payout.id}`);
  } catch (error) {
    console.error('Instant Payout Failed:', error);
    // In a real app, you'd queue a retry job here.
  }
}
