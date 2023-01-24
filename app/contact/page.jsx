import styles from '../page.module.scss';
import { Contact } from '@/components/Form';

export default function contact() {
  return (
    <main className={styles.main}>
      <Contact />
    </main>
  )
}