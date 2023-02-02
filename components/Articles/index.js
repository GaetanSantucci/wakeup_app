// import styles from 'app/page.module.scss';
import styles from '/public/styles/Article.module.scss';

import Image from 'next/image';

import { getArticlesData } from '/libs/getArticleList';
import Link from 'next/link';

const Articles = async () => {

  const articlesList = await getArticlesData();

  return (
    <section className={styles.articles__container}>
      {
        articlesList.map((elem, i) => {

          const paragraph = elem.description.split('\\n')

          return (
            <div key={elem.title} className={i % 2 ? `${styles.articles__container__item} ${styles.articles__container__item__left}` : `${styles.articles__container__item}`}>
              <div className={styles.articles__container__item__description}>
                <h2 className={styles.articles__container__item__description__title}>{elem.title}</h2>
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
                <Image src={elem.image} fill sizes='640' alt={`photo ${elem.title}`}></Image>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}

export default Articles;