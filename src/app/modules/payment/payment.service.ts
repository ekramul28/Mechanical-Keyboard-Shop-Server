import Stripe from "stripe";
import { STRIPE_API_VERSION, STRIPE_SECRET_KEY } from "./payment.constant";
import { Cart } from "../cart/cart.model";
import { TProduct } from "../product/product.interface";
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: STRIPE_API_VERSION,
});

const createPaymentLink = async (email: string, total: number) => {
  const products = await Cart.find({ email })
    .populate<{ product: TProduct }>("product")
    .exec();

  const lineItems = products.map((cartItem) => {
    const product = cartItem.product;
    const title = product.title;
    const price = Math.round(product.price);
    const image = product.image[0];

    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: title,
          images: [image],
        },
        unit_amount: price * 100,
      },
      quantity: cartItem?.productQuantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://mechanical-keyboard-shop-ten.vercel.app/success",
    cancel_url: "https://mechanical-keyboard-shop-ten.vercel.app/error",
  });

  return session;
};

export const createPaymentLinkService = {
  createPaymentLink,
};
