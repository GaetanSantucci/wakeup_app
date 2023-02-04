'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

import styles from '/public/styles/Article.module.scss';

import { use } from 'react';

//Component
import Article from './Article';

//Get data
import { getArticlesData } from '/libs/getArticleList';

const articlesFetch = getArticlesData()

const Articles = () => {
  const articlesList = use(articlesFetch)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // const element = document.querySelector('.articles__container__image')
    gsap.to('.articles__container__image', {
      scrollTrigger: {
        trigger: '.articles__container',
        scrub: true,
      },
      duration: 1000,
      autoAlpha: 0,
      y: 300,
    });
  });

  return (
    <section className={styles.articles__container}>
      {
        articlesList.map((elem, i) => {
          const paragraph = elem.description.split('\\n')
          return <Article key={elem.title} elem={elem} paragraph={paragraph} index={i} />
        })
      }
    </section>
  )
}

export default Articles;