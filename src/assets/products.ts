export type ProductState = 'Pre-order' | 'In Stock' | 'Out of Stock' | 'Express';

export type Product = {
  id: number;
  name: string;
  description: string;
  state: ProductState;
  price: {
    amount: number;
    currency: string;
  };
  image: string;
  variantId: string;
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
    variantId: '50954064593201',
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
    variantId: '50685963731249',
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
    variantId: '50446290551089',
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
    variantId: '47818256744753',
  }
];
