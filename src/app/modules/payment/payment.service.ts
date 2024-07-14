import Stripe from "stripe";
import { PaymentLink } from "./payment.interface";
import { STRIPE_API_VERSION, STRIPE_SECRET_KEY } from "./payment.constant";
import { Cart } from "../cart/cart.model";
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: STRIPE_API_VERSION,
});

const createPaymentLink = async (email: string) => {
  const products = await Cart.find({ email }).populate("product");

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product?.product?.title,
      },
      unit_amount: Math.floor(product.product?.price * 100),
    },
    quantity: product?.productQuantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/",
    cancel_url: "http://localhost:5173/",
  });
  console.log({ session });

  return session;
};

export const createPaymentLinkService = {
  createPaymentLink,
};
