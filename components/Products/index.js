import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/page.module.scss';

import { getProductsData } from '@/lib/products';

export default async function Products() {

  const products = await getProductsData();

  return (
    <section className={styles.main__container__product}>
      {
        products.map(product => {
          console.log('product: ', product.slug);
          const price = product.price.toString().replace('.', ',');
          return (
            <div className={styles.main__container__product__card} key={product.name}>
              <div className={styles.main__container__product__card__image}>
                <Image src={product.image} alt={product.name} width={280} height={420} />
              </div>
              <div className={styles.main__container__product__card__desc}>
                <div className={styles.main__container__product__card__title}>
                  <h2>{product.name}</h2>
                  <p>{price} €</p>
                </div>
                <div className={styles.main__container__product__card__information}>
                  <Link href={`/plate/${product.slug}/${product.id}`} >En savoir plus</Link>
                  <Link href='https://wakeupclf.simplybook.it/v2/#book' target='blank'><button className={styles.button}>Réserver</button></Link>
                </div>
              </div>
            </div>
          )
        })
      }
    </section>
  )
}
