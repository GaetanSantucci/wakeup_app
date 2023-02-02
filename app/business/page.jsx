'use client';

import styles from '../page.module.scss';
import { ScrollUp } from '@/components';

import { usePathname } from 'next/navigation';

export default function BusinessPage() {

  const router = usePathname();

  return (
    <main className={styles.main}>
      <ScrollUp />
      <h2>Page des {router}</h2>
    </main>
  )
}