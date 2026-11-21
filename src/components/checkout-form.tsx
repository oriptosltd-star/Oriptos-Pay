'use client';

import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function CheckoutForm({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage(null);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Return URL where the customer should be redirected after the payment
        // We can just use the current page for now URL
        return_url: window.location.href, // Or a specific success page
      },
      redirect: 'if_required', // Use 2D flow if possible, redirect only if 3DS is forced (which we tried to disable)
    });

    if (error) {
      setErrorMessage(error.message ?? 'Payment failed');
      setIsProcessing(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setIsSuccess(true);
      setIsProcessing(false);
    } else {
      // It might be 'requires_action' if 3DS was somehow triggered, or processing
      setIsProcessing(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-6 text-center space-y-4 bg-green-50 rounded-lg">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
        <h2 className="text-xl font-semibold text-green-700">Payment Successful!</h2>
        <p className="text-green-600">
          Paid ${amount.toFixed(2)} instantly via 2D Secure.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      
      {errorMessage && (
        <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 rounded-md">
          <AlertCircle className="h-4 w-4" />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button 
        type="submit" 
        disabled={!stripe || isProcessing} 
        className="w-full h-12 text-lg"
      >
        {isProcessing ? 'Processing...' : `Pay $${amount.toFixed(2)} Now`}
      </Button>
      
      <p className="text-xs text-center text-muted-foreground">
        Secure 2D Payment • Instant Payout to Merchant
      </p>
    </form>
  );
}
