/* eslint-disable react/no-unescaped-entities */
import styles from '/public/styles/Homepage.module.scss';

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