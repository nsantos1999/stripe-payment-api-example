import {
  Currencies,
  IPaymentProvider,
  IPaymentProviderCreateReturn,
} from "providers/IPaymentProvider";
import { Stripe } from "stripe";

export class StripeProvider implements IPaymentProvider {
  private static instance: StripeProvider;
  private stripe: Stripe;

  private constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2020-08-27",
    });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new StripeProvider();
    }

    return this.instance;
  }

  async createIntent(
    amount: number,
    currency: Currencies = "brl"
  ): Promise<IPaymentProviderCreateReturn> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount,
        currency,
      });

      if (!paymentIntent.client_secret)
        throw new Error("We has a error while create payment intent");

      return {
        clientSecret: paymentIntent.client_secret,
      };
    } catch (err) {
      console.error(err);

      throw err;
    }
  }
}
