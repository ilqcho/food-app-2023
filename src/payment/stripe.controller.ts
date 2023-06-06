import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('payment')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('/create-payment-intent')
  async createPaymentIntent(@Body() req: { items: any[] }): Promise<{ clientSecret: string }> {
    const { items } = req;
    return await this.stripeService.createPaymentIntent(items);
  }
}