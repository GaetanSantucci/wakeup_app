import styles from '/public/styles/Homepage.module.scss';

import { Product, ScrollUp } from '@/components';

export default async function Post({ params }) {
  return (
    <div className={styles.main}>
      <ScrollUp />
      <Product id={+params.id}/>
    </div>
  );
}

