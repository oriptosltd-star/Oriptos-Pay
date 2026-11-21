'use client';

import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/checkout-form';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState('');
  const [amount] = useState(49.99); // Specific product price
  const [merchantId] = useState('11111111-1111-1111-1111-111111111111'); 

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: Math.round(amount * 100), merchantId }), 
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to create payment intent');
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.error(err));
  }, [amount, merchantId]);

  const appearance = {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#0f172a',
    },
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Left Side: Order Summary */}
        <div className="bg-slate-900 p-8 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-slate-800 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="relative z-10">
                <Link href="/dashboard" className="inline-flex items-center text-slate-400 hover:text-white transition mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Store
                </Link>
                
                <div className="mt-8">
                    <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Pay to</h3>
                    <h1 className="text-3xl font-bold">Premium Merchant Store</h1>
                </div>

                <div className="mt-12 space-y-4">
                     <div className="flex justify-between items-center py-4 border-b border-slate-700">
                        <div className="flex items-center">
                             <div className="w-12 h-12 bg-slate-800 rounded-md mr-4 flex items-center justify-center text-xl">📦</div>
                             <div>
                                 <div className="font-medium text-lg">Pro Annual Plan</div>
                                 <div className="text-slate-400 text-sm">Billed yearly</div>
                             </div>
                        </div>
                        <div className="text-xl font-bold">${amount}</div>
                     </div>
                     <div className="flex justify-between items-center text-lg font-bold pt-2">
                        <div>Total due</div>
                        <div>${amount}</div>
                     </div>
                </div>
            </div>

            <div className="relative z-10 mt-12 flex items-center text-slate-400 text-sm">
                <ShieldCheck className="w-4 h-4 mr-2 text-green-400" />
                <span>Powered by Upfinit Pay. Secure 2D encryption.</span>
            </div>
        </div>

        {/* Right Side: Payment Form */}
        <div className="p-8 md:p-12">
            <div className="mb-8">
                <h2 className="text-2xl font-bold flex items-center">
                    Pay with Card
                    <Lock className="w-4 h-4 ml-2 text-muted-foreground" />
                </h2>
                <p className="text-muted-foreground">Enter your payment details below.</p>
            </div>

            {clientSecret ? (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm amount={amount} />
              </Elements>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900"></div>
                <p className="text-sm text-muted-foreground">Initializing secure gateway...</p>
              </div>
            )}
            
            <div className="mt-8 text-center text-xs text-muted-foreground">
                <p>We do not store your card details. Payments are processed securely by Stripe.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
