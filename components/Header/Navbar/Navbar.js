'use client';
import './navbar.scss';
import styles from 'app/page.module.scss';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navTitle = [{
  slug: '/',
  category: 'ACCUEIL'
}, {
  slug: '/plate',
  category: 'NOS PLATEAUX'
}, {
  slug: '/services',
  category: 'NOS PRESTATIONS'
}, {
  slug: '/contact',
  category: 'CONTACT'
}]


const Navbar = () => {

  const router = usePathname();

  return (
    <ul className='header__navbar'>
      {
        navTitle.map((elem) => <li key={elem.category} className={router === elem.slug ? `${styles.header__navbar} ${styles.is__active}` : `${styles.header__navbar}`}><Link href={elem.slug}>{elem.category}</Link></li>)
      }
    </ul>
  )
}

export default Navbar;