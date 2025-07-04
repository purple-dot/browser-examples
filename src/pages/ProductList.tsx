import { Link } from 'react-router';
import { products } from '../assets/products';

export function ProductList() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-8'>Products</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {products.map((product) => (
          <div key={product.id} className='bg-white rounded-lg border border-gray-200 overflow-hidden'>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} className='w-full h-80 object-cover object-top' />
              <div className='p-4 space-y-2'>
                <h2 className='text-lg font-semibold'>{product.name}</h2>
                <p>{product.price.amount.toFixed(2)} {product.price.currency}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
