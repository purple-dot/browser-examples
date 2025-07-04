import type { Product } from '../../assets/products';
import { useCallback, useState } from 'react';
import { openExpressCheckout } from '@purple-dot/browser/checkout';
import { ErrorMessage } from '../ErrorMessage';
import { Brand } from '../Brand';

export function PreOrderExpressButton({ product, releaseId }: { product: Product; releaseId: string }) {
  const [error, setError] = useState<string | null>(null);

  const onPreOrderExpressClick = useCallback(() => {
    setError(null);

    // open the express checkout immediately
    openExpressCheckout({
      variantId: product.variantId,
      releaseId,
      currency: product.price.currency,
      quantity: 1,
    });
  }, [product, releaseId]);

  return (
    <>
      <button
        type='button'
        onClick={onPreOrderExpressClick}
        className='bg-purple-600 w-full text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors'
      >
        Pre-order (Express)
      </button>

      <Brand />

      {error && <ErrorMessage error={error} />}
    </>
  );
}
