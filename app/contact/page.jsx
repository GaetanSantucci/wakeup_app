import styles from '../page.module.scss';

import { Contact } from '@/components/Form';
import { ScrollToTop } from '@/components';

export default function contact() {
  return (
    <>
      <h1 className={styles.main__title}>N'hésitez pas à nous contacter</h1>
      <ScrollToTop />
      <Contact />
    </>
  )
}