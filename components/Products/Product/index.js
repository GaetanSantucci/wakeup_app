import styles from '@/app/page.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import backgroundImage from '/public/images/fond_marbre_noir.jpg'

import { getProductById } from '@/utils/getProducts';

export default async function Product({ id }) {

  let product = []
  product.push(await getProductById(id));


  return (
    <div className={styles.main__product__container}>
      {
        product.map(elem => {
          const price = elem.price.toString().replace('.', ',');
          const text = elem.description.split('\n')

          return (
            <div className={styles.main__product__container__card} key={elem.name}>
              <div className={styles.main__product__container__image}>
                <Image src={elem.image} alt={elem.name} width={400} height={600} />
              </div>
              <div className={styles.main__product__container__card__details}>
                <h2 className={styles.main__product__container__card__details__title}>{elem.name}</h2>
                <p className={styles.main__product__container__card__details__subtitle}>{elem.subtitle}</p>
                <ul className={styles.main__product__container__card__details__list}>
                  {
                    text.map(p => <li key={p}>- {p.replace('\\n', '')}</li>)
                  }
                </ul>
                <div className={styles.main__product__container__card__details__order}>
                  <span className={styles.main__product__container__card__details__order__price} >{price} €</span>
                  <Link href='https://wakeupclf.simplybook.it/v2/#book' target='blank'><button className={styles.button}>Réserver</button></Link>
                </div>
              </div>
            </div>
          )
          // }
        })

      }
    </div>
  );
}