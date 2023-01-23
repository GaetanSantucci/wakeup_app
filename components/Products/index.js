import Image from 'next/image';
import Link from 'next/link';

import styles from '../../app/globals.scss';


const products = [
  {
    name: 'Plateau Sunshine',
    desc: '',
    price: "29,90",
    image: 'http://localhost:3000/images/sunshine_marbre.png'
  }, {
    name: 'Plateau Veggie',
    desc: '',
    price: " 34,90",
    image: 'http://localhost:3000/images/veggie_marbre.png'
  }, {
    name: 'Plateau Best Seller',
    desc: '',
    price: "42,90",
    image: 'http://localhost:3000/images/bestseller_marbre.png'
  }, {
    name: 'Plateau Dolce Vita',
    desc: '',
    price: "49,90",
    image: 'http://localhost:3000/images/dolce_marbre.png'
  }, {
    name: 'Plateau Apéritif',
    desc: '',
    price: '69,90',
    image: 'http://localhost:3000/images/aperitif_marbre.png'
  }, {
    name: 'Prosecco Riccadonna',
    desc: '',
    price: '6,90',
    image: 'http://localhost:3000/images/prosecco_marbre.png'
  }
]

export default function Products() {
  return (
    <section className={styles.main__container__product}>
      {
        products.map(product => {
          return (
            <div className={styles.main__container__product__card} key={product.name}>

              <div className={styles.main__container__product__card__image}>
                <Image src={product.image} alt={product.name} width={350} height={500} />
              </div>
              <div className={styles.main__container__product__card__desc}>
                <div className={styles.main__container__product__card__title}>
                  <h2>{product.name.toUpperCase()}</h2>
                  <p>{product.price} €</p>
                </div>
                <div className={styles.main__container__product__card__information}>
                  <Link href='#'>En savoir plus</Link>
                  <button className={styles.button}>Réserver</button>
                </div>
              </div>
            </div>

          )
        })
      }
    </section>
  )
}