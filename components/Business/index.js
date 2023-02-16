import styles from '/public/styles/Business.module.scss'
import Link from 'next/link';


const Business = () => {
  return (
    <>
      <div className={styles.business__container}>
        <div className={styles.business__container__details}>
          <div className={styles.business__container__details__background} />
          <div className={styles.business__container__details__card}>
            <h3>Pour votre entreprise</h3>
            <p>Une réunion de plus de 100 personnes ou en petit comité, nous saurons nous adapter à vos besoins.</p>
            <p>Découvrez nos plateaux business pour vos petits déjeuners d&apos;entreprise, vos réunions, vos teams building ou tout autre évènement d&apos;entreprise. Du petit-déjeuner classique au petit-déjeuner avec une touche salée, nos plateaux s&apos;adapterons à toutes les envies.
              Livraison pour une commande minimum de 5 personnes.
              Pour toute demande, merci de nous contacter au minimum 2 semaines à l&apos;avance.
            </p>
            <p>Que vous ayez besoin de :</p>
            <ul className={styles.business__container__details__card__list}>
              <li>Mini croissant artisanal</li>
              <li>Mini pain au chocolat artisanal</li>
              <li>Madeleines et cake différentes saveurs (fait-maison)</li>
              <li>Gaufres salées (fait-maison)</li>
              <li>Jus de fruit</li>
              <li>Café Malongo BIO ou Thé noir (Dammann &quot;breakfast&quot;)</li>
              <li>Fruit frais</li>
            </ul>
            <p>Formule à partir de :</p>
            <p className={styles.business__container__details__card__price}>Tarif  4€ / personne</p>
            <Link href={`/contact`} >
              <button className={styles.btn_business}>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Business;