import styles from '../page.module.scss';
import { Contact } from '@/components/Form';
import { ScrollUp } from '@/components';

export default function contact() {
  return (
    <main className={styles.main}>
      <ScrollUp />
      <Contact />
    </main>
  )
}