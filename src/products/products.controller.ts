import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product, Category } from '../types';

@Controller('products')
export class ProductsController {
    constructor(private readonly ProductsService: ProductsService) {}

    @Get('/')
    async getAllProducts(): Promise<Product[]> {
        return this.ProductsService.getProducts();
    }

    @Get('/categories')
    async getCategories(): Promise<Category[]> {
        return this.ProductsService.getCategories();
    }

    @Get('/:category')
    async getProductByCategory(@Param('category') category: string): Promise<Product[]> {
        return this.ProductsService.getProductsByCategory(category);
    }
}