export interface Product {
  id: number;
  name: string;
  description: string;
  state: 'Pre-order' | 'In Stock' | 'Out of Stock' | 'Express';
  price: {
    amount: number;
    currency: string;
  };
  image: string;
  variantId: string;
  releaseId: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Purple Sport Socks',
    description: 'Purple sport socks!',
    state: 'Pre-order',
    price: {
      amount: 25,
      currency: 'USD',
    },
    image: 'https://purple-dot-demo-us.myshopify.com/cdn/shop/files/PurpleSocks.webp?v=1742300404',
    variantId: '50884155801947',
    releaseId: '8adf88ec-8211-4470-8fb3-cb8e4f4ac726',
  },
  {
    id: 2,
    name: 'Ocean Green Sweater',
    description: 'A warm, cozy sweater for the winter months.',
    state: 'In Stock',
    price: {
      amount: 20,
      currency: 'USD',
    },
    image: 'https://purple-dot-demo-us.myshopify.com/cdn/shop/files/Screenshot2025-02-05at3.36.46PM.png?v=1738787814',
    variantId: '50884155801947',
    releaseId: '8adf88ec-8211-4470-8fb3-cb8e4f4ac726',
  },
  {
    id: 3,
    name: 'Yellow Hoodie',
    description: 'A yellow hoodie for the summer months.',
    state: 'Out of Stock',
    price: {
      amount: 15.99,
      currency: 'USD',
    },
    image: 'https://purple-dot-demo-us.myshopify.com/cdn/shop/files/yellowhoodie.jpg?v=1734006834',
    variantId: '50884155801947',
    releaseId: '8adf88ec-8211-4470-8fb3-cb8e4f4ac726',
  },
  {
    id: 4,
    name: 'Black Tee',
    description: 'A simple black tee.',
    state: 'Express',
    price: {
      amount: 20,
      currency: 'USD',
    },
    image: 'https://purple-dot-demo-us.myshopify.com/cdn/shop/files/Black_Tee_Front_1024x1024_2x_e2e7e3df-32f3-41c7-a092-549141cd038c.webp?v=1700669997',
    variantId: '50884155801947',
    releaseId: '8adf88ec-8211-4470-8fb3-cb8e4f4ac726',
  }
];
