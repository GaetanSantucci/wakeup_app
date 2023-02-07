import { InstaLink, Products, ScrollUp, Spinner } from '@/components';
import { Suspense } from 'react';

export default function plates() {
  return (
    <>
    <ScrollUp />
      <InstaLink />
      <Suspense fallback={<Spinner />}>
        <Products />
      </Suspense>
    </>
  )
}

