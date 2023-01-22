// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const insta = await fetch(`https://www.instagram.com/gtn_83/?__a=1`)
    console.log('insta: ', insta);
    return res.status(200).json(insta)

  } catch (error) {
    console.log(error.message);
  }
}
