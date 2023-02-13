import { Product, ScrollUp, Spinner } from '@/components';
import { Suspense } from 'react';

export default async function Post({ params }) {
  return (
    <>
      <ScrollUp />
      <Suspense fallback={<Spinner />}/>
      <Product id={+params.id || 1}/>
      <Suspense />
    </>
  );
}

