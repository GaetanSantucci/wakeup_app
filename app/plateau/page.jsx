import styles from '../page.module.scss';

import { Products } from '@/components';

export default function plates() {
  return (
    <>
      <h1 className={styles.main__title}>DES PLATEAUX GOURMANDS ET ÉLÉGANTS</h1>
      <p style={{textAlign: 'justify', padding:'1rem'}}>Nous vous proposons des plateaux gourmands, élégants et raffinés. Du petit-déjeuner, au brunch et même au plateau apéritif nous proposons une selection de plateaux avec des produits de qualité.</p>
      <p style={{textAlign: 'justify', padding:'1rem'}}>Nous avons à cœur de travailler avec des artisans locaux et nous concoctons également la plupart de nos produits car ici nous prônons le fait-maison ! 
      </p>
      <p>Découvrez nos plateaux et laissez vous tenter !</p>
     <Products />
    </>
  )
}

