
export function OutOfStockButton() {
  return (
    <button
      disabled
      type='button'
      className='bg-black w-full text-white py-3 px-6 rounded-lg font-semibold cursor-not-allowed'
    >
      Out of stock
    </button>
  );
}
