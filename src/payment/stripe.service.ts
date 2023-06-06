import { Injectable } from '@nestjs/common';

const stripe = require("stripe")("sk_test_51NFmMkCB1q6cGgp5AmKrNOyqhfHBW40SFcv92zMEklXLBujE1pH5CcXli4mabzPxSvuQ7ylpN0y9l5m8Ai9CaGVG00cYQSD6BU");

@Injectable()
export class StripeService {
  calculateOrderAmount(items: any[]): number {
    return 1400;
  }

  async createPaymentIntent(items: any[]): Promise<{ clientSecret: string }> {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: 'usd',
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  }
}