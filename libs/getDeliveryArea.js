export const getArea = async () => {
  const res = await fetch('http://localhost:7777/api/v1/delivery');

  if (!res.ok) {
    throw new Error('Récupération des données liées aux zones de livraison impossible');
  }

  return res.json();
}