export const getReviewData = async () => {

  const res = await fetch('http://localhost:7777/api/v1/reviews');
  if (!res.ok) {
    throw new Error('Récupération des données liées aux commentaires impossible');
  }
  return res.json();
}