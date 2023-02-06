import { Product, ScrollUp } from '@/components';

export default async function Post({ params }) {
  return (
    <>
      <ScrollUp />
      <Product id={+params.id}/>
    </>
  );
}

