import styles from 'app/page.module.scss';

import './articles.scss';

import Image from 'next/image';

const articlesList = [
  {
    title: 'DÉCOUVREZ NOS PLATEAUX',
    desc: 'Succombez à  nos plateaux gourmands, élégants et raffinés et passez un moment convivial et de partage avec vos proches. Nous sélectionnons des produits gourmands, et de qualité pour vous proposer le meilleur. Vous pouvez également accompagner vos plateaux brunch avec une bouteille de Prosecco Riccadonna.  Ce vin blanc pétillant aux fines bulles caractérisé par sa fraicheur et ses notes fruitées accompagnera parfaitement l\'un de nos brunch ou notre plateau apéritif. Vous avez la possibilité de rajouter des touches personnelles... une rose, un bouquet de fleurs, un mot personnalisé... N\'hésitez pas à nous le faire savoir et nous mettrons tout en œuvre pour rendre ce moment unique.',
    image: 'http://localhost:3000/images/plateau_veggie_aperitif.jpg',
    button_text: 'Découvrir'
  },
  {
    title: 'OFFREZ UN MOMENT DE PARTAGE UNIQUE',
    desc: 'Succombez à  nos plateaux gourmands, élégants et raffinés et passez un moment convivial et de partage avec vos proches. Nous sélectionnons des produits gourmands, et de qualité pour vous proposer le meilleur. Vous pouvez également accompagner vos plateaux brunch avec une bouteille de Prosecco Riccadonna.  Ce vin blanc pétillant aux fines bulles caractérisé par sa fraicheur et ses notes fruitées accompagnera parfaitement l\'un de nos brunch ou notre plateau apéritif. Vous avez la possibilité de rajouter des touches personnelles... une rose, un bouquet de fleurs, un mot personnalisé... N\'hésitez pas à nous le faire savoir et nous mettrons tout en œuvre pour rendre ce moment unique.',
    image: 'http://localhost:3000/images/plateau_veggie_aperitif.jpg',
    button_text: 'En savoir plus'
  },
  {
    title: 'POUR VOS ÉVÈNEMENTS',
    desc: 'Succombez à  nos plateaux gourmands, élégants et raffinés et passez un moment convivial et de partage avec vos proches. Nous sélectionnons des produits gourmands, et de qualité pour vous proposer le meilleur. Vous pouvez également accompagner vos plateaux brunch avec une bouteille de Prosecco Riccadonna.  Ce vin blanc pétillant aux fines bulles caractérisé par sa fraicheur et ses notes fruitées accompagnera parfaitement l\'un de nos brunch ou notre plateau apéritif. Vous avez la possibilité de rajouter des touches personnelles... une rose, un bouquet de fleurs, un mot personnalisé... N\'hésitez pas à nous le faire savoir et nous mettrons tout en œuvre pour rendre ce moment unique.',
    image: 'http://localhost:3000/images/plateau_veggie_aperitif.jpg',
    button_text: 'Contactez nous'
  },
  {
    title: 'POUR VOS ENTREPRISES',
    desc: 'Succombez à  nos plateaux gourmands, élégants et raffinés et passez un moment convivial et de partage avec vos proches. Nous sélectionnons des produits gourmands, et de qualité pour vous proposer le meilleur. Vous pouvez également accompagner vos plateaux brunch avec une bouteille de Prosecco Riccadonna.  Ce vin blanc pétillant aux fines bulles caractérisé par sa fraicheur et ses notes fruitées accompagnera parfaitement l\'un de nos brunch ou notre plateau apéritif. Vous avez la possibilité de rajouter des touches personnelles... une rose, un bouquet de fleurs, un mot personnalisé... N\'hésitez pas à nous le faire savoir et nous mettrons tout en œuvre pour rendre ce moment unique.',
    image: 'http://localhost:3000/images/plateau_veggie_aperitif.jpg',
    button_text: 'Contactez nous'
  }
]

const Articles = () => {
  return (
    <section className={styles.section__homepage__main}>
      {
        articlesList.map((elem, i) => {
          return (
            <article key={elem.title} className={i % 2 ? `${styles.section__homepage__main__article} ${styles.section__homepage__main__article__left}` : `${styles.section__homepage__main__article}`}>
              <div className={styles.section__homepage__main__article__description}  >
                <h1 className={styles.section__homepage__main__article__title}>{elem.title}</h1>
                <p className={styles.section__homepage__main__article__text}>{elem.desc}</p>
                <button className='button'>{elem.button_text}</button>
              </div>
              <Image src={elem.image} width={480} height={640} alt='/'></Image>
            </article>
          )

        })
      }
    </section>
  )
}

export default Articles;