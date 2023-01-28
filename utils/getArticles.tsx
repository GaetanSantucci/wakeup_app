const getArticlesData = async () => {
  const res = await fetch('http://localhost:7777/api/v1/blogs');

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Récupération des données impossible');
  }

  return res.json();
}

export { getArticlesData }