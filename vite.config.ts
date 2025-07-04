import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/browser-examples/',
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: [
      '@purple-dot/browser',
      '@purple-dot/browser/api',
      '@purple-dot/browser/availability',
      '@purple-dot/browser/checkout',
      '@purple-dot/browser/cart',
      '@purple-dot/browser/shopify-ajax-cart',
      '@purple-dot/browser/shopify-ajax-interceptors',
      '@purple-dot/browser/shopify-storefront-cart',
    ]
  }
});
