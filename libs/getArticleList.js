export const getArticlesData = async () => {
  try {
    const res = await fetch('http://localhost:7777/api/v1/blogs');
    return res.json();

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}