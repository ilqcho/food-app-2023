import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { StripeModule } from './payment/stripe.module';

@Module({
  imports: [ProductsModule, StripeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
