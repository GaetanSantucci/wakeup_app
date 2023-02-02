const getDeliveryArea = async () => {
  const res = await fetch('http://localhost:7777/api/v1/delivery');

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Récupération des données impossible');
  }
  console.log('Zone de livraison récupérée');
  return res.json();
}

export { getDeliveryArea }