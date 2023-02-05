import styles from '/public/styles/Homepage.module.scss';

import { ScrollUp, Spinner } from '@/components';

export default function EventPage() {
  return (
    <main className={styles.main}>
      <ScrollUp />
      <h2>Page des evenements</h2>
      <Spinner />
    </main>
  )
}