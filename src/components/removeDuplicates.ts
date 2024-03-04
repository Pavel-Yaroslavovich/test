import { Product } from "./interfaceProduct";

export const removeDuplicates = (products: Product[]): Product[] => {
  const uniqueProducts: Product[] = [];
  const ids: string[] = [];

  for (const product of products) {
    if (!ids.includes(product.id)) {
      uniqueProducts.push(product);
      ids.push(product.id);
    }
  }

  return uniqueProducts;
};
