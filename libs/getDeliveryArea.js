import { cache } from 'react';


export const getArea = cache(async () => {
  const res = await fetch('http://localhost:7777/api/v1/delivery');

  if (!res.ok) {
    throw new Error('Récupération des données impossible');
  }

  return res.json();
})