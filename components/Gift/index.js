/* eslint-disable react/no-unescaped-entities */
import styles from '/public/styles/Homepage.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import carteRecto from '/public/images/carte_cadeau_recto.png';
import carteVerso from '/public/images/carte_cadeau_verso.png';
import carteCadeauPortrait from '/public/images/carte_cadeau_portrait.jpg';

const Gift = () => {
  //todo rajouter une photo dans gift__container__description
  // todo creer module css et faire modif page en 100% pour avoir photo dew chaque cote 
  // todo effet business page 
  //todo gere css responsive
  return (
    <section className={styles.gift__container}>
      <h2 className={styles.gift__container__title}>carte cadeau</h2>
      <p style={{ fontSize: '1.4rem' }}>Faites plaisir à vos proches et offrez leur une carte cadeau !</p>
      <div className={styles.gift__container__image}>
        <div className={styles.gift__container__image__left}>
          <Image src={carteRecto} alt='photo carte cadeau recto' />
        </div>
        <div className={styles.gift__container__image__right}>
          <Image src={carteVerso} alt='photo carte cadeau recto' />
        </div>
      </div>
      <div className={styles.gift__container__description}>
        <p>Simple, rapide et facile ! </p>
        <p>Pour offrir cette carte cadeau, choisissez le montant souhaité et contactez nous par <Link href='mailto=contact@wakeupbox.fr'>mail</Link></p>
        <p>Il vous sera demandé les coordonnées de la personne (nom, prénom et adresse) à qui vous souhaitez offrir la carte cadeau.Une fois les modalités saisies et le règlement effectué. Nous réaliserons l'e-carte cadeau et nous vous l'enverrons par mail !</p>
        <p>Il ne vous restera plus qu'à l'imprimer si vous le souhaitez et l'offrir</p>

        <ul>Cette carte est :
          <li>- valable 6 mois.</li>
          <li>- non échangeable, ni remboursable.</li>
          <li>- fractionnable et cumulable entre elles si vous en possédez plusieurs.</li>
        </ul>

        <p>Le bénéficiaire de cette carte cadeau devra inscrire le numéro de celle-ci lors de la réservation dans l'onglet code promo.</p>
      </div>
      <div className={styles.gift__container__article}>
        <div className={styles.gift__container__article__image}>
          <Image src={carteCadeauPortrait} alt='carte cadeau presentation fleurs séchées' />
        </div>
        <div className={styles.gift__container__article__text}>
          <p>Surprenez vos proches et offrez leur un petit déjeuner gourmand livré à domicile ! </p>
          <p>Notre nouvelle carte cadeau prête à offrir sera parfaite pour n'importe quelles occasions !</p>
          <p>Celle-ci pourra vous être envoyée par courrier.
            Vous aurez toujours la possibilité de recevoir notre e-carte cadeau sans frais supplémentaires.</p>
          <p>Les modalités sont les mêmes que pour notre e-carte cadeau. Pour toutes demandes merci de nous contacter par mail.</p>
          <p style={{ fontFamily: 'var(--fontTitle)', fontSize: '1.6rem', color: '#000' }}>5,50€</p>
          <Link href={`/contact`} >
            <button className={styles.button} style={{ width: '300px', padding: '0.8rem 0' }}>Contact</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Gift