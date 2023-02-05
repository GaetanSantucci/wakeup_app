'use client';
import styles from '/public/styles/Navbar.module.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useState } from 'react';


const navTitle = [{
  slug: '/',
  category: 'ACCUEIL'
}, {
  slug: '/plateau',
  category: 'NOS PLATEAUX'
}, {
  slug: '/prestation',
  category: 'NOS PRESTATIONS'
}, {
  slug: '/contact',
  category: 'CONTACT'
}]



const Navbar = () => {

  const router = usePathname();
  const [isMenuActive, setIsMenuActive] = useState(false)

  const handleMenuChange = () => {
    setIsMenuActive(!isMenuActive);
  }
  return (
    <div className={styles.header__container}>
      <div className={styles.header__container__navbar} style={isMenuActive ? { display: 'flex', transition: 'all 0.4s' } : null}>
        <ul className={styles.header__navbar__list} >
          {
            navTitle.map((elem) => <li key={elem.category} className={router === elem.slug ? `${styles.header__navbar} ${styles.is_active}` : `${styles.header__navbar}`}><Link href={elem.slug}>{elem.category}</Link></li>)
          }
        </ul>
      </div>
      <div onClick={handleMenuChange} className={isMenuActive ? `${styles.hamburger} ${styles.is__menu__active}` : `${styles.hamburger}`} id={styles.hamburger__menu}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </div>
  )
}

export default Navbar;