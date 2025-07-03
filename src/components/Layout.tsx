import { Outlet, Link } from 'react-router';

export function Layout() {
  return (
    <>
      <nav className='bg-white border-b border-gray-200'>
        <div className='justify-between py-4 px-8 md:px-16 lg:px-24 flex items-center'>
          <Link 
            to='/' 
            className='text-gray-700 hover:text-purple-600 rounded-md text-sm font-medium transition-colors'
          >
            Home
          </Link>

          {/* @ts-expect-error - this is a custom element */}
          <purple-dot-separate-bag />
        </div>
      </nav>

      <main className='p-8 md:p-16 lg:p-24'>
        <Outlet />
      </main>
    </>
  );
}
