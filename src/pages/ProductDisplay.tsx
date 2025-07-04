import { Link, useParams } from 'react-router';
import { products } from '../assets/products';
import { AddToCartButton } from '../components/add-to-cart/AddToCartButton';

export function ProductDisplay() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className='max-w-6xl mx-auto px-4 py-8'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>Product not found</h1>
          <p className='text-gray-600 mb-6'>The product you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            to='/' 
            className='inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <div className='mb-6'>
        <Link 
          to='/' 
          className='inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors'
        >
          ← Back to Products
        </Link>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <div className='aspect-square'>
          <img 
            src={product.image} 
            alt={product.name}
            className='w-full h-full object-contain rounded-lg'
          />
        </div>

        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>{product.name}</h1>
          
          <div className='mb-6'>
            <span className='text-xl'>{product.price.amount.toFixed(2)} {product.price.currency}</span>
          </div>

          <div className='mb-8'>
            <p className='leading-relaxed'>
              {product.description}
            </p>
          </div>

          <div className='space-y-4'>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
