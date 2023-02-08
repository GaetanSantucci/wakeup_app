'use client';
import styles from '/public/styles/Navbar.module.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useState, useEffect } from 'react';
import { useMedia } from 'react-use';



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
  const [stickyClass, setStickyClass] = useState(null);


  const handleMenuChange = () => {
    setIsMenuActive(!isMenuActive);
  }

  const StickNavbar = () => {

    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 350 ? setStickyClass(`${styles.stickyNav}`) : setStickyClass(null);
    }


  }

  useEffect(() => {

    window.addEventListener('scroll', StickNavbar);

    return () => {
      window.removeEventListener('scroll', StickNavbar);
    };
  });

  return (
    <div className={styles.header__container} style={stickyClass ? { marginBottom: '130px' } : null}>
      <div className={`${styles.header__container__navbar} ${stickyClass}`} style={isMenuActive ? { display: 'flex', transition: 'all 0.4s' } : null}>
        <ul className={styles.header__navbar__list} >
          {
            navTitle.map((elem) => <li key={elem.category} className={router === elem.slug ? `${styles.header__navbar} ${styles.is_active}` : `${styles.header__navbar}`}><Link href={elem.slug}>{elem.category}</Link></li>)
          }
        </ul>
      </div>
      <div onClick={handleMenuChange} id='nav'
        className={isMenuActive ? `${styles.nav__icon} ${styles.is__menu__active} ${styles.open}` : `${styles.nav__icon}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Navbar;