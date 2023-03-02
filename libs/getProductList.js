
export const getProductsData = async () => {

  const res = await fetch('http://localhost:7777/api/v1/plates');

  if (!res.ok) {
    throw new Error('Récupération des données impossible');
  }
  return res.json();
}

export const getProductById = async (plateId) => {

  const res = await fetch(`http://localhost:7777/api/v1/plates/${plateId}`);

  if (!res.ok) {
    throw new Error('Récupération des données impossible');
  }
  return res.json();
}