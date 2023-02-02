import styles from '../page.module.scss';
import { ScrollUp } from '@/components';

export default function EventPage() {
  return (
    <main className={styles.main}>
      <ScrollUp />
      <h2>Page des evenements</h2>
    </main>
  )
}