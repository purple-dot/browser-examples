import type { Product } from '../../assets/products';
import { PreOrderButton } from './PreOrderButton';
import { OutOfStockButton } from './OutOfStockButton';
import { PreOrderExpressButton } from './PreOrderExpressButton';

export function AddToCardButton({ product }: { product: Product }) {
  if (product.state === 'Pre-order') {
    return <PreOrderButton product={product} />;
  }

  if (product.state === 'Express') {
    return <PreOrderExpressButton product={product} />;
  }

  if (product.state === 'Out of Stock') {
    return <OutOfStockButton />;
  }

  return (
    <button type='button' className='bg-purple-600 w-full text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors'>
      Add to cart
    </button>
  );
}
