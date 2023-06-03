import { Module, OnModuleInit } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
})

export class ProductsModule implements OnModuleInit {
    constructor(private readonly productsService: ProductsService) {}
  
    async onModuleInit() {
      await this.productsService.fetchAndModifyProducts();
    }
}