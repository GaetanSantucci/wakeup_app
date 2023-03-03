'use client';

import { Business,ButtonToScrollTop,Custom, Gift, ScrollToTop } from '@/components';

import { usePathname } from 'next/navigation';

export default function BusinessPage() {

  const router = usePathname();

  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nos prestations</h2>
      <ScrollToTop />
      <Business />
      <Gift />
      <Custom />
      <ButtonToScrollTop />
    </>
  )
}