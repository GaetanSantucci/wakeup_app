// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  const url = 'https://github.com/GaetanSantucci/wakeup-project-nextjs'
  const posts = await fetch(`https://api.instagram.com/oauth/authorize?client_id=${client_id}&redirect_uri=${url}&scope=user_profile,user_media&response_type=code`)
    .then((response) => response.json())
    .then((data) => console.log(data));
  res.status(200).json({ name: 'John Doe' })

    `https://api.instagram.com/oauth/authorize?client_id=676316840950282&redirect_uri=https://github.com/GaetanSantucci/wakeup-project-nextjs&scope=user_profile,user_media&response_type=code`
}

