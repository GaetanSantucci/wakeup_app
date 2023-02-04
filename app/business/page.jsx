'use client';

import styles from '../page.module.scss';
import { Business, ScrollUp } from '@/components';

import { usePathname } from 'next/navigation';

export default function BusinessPage() {

  const router = usePathname();

  return (
    <>
      <h2>Business Page</h2>
      <ScrollUp />
      <Business />
    </>
  )
}