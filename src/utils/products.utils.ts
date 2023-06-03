export function calculateRandomPriceByCategory(category: string) {
    const priceRanges = {
      Lamb: { min: 45, max: 50 },
      Beef: { min: 40, max: 45 },
      Pork: { min: 35, max: 40 },
    };
  
    const defaultRange = { min: 10, max: 100 };
    const { min, max } = priceRanges[category] || defaultRange;
  
    const randomPrice = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomPrice;
  }