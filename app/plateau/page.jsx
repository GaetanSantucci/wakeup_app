import styles from '/public/styles/Homepage.module.scss';

import { InstaLink, Products, ScrollUp, Spinner } from '@/components';
import { Suspense } from 'react';

export default function plates() {
  return (
    <>
    <ScrollUp />
      <InstaLink />
      <h1 className={styles.main__title}>DES PLATEAUX GOURMANDS ET ÉLÉGANTS</h1>
      <p style={{textAlign: 'center', padding:'0.5rem'}}>Nous vous proposons des plateaux gourmands, élégants et raffinés. Du petit-déjeuner, au brunch et même au plateau apéritif nous proposons une selection de plateaux avec des produits de qualité.</p>
      <p style={{textAlign: 'center', padding:'0.5rem'}}>Nous avons à cœur de travailler avec des artisans locaux et nous concoctons également la plupart de nos produits car ici nous prônons le fait-maison ! 
      </p>
      <p>Découvrez nos plateaux et laissez vous tenter !</p>
      <Suspense fallback={<Spinner />}>
        <Products />
      </Suspense>
    </>
  )
}

