import styles from '../page.module.scss';

import { Products } from '@/components';

const products = [
  {
    name: 'Plateau Sunshine',
    desc: '',
    price: "29,90",
    image: 'http://localhost:3000/images/sunshine_marbre.png'
  },  {
    name: 'Plateau Veggie',
    desc: '',
    price:" 34,90",
    image: 'http://localhost:3000/images/veggie_marbre.png'
  },  {
    name: 'Plateau Best Seller',
    desc: '',
    price: "42,90",
    image: 'http://localhost:3000/images/bestseller_marbre.png'
  },  {
    name: 'Plateau Dolce Vita',
    desc: '',
    price: "49,90",
    image: 'http://localhost:3000/images/dolce_marbre.png'
  },  {
    name: 'Plateau Apéritif',
    desc: '',
    price: '69,90',
    image: 'http://localhost:3000/images/aperitif_marbre.png'
  },  {
    name: 'Prosecco Riccadonna',
    desc: '',
    price: '6,90',
    image: 'http://localhost:3000/images/prosecco_marbre.png'
  }
]


export default function plates() {
  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>DES PLATEAUX GOURMANDS ET ÉLÉGANTS</h1>
     <Products />
    </main>
  )
}