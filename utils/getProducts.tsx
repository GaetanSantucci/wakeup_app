import { cache } from 'react';

const getProductsData = cache(async () => {

  const res = await fetch('http://localhost:7777/api/v1/products');

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Récupération des données impossible');
  }
  return res.json();
})

const getProductById = async (productId: number) => {

  const res = await fetch(`http://localhost:7777/api/v1/products/${productId}`);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Récupération des données impossible');
  }
  return res.json();
}

export { getProductsData, getProductById }