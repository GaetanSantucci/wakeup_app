'use client';
import styles from '/public/styles/Additionnal.module.scss';

import Image from 'next/image';
import { useMedia } from 'react-use';

import BootstrapCarousel from '@/components/Caroussel';

const Additionnal = ({ products }) => {
  const isSmallScreen = useMedia('(max-width: 768px)', false);

  return (
    <div className={styles.additionnal__container}>
      <div className={styles.additionnal__container__cards}>
        {isSmallScreen ? <BootstrapCarousel products={products} /> : products.map(elem => {
          const price = elem.price.toString().replace('.', ',');
          return (
            <div key={elem.name} className={styles.additionnal__container__cards__item}>
              <div className={styles.additionnal__container__cards__item__image}>
                <Image src={elem.image} width={250} height={230} alt={elem.name} />
              </div>
              <div className={styles.additionnal__container__cards__item__details}>
                <h3>{elem.name}</h3>
                <div>
                  <p>{elem.description}</p>
                  <p><span>{price} €</span></p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.additionnal__container__options}>
        <h3>Personnalisez vos plateaux</h3>
        <div className={styles.additionnal__container__options__input}>
          <label htmlFor='flower'>Formule fleurs</label><span>12,90 €</span>
          {/* <input type='checkbox' /> */}
          <p>Votre plateau avec son noeud accompagné  d&apos;une rose et de gypsophiles, parfait pour lui montrer votre amour</p>
        </div>
        <div className={styles.additionnal__container__options__input}>
          <label htmlFor='flower'>Formule ruban lin</label><span>3,90 €</span>
          {/* <input type='checkbox' /> */}
          <p>Un joli noeud en lin pour un des plus bel effet sur notre plateau</p>
        </div>
      </div>
    </div>
  )
}

export default Additionnal;