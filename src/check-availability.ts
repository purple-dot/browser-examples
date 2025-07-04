import { products } from './assets/products';

export async function getStockForProduct(variantId: string): Promise<{ quantity: number }> {
  return new Promise((resolve) => {
    const product = products.find((p) => p.variantId === variantId);

    setTimeout(() => {
      if (product?.state === 'Out of Stock') {
        resolve({ quantity: 0 });
      }

      resolve({ quantity: Math.floor(Math.random() * 100) });
    }, 500);
  });
}
