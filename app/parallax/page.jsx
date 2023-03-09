'use client';
import background from '/public/images/background.jpg'
// import Logo from '/public/logo/wakeup.png';
import Image from 'next/image';
import Logo from '@/components/Logo';
import styles from '/public/styles/Parallax.module.scss'



function NewHome () {



  return (
    <>
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Image alt='image' src={background} className={styles.background}/>
        {/* <Image alt='text' src={Logo} className={styles.logo} /> */}
        <Logo />
      </header>
      <section className={styles.text}>
        <p>L&apos;histoire de WAKE UP c&apos;est avant tout le plaisir de faire de bons et beaux petits déjeuners fait-maison ! Nous privilégions des produits frais, locaux et surtout nous prônons le fait-maison !</p>
        <p>Nous travaillons avec des artisans locaux et nous utilisons des produits frais et de qualité.</p>
        <p>Qui n&apos;a jamais rêvé de se faire livrer un bon petit déjeuner ou un brunch sans qu&apos;il n&apos;ait à sortir de chez lui et surtout sans bouger le petit doigt ? </p>
        <p>Découvrez notre sélection de plateaux gourmands et laissez-vous tenter ! </p>
      </section>
    </div>
    </>
  );
}



export default NewHome;
