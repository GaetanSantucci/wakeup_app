import styles from '../page.module.scss';
import { ScrollToTop, Maps  } from '@/components';

export default function ClientFetching() {

    return (
        <>
          <h2 className={styles.main__title}>Zone de livraison</h2>
          <ScrollToTop />
          <Maps />
        </>
    );
}
