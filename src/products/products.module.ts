import { Module, OnModuleInit } from '@nestjs/common';
import { ProductsService } from './products.service';

@Module({
    providers: [ProductsService],
})

export class ProductsModule implements OnModuleInit {
    constructor(private readonly productsService: ProductsService) {}
  
    async onModuleInit() {
      await this.productsService.fetchAndModifyProducts();
    }
}