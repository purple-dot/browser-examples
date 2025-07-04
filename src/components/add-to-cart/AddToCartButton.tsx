import type { Product } from '../../assets/products';
import { PreOrderButton } from './PreOrderButton';
import { OutOfStockButton } from './OutOfStockButton';
import { PreOrderExpressButton } from './PreOrderExpressButton';
import { useCallback, useEffect, useState } from 'react';
import { getStockForProduct } from '../../check-availability';
import { availability } from '@purple-dot/browser/availability';

export function AddToCartButton({ product }: { product: Product }) {
  const [loading, setLoading] = useState(true);
  const [outOfStock, setOutOfStock] = useState(false);
  const [preOrderReleaseId, setPreOrderReleaseId] = useState<string | null>(null);

  const availabilityCallback = useCallback(async (req: { variantId: string }) => {
    const { quantity } = await getStockForProduct(req.variantId);
    return quantity > 0;
  }, []);

  useEffect(() => {
    (async () => {
      const preorderState = await availability({ variantId: product.variantId }, availabilityCallback);

      if (preorderState.state === 'ON_PREORDER') {
        setPreOrderReleaseId(preorderState.waitlist.id);
      }

      setOutOfStock(preorderState.state === 'SOLD_OUT');

      setLoading(false);
    })();
  }, [product.variantId, availabilityCallback]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (product.state === 'Express' && preOrderReleaseId) {
    return <PreOrderExpressButton product={product} releaseId={preOrderReleaseId} />;
  }

  if (preOrderReleaseId) {
    return <PreOrderButton product={product} releaseId={preOrderReleaseId} />;
  }

  if (outOfStock) {
    return <OutOfStockButton />;
  }

  return (
    <button
      type='button'
      className='bg-purple-600 w-full text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors'
      onClick={() => {
        alert('Added to main cart');
      }}
    >
      Add to cart
    </button>
  );
}
