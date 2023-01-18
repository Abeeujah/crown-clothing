// Import Load Stripe to instantiate our Stripe instance..
import { loadStripe } from "@stripe/stripe-js";

// Create Stripe Promise..
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);