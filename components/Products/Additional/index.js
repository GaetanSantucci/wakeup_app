import styles from '/public/styles/Additionnal.module.scss';

import orange from '/public/images/orange.jpeg';
import prosecco from '/public/images/prosecco.jpeg';
import Image from 'next/image';

const Additionnal = () => {
  return (
    <div className={styles.additionnal__container}>
      <div className={styles.additionnal__container__card}>
        <div className={styles.additionnal__container__card__image}>
          <Image src={orange} alt='orange' />
        </div>
        <div className={styles.additionnal__container__card__details}>
          <h3>Titre</h3>
          <p>miam miam miam miam miam miam miam miam miam miam </p>
          <p>miam miam miam miam miam miam miam miam miam miam </p>
          <span>price : 5,50 €</span>
        </div>
      </div>
      <div className={styles.additionnal__container__card}>
        <div className={styles.additionnal__container__card__image}>
          <Image src={prosecco} alt='prosecco' />
        </div>
        <div className={styles.additionnal__container__card__details}>
          <h3>Titre</h3>
          <p>miam miam miam miam miam miam miam miam miam miam </p>
          <p>miam miam miam miam miam miam miam miam miam miam </p>
          <span>price : 5,50 €</span>
        </div>
      </div>
    </div>
  )
}

export default Additionnal;