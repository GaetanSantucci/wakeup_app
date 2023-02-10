import styles from '/public/styles/Gift.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import carteRecto from '/public/images/carte_cadeau_recto.png';
import carteVerso from '/public/images/carte_cadeau_verso.png';
import carteCadeauPortrait from '/public/images/carte_cadeau_portrait.jpg';

const Gift = () => {
  return (
    <section className={styles.gift__container}>
      {/* <p>Faites plaisir à vos proches et offrez leur une carte cadeau !</p> */}
      {/* <div className={styles.gift__container__image}>
        <div className={styles.gift__container__image__left}>
        <Image src={carteRecto} alt='photo carte cadeau recto' />
        </div>
        <div className={styles.gift__container__image__right}>
        <Image src={carteVerso} alt='photo carte cadeau recto' />
        </div>
      </div> */}

      <div className={styles.gift__container__article}>

        <div className={styles.gift__container__article__text}>
          <div className={styles.gift__container__description}>
            <h2 className={styles.gift__container__title}>carte cadeau</h2>
            <p>Surprenez vos proches et offrez leur un petit déjeuner gourmand livré à domicile ! </p>
            <p>Simple, rapide et facile ! </p>
            <p>Pour offrir cette carte cadeau, choisissez le montant souhaité et contactez nous par <Link href='mailto=contact@wakeupbox.fr'>mail</Link></p>
            <p>Il vous sera demandé les coordonnées de la personne (nom, prénom et adresse) à qui vous souhaitez offrir la carte cadeau.Une fois les modalités saisies et le règlement effectué. Nous réaliserons l&apos;e-carte cadeau et nous vous l&apos;enverrons par mail !</p>
            <p>Il ne vous restera plus qu&apos;à l&apos;imprimer si vous le souhaitez et l&apos;offrir</p>

            <ul>Cette carte est :
              <li>- valable 6 mois.</li>
              <li>- non échangeable, ni remboursable.</li>
              <li>- fractionnable et cumulable entre elles si vous en possédez plusieurs.</li>
            </ul>

            <p>Le bénéficiaire de cette carte cadeau devra inscrire le numéro de celle-ci lors de la réservation dans l&apos;onglet code promo.</p>
          </div>
          <p>Pour recevoir votre carte, nous vous proposons deux méthodes :</p>
          <ul>
            <li>Soit par mail sous forme d&apos;e-carte cadeau</li>
            <li>Soit par envoi postal dans une jolie enveloppe, prête à offrir (surcoût de 5,50€)</li>
          </ul>
          <Link href={`/contact`} >
            <button className={styles.button}>Contact</button>
          </Link>
        </div>
        <div className={styles.gift__container__article__image}>
          {/* <Image src={carteCadeauPortrait} alt='carte cadeau presentation fleurs séchées' /> */}
        </div>
      </div>
    </section>
  )
}

export default Gift