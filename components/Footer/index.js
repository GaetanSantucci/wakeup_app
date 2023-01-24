import styles from 'app/page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import logoInstagram from 'public/images/logo_instagram.png';
import logoFacebook from 'public/images/logo_facebook.png';
import logoLinkedIn from 'public/images/logo_linkedin.png';


const Footer = () => {

  return (
    <footer className={styles.section__footer}>
      <div className={styles.section__footer__social}>
        <p className={styles.section__footer__social__text}> Suivez nous : </p>
        <div className={styles.section__footer__social__logo}>
          <Link href='https://www.instagram.com/wakeup.clf/?hl=en' target='blank'><Image src={logoInstagram} width={50} height={50} alt='logo instagram' /></Link>
          <Link href='https://www.instagram.com/wakeup.clf/?hl=en' target='blank'><Image src={logoFacebook} width={50} height={50} alt='logo facebook' /></Link>
          <Link href='https://www.linkedin.com/in/wake-up-924779215/?originalSubdomain=fr' target='blank'><Image src={logoLinkedIn} width={50} height={50} alt='logo linkedin' /></Link>
        </div>
      </div>
      <p>© 2023 WAKE UP, tous droits réservés</p>
    </footer>
  )
}

export default Footer;