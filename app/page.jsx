/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

// Image importation for static part
import brunchHeaderLeft from 'public/images/plateau_dolce_situation1.jpg'
import brunchHeaderRight from 'public/images/plateau_veggie_sunshine_2.jpg';

import { Articles } from '../components';

import styles from './page.module.scss';

import { Montserrat } from '@next/font/google';

const roboto = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.section__homepage__header}>
        <Image src={brunchHeaderLeft} style={{height: "50%", width:"50%"}} alt='photo plateau dolce vita'/>
        <Image src={brunchHeaderRight} style={{height: "50%", width:"50%"}} alt='photo plateau veggie et plateau sunshine'/>
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
      <Articles />
      </section>
    </main>
  )
}

