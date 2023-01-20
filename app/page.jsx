/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import brunchHeaderLeft from 'public/images/plateau_dolce_situation1.jpg'
import brunchHeaderRight from 'public/images/plateau_veggie_sunshine_2.jpg';
import brunchVeggie from 'public/images/plateau_veggie_situation2.jpg';

import { Inter } from '@next/font/google';
import styles from './page.module.scss';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.section__homepage__header}>
        <Image src={brunchHeaderLeft} width={500} alt='photo plateau dolce vita'/>
        <Image src={brunchHeaderRight} width={500} alt='photo plateau veggie et plateau sunshine'/>
      </div>
      <section className={styles.section__homepage__header__presentation}>
        <div className={styles.section__homepage__header__presentation__text}>
          <p>L'histoire de WAKE UP c'est avant tout le plaisir de faire de bons et beaux petits déjeuners fait-maison ! Nous privilégions des produits frais, locaux et surtout nous prônons le fait-maison !</p>
          <p>Nous travaillons avec des artisans locaux et nous utilisons des produits frais et de qualité.</p>
        </div>
        <div className={styles.section__homepage__header__presentation__text}>
          <p>Qui n'a jamais rêvé de se faire livrer un bon petit déjeuner ou un brunch sans qu'il n'ait à sortir de chez lui et surtout sans bouger le petit doigt ? </p>
          <p>Découvrez notre sélection de plateaux gourmands et laissez-vous tenter ! </p>
        </div>
      </section>
      <section className={styles.section__homepage__main}>
        <article className={styles.section__homepage__main__article}>
          <div className={styles.section__homepage__main__article__left}>
          <h1 className={styles.section__homepage__main__article__title}>Title</h1>
          <p className={styles.section__homepage__main__article__description}></p>          
          <p className={styles.section__homepage__main__article__description}></p>
          <p className={styles.section__homepage__main__article__description}></p>
          <button className='button'>En savoir plus</button>
          </div>
          <Image src={brunchVeggie} width={400} alt='brunch'></Image>
        </article>
        <article className={styles.section__homepage__main__article}>
          <div className={styles.section__homepage__main__article__left}>
          <h1 className={styles.section__homepage__main__article__title}>Title</h1>
          <p className={styles.section__homepage__main__article__description}></p>          
          <p className={styles.section__homepage__main__article__description}></p>
          <p className={styles.section__homepage__main__article__description}></p>
          <button className='button'>En savoir plus</button>
          </div>
          <Image src={brunchVeggie} width={400} alt='brunch'></Image>
        </article>
        <article className={styles.section__homepage__main__article}>
          <div className={styles.section__homepage__main__article__left}>
          <h1 className={styles.section__homepage__main__article__title}>Title</h1>
          <p className={styles.section__homepage__main__article__description}></p>          
          <p className={styles.section__homepage__main__article__description}></p>
          <p className={styles.section__homepage__main__article__description}></p>
          <button className='button'>En savoir plus</button>
          </div>
          <Image src={brunchVeggie} width={400} alt='brunch'></Image>
        </article>
        <article className={styles.section__homepage__main__article}>
          <div className={styles.section__homepage__main__article__left}>
          <h1 className={styles.section__homepage__main__article__title}>Title</h1>
          <p className={styles.section__homepage__main__article__description}></p>          
          <p className={styles.section__homepage__main__article__description}></p>
          <p className={styles.section__homepage__main__article__description}></p>
          <button className='button'>En savoir plus</button>
          </div>
          <Image src={brunchVeggie} width={400} alt='brunch'></Image>
        </article>
      </section>
    </main>
  )
}
