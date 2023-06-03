import { Injectable } from '@nestjs/common';
import { fetchProductsCategories, fetchProductsByCategory } from '../api.service';
import { calculateRandomPriceByCategory } from '../utils/products.utils';
import { Product } from '../types';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  async fetchAndModifyProducts() {
    const productsCategories = await fetchProductsCategories();
    const modifiedProductsArray = await Promise.all(
      productsCategories.categories.map(async (category) => {
        const productsByCategory = await fetchProductsByCategory(category.strCategory);
        const modifiedProducts = productsByCategory.meals.map((meal) => ({
          ...meal,
          price: calculateRandomPriceByCategory(category.strCategory),
          idCategory: category.idCategory,
          strCategory: category.strCategory,
        }));
        return modifiedProducts;
      })
    );
  
    const flattenedProducts = modifiedProductsArray.flat();
    this.products = flattenedProducts;
  }
}