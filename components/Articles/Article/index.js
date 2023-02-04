// 'use client';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// import { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from '/public/styles/Article.module.scss';


const Article = ({ elem, paragraph, index }) => {

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const element = document.querySelector('.articles__container__image')
  //   gsap.to(element, {
  //     scrollTrigger: {
  //       trigger: '.articles__container',
  //       scrub: true,
  //     },
  //     duration: 1000,
  //     autoAlpha: 0,
  //     y: 300,
  //   });
  // });



  return (
    <>
      <div className={index % 2 ? `${styles.articles__container__item__left}` : `${styles.articles__container__item}`}>
        <div className={styles.articles__container__item__description}>
          <h3>{elem.title}</h3>
          <div className={styles.articles__container__item__description__text}>
            {
              paragraph.map(para => <p key={para}>{para}</p>)
            }
          </div>
          <Link href={`/${elem.slug}`} >
            <button className={styles.button}>{elem.interaction}</button>
          </Link>
        </div>
        <div className={styles.articles__container__image}>
          <Image src={elem.image} width={640} height={453} alt={`photo ${elem.title}`}></Image>
        </div>
      </div>
    </>
  )
}

export default Article;