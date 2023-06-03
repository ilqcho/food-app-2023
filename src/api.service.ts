import { CategoriesResponse, ProductsByCategoryResponse } from './types';

export async function fetchProductsCategories(): Promise<CategoriesResponse> {
    try {
        const apiURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        const apiResponse = await fetch(apiURL);
        const categories = await apiResponse.json();
  
      return categories;
    } catch (e) {
        throw new Error('Error while fetching categories');
    }
}
  
export async function fetchProductsByCategory(category: string): Promise<ProductsByCategoryResponse> {
    try {
        const apiURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        const apiResponse = await fetch(apiURL);
        const products = await apiResponse.json();
  
        return products;
    } catch (e) {
        throw new Error('Error while fetching products by category');
    }
}