import Stripe from "stripe";
import { PaymentLink } from "./payment.interface";
import { STRIPE_API_VERSION, STRIPE_SECRET_KEY } from "./payment.constant";
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: STRIPE_API_VERSION,
});

const createPaymentLink = async (products: object[]): Promise<PaymentLink> => {
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.title,
        image: product.image[0],
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const sesssion = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "",
    cancel_url: "",
  });

  return { url: sesssion.id };

  //   const cards = await Cart.find({
  //     email: "mdekramulhassan168@gmail.com",
  //   }).populate("product");
  //   //   console.log(cards);

  //   try {
  //     const paymentLink = await stripe.paymentLinks.create({
  //       payment_method_types: ["card"],
  //       line_items: [],
  //     });
  //     console.log(paymentLink);
  //     return { url: paymentLink.url };
  //   } catch (error) {
  //     throw new Error(`Error creating payment link: ${(error as Error).message}`);
  //   }
};

export const createPaymentLinkService = {
  createPaymentLink,
};
