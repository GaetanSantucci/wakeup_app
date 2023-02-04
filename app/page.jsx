'use client';
import Image from 'next/image';

// Image importation for static part
import brunchHeaderLeft from 'public/images/plateau_dolce_situation1.jpg'
import brunchHeaderRight from 'public/images/plateau_veggie_sunshine_2.jpg';

// Components
import { Articles, InstaLink, Reviews, ScrollToTop, Spinner } from '../components';

//Styles
import styles from './page.module.scss';
import { Montserrat } from '@next/font/google';

import { Suspense } from 'react';

// const roboto = Montserrat({ subsets: ['latin'] })

// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// import { useEffect } from 'react';



export default function Home() {
  

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   // console.log('page intialized');
  //   const element = document.querySelector('.articles__container__image')
  //   console.log('element: ', element);
  //   gsap.to('.articles__container__image', {
  //     scrollTrigger: {
  //       trigger: '.articles__container',
  //       scrub: true,
  //     },
  //     duration: 1000,
  //     autoAlpha: 0,
  //     y: 300,
  //   });
  // }, []);

  return (
    <>
      <ScrollToTop />
      <InstaLink />
      <div className={styles.homepage__header__container}>
        <Image id='left' src={brunchHeaderLeft} style={{height: "50%", width:"50%"}} alt='photo plateau dolce vita'/>
        <Image id='right' src={brunchHeaderRight} style={{height: "50%", width:"50%"}} alt='photo plateau veggie et plateau sunshine'/>
      </div>
      <section className={styles.homepage__header__container__presentation}>
          <p>L'histoire de WAKE UP c'est avant tout le plaisir de faire de bons et beaux petits déjeuners fait-maison ! Nous privilégions des produits frais, locaux et surtout nous prônons le fait-maison !</p>
          <p>Nous travaillons avec des artisans locaux et nous utilisons des produits frais et de qualité.</p>
          <p>Qui n'a jamais rêvé de se faire livrer un bon petit déjeuner ou un brunch sans qu'il n'ait à sortir de chez lui et surtout sans bouger le petit doigt ? </p>
          <p>Découvrez notre sélection de plateaux gourmands et laissez-vous tenter ! </p>
      </section>
      <Suspense fallback={<Spinner />}>
        <Articles />
      </Suspense>
      <Reviews />
    </>
  )
}

