import { loadStripe } from '@stripe/stripe-js';

export async function getStripeJS() {
  const stripeJS = await loadStripe(
    process.env.NEXT_PUBLIC_STIPE_API_PUBLIC_KEY,
  );

  return stripeJS;
}
