export interface Product {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
    price: number;
    idCategory: string;
    strCategory: string;
}

export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}
  
export interface CategoriesResponse {
    categories: Category[];
}
  
export interface Meal {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}
  
export interface ProductsByCategoryResponse {
    meals: Meal[];
}