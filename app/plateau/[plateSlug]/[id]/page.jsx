import styles from '/app/page.module.scss';

import { Product, ScrollUp } from '@/components';



export default async function Post({ params }) {

  return (
    <div className={styles.main}>
      <ScrollUp />
      <Product id={+params.id}/>
    </div>
      
    
   
  );
}

