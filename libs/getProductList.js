import { cache } from 'react';

export const getProductsData = cache(async () => {

  const res = await fetch('http://localhost:7777/api/v1/products');

  if (!res.ok) {
    throw new Error('Récupération des données impossible');
  }
  return res.json();
})

export const getProductById = async (productId) => {

  const res = await fetch(`http://localhost:7777/api/v1/products/${productId}`);

  if (!res.ok) {
    throw new Error('Récupération des données impossible');
  }
  return res.json();
}

// export { getProductsData, getProductById }