export function ErrorMessage({ error }: { error: string }) {
  return (
    <div className='text-red-500'>
      {error}
    </div>
  );
}
