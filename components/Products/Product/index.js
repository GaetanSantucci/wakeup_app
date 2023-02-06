import styles from '/public/styles/Product.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import { getProductById } from '/libs/getProductList';

export default async function Product({ id }) {

  let product = []
  const plate = await getProductById(id);
  // console.log('associated: ', associated.plate);
  product.push(plate.plate);
  // console.log('product: ', product.products);
  //todo ajouter le composant associated puis lui passer en props le plae.products pour mappage sur les products

  return (
    <div className={styles.productId__container}>
      {
        product.map(elem => {
          const price = elem.price.toString().replace('.', ',');
          const text = elem.description.split('\\n')

          return (
            <div className={styles.productId__container__card} key={elem.name}>
              <div className={styles.productId__container__image}>
                <Image src={elem.image} alt={elem.name} width={400} height={600} />
              </div>
              <div className={styles.productId__container__card__details}>
                <div className={styles.productId__container__card__details__effect}></div>
                <h2 className={styles.productId__container__card__details__title}>{elem.name}</h2>
                <p className={styles.productId__container__card__details__subtitle}>{elem.subtitle}</p>
                <ul className={styles.productId__container__card__details__list}>
                  {
                    text.map(p => <li key={p}>- {p.replace('\\n', '')}</li>)
                  }
                </ul>
                <div className={styles.productId__container__card__details__order}>
                  <span className={styles.productId__container__card__details__order__price} >{price} €</span>
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