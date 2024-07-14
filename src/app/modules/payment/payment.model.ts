import Stripe from "stripe";
import { PaymentLink } from "./payment.interface";
import { STRIPE_API_VERSION, STRIPE_SECRET_KEY } from "./payment.constant";

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: STRIPE_API_VERSION,
});

// const data=

export class StripeModel {
  async createPaymentLink(
    priceId: string,
    quantity: number
  ): Promise<PaymentLink> {
    try {
      const paymentLink = await stripe.paymentLinks.create({
        line_items: [
          {
            price: priceId,
            quantity: quantity,
          },
        ],
      });
      console.log(paymentLink);
      return { url: paymentLink.url };
    } catch (error) {
      throw new Error(
        `Error creating payment link: ${(error as Error).message}`
      );
    }
  }
}
