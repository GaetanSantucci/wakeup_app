import styles from '../page.module.scss';

import { Products, ScrollUp } from '@/components';

export default function plates() {
  return (
    <main className={styles.main}>
      <ScrollUp />
      <h1 className={styles.main__title}>DES PLATEAUX GOURMANDS ET ÉLÉGANTS</h1>
     <Products />
    </main>
  )
}

