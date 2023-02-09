'use client';

import { Business, Gift, ScrollUp } from '@/components';

import { usePathname } from 'next/navigation';

export default function BusinessPage() {

  const router = usePathname();

  return (
    <>
      <h2>Nos prestations</h2>
      <ScrollUp />
      <Business />
      <Gift />
    </>
  )
}