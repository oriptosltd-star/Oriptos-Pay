import { redirect } from 'next/navigation';

export async function POST() {
  const clientId = process.env.STRIPE_CONNECT_CLIENT_ID;
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/stripe/callback`;

  if (!clientId) {
    console.error("STRIPE_CONNECT_CLIENT_ID is missing");
    return new Response("Configuration Error", { status: 500 });
  }

  // Generate a random state for security (in a real app, store this in a cookie/session to verify)
  const state = Math.random().toString(36).substring(7);

  const url = `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${clientId}&scope=read_write&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;

  redirect(url);
}
