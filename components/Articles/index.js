import styles from 'app/page.module.scss';

import Image from 'next/image';

import { getArticlesData } from '@/lib/articles';

const Articles = async () => {

  const articlesList = await getArticlesData();
  return (
    <section className={styles.section__homepage__main}>
      {
        articlesList.map((elem, i) => {
          return (
            <article key={elem.id} className={i % 2 ? `${styles.section__homepage__main__article} ${styles.section__homepage__main__article__left}` : `${styles.section__homepage__main__article}`}>
              <div className={styles.section__homepage__main__article__description}  >
                <h2 className={styles.section__homepage__main__article__title}>{elem.title}</h2>
                <p className={styles.section__homepage__main__article__text}>{elem.description}</p>
                <button className={styles.button}>{elem.interaction}</button>
              </div>
              <Image src={elem.image} width={640} height={450} alt='photo {elem.title}'></Image>
            </article>
          )
        })
      }
    </section>
  )
}

export default Articles;