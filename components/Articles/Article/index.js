'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Image from 'next/image';
import Link from 'next/link';

import styles from '/public/styles/Article.module.scss';

import { useEffect, useRef } from 'react';
import { useMedia } from 'react-use';

const Article = ({ elem, paragraph, index }) => {

  const imageRef = useRef(null);

  const isSmallScreen = useMedia('(max-width: 600px)');
  console.log('isSmallScreen: ', isSmallScreen);

  useEffect(() => {

    if (!isSmallScreen) {
      const imgDiv = imageRef.current
      gsap.registerPlugin(ScrollTrigger);
      if (index % 2) {
        gsap.to(imgDiv, {
          scrollTrigger: {
            trigger: imgDiv,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
          // duration: 2000,
          // autoAlpha: 1,
          x: 0,
        });
      } else {
        gsap.to(imgDiv, {
          scrollTrigger: {
            trigger: imgDiv,
            start: 'top bottom',
            end: 'top top',
            scrub: true,
          },
          // duration: 2000,
          // autoAlpha: 1,
          x: 0,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])





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
        <div /* ref={imageRef}  */ className={styles.articles__container__image}>
          <Image ref={imageRef} src={elem.image} width={640} height={453} alt={`photo ${elem.title}`}></Image>
        </div>
      </div>
    </>
  )
}

export default Article;