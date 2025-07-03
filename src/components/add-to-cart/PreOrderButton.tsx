import type { Product } from '../../assets/products';
import { useCallback, useState } from 'react';
import { purpleDotCheckout } from '@purple-dot/browser/checkout';
import { ErrorMessage } from '../ErrorMessage';
import { Brand } from '../Brand';

export function PreOrderButton({ product }: { product: Product }) {
  const [error, setError] = useState<string | null>(null);

  const onPreOrderClick = useCallback(() => {
    setError(null);

    purpleDotCheckout(async (element) => {
      const res = await element.addItem({
        variantId: product.variantId,
        releaseId: product.releaseId,
        currency: product.price.currency,
        quantity: 1,
      });

      if (res.success) {
        // optional: show the checkout after adding the item
        element.show();
      } else {
        setError(res.error.message);
      }
    });
  }, [product]);

  return (
    <>
      <button
        type='button'
        onClick={onPreOrderClick}
        className='bg-purple-600 w-full text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors'
      >
        Pre-order
      </button>

      <Brand />

      {error && <ErrorMessage error={error} />}
    </>
  );
}
