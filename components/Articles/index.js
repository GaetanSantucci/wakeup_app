import styles from 'app/page.module.scss';

import './articles.scss';

import Image from 'next/image';

const articlesList = [
  {
    title: 'DÉCOUVREZ NOS PLATEAUX',
    desc: 'Succombez à  nos plateaux gourmands, élégants et raffinés et passez un moment convivial et de partage avec vos proches. Nous sélectionnons des produits gourmands, et de qualité pour vous proposer le meilleur. Vous pouvez également accompagner vos plateaux brunch avec une bouteille de Prosecco Riccadonna.  Ce vin blanc pétillant aux fines bulles caractérisé par sa fraicheur et ses notes fruitées accompagnera parfaitement l\'un de nos brunch ou notre plateau apéritif. Vous avez la possibilité de rajouter des touches personnelles... une rose, un bouquet de fleurs, un mot personnalisé... N\'hésitez pas à nous le faire savoir et nous mettrons tout en œuvre pour rendre ce moment unique.',
    image: 'https://source.unsplash.com/random/900x700/?fruit',
    button_text: 'Découvrir'
  },
  {
    title: 'OFFREZ UN MOMENT DE PARTAGE UNIQUE',
    desc: 'Succombez à  nos plateaux gourmands, élégants et raffinés et passez un moment convivial et de partage avec vos proches. Nous sélectionnons des produits gourmands, et de qualité pour vous proposer le meilleur. Vous pouvez également accompagner vos plateaux brunch avec une bouteille de Prosecco Riccadonna.  Ce vin blanc pétillant aux fines bulles caractérisé par sa fraicheur et ses notes fruitées accompagnera parfaitement l\'un de nos brunch ou notre plateau apéritif. Vous avez la possibilité de rajouter des touches personnelles... une rose, un bouquet de fleurs, un mot personnalisé... N\'hésitez pas à nous le faire savoir et nous mettrons tout en œuvre pour rendre ce moment unique.',
    image: 'https://source.unsplash.com/random/900x700/?fruit',
    button_text: 'En savoir plus'
  },
  {
    title: 'POUR VOS ÉVÈNEMENTS',
    desc: 'Succombez à  nos plateaux gourmands, élégants et raffinés et passez un moment convivial et de partage avec vos proches. Nous sélectionnons des produits gourmands, et de qualité pour vous proposer le meilleur. Vous pouvez également accompagner vos plateaux brunch avec une bouteille de Prosecco Riccadonna.  Ce vin blanc pétillant aux fines bulles caractérisé par sa fraicheur et ses notes fruitées accompagnera parfaitement l\'un de nos brunch ou notre plateau apéritif. Vous avez la possibilité de rajouter des touches personnelles... une rose, un bouquet de fleurs, un mot personnalisé... N\'hésitez pas à nous le faire savoir et nous mettrons tout en œuvre pour rendre ce moment unique.',
    image: 'https://source.unsplash.com/random/900x700/?fruit',
    button_text: 'Contactez nous'
  },
  {
    title: 'POUR VOS ENTREPRISES',
    desc: 'Succombez à  nos plateaux gourmands, élégants et raffinés et passez un moment convivial et de partage avec vos proches. Nous sélectionnons des produits gourmands, et de qualité pour vous proposer le meilleur. Vous pouvez également accompagner vos plateaux brunch avec une bouteille de Prosecco Riccadonna.  Ce vin blanc pétillant aux fines bulles caractérisé par sa fraicheur et ses notes fruitées accompagnera parfaitement l\'un de nos brunch ou notre plateau apéritif. Vous avez la possibilité de rajouter des touches personnelles... une rose, un bouquet de fleurs, un mot personnalisé... N\'hésitez pas à nous le faire savoir et nous mettrons tout en œuvre pour rendre ce moment unique.',
    image: 'https://source.unsplash.com/random/900x700/?fruit',
    button_text: 'Contactez nous'
  }
]

const Articles = () => {
  return (
    <section className={styles.section__homepage__main}>
      {
        articlesList.map((elem) => {
          console.log('elem: ', elem.image);
          return (
            <article key={elem.title} className={styles.section__homepage__main__article}>
              <div className={styles.section__homepage__main__article__div} >
                <h1 className={styles.section__homepage__main__article__title} >{elem.title}</h1>
                <p className={styles.section__homepage__main__article__description}>{elem.desc}</p>
                <button className='button'>{elem.button_text}</button>
              </div>
              <Image src={elem.image} width={550} height={400} alt='/'></Image>
            </article>
          )

        })
      }
    </section>
  )
}

export default Articles;