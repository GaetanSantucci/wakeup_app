import styles from '/public/styles/Custom.module.scss';
import Link from 'next/link';

const Custom = () => {
  return (
    <div className={styles.custom__container}>
      <section className={styles.custom__container__article}>
        <div className={styles.custom__container__article__background}></div>
        <div className={styles.custom__container__article__details}>
          <h2 className={styles.custom__container__title}>Personnalisez vos plateaux</h2>
          <h4>Une envie particulière pour un jour spécial, ou tout simplement pour faire plaisir</h4>
          <p>Offrez un plateau avec une attention, des fleurs, un petit mot</p>
          <p>Nous vous proposons des personnalisations de votre plateau orné d&apos; gros noeud avec un ruban en lin ou plus sophistiqué avec deux rubans en satin accompagnées d&apos;une rose rouge, symbole de passion dévorante ou blanche, symbole de l&apos;amour pur et simple
          </p>
          <p>Nos formules :</p>
          <ul>
            <li>Jolie ruban en lin avec noeud: <span>3,90 €</span></li>
            <li>Rose, gypsophiles et ruban : <span>14,90 €</span></li>
          </ul>

          <Link href={`/contact`} >
            <button className={styles.button}>Contact</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Custom