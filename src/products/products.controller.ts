import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product, Category } from '../types';

@Controller('products')
export class ProductsController {
    constructor(private readonly ProductsService: ProductsService) {}

    @Get('/')
    async getAllProducts(
        @Query('page', ParseIntPipe) page: number = 1,
        @Query('pageSize', ParseIntPipe) pageSize: number = 4
    ): Promise<Product[]> {
        const skip = page;
        return this.ProductsService.getProducts(skip, pageSize);
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