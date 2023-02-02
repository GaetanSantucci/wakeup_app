'use client';

// import getDeliveryArea from '@/libs/getDeliveryArea';
import { use } from 'react';

import { getDeliveryArea } from '@/utils/getDeliveryArea';


const deliveryAreaFetch = getDeliveryArea();
console.log('deliveryAreaFetch: ', deliveryAreaFetch);

export default function Delivery() {
  const delivery = use(deliveryAreaFetch);
  console.log('delivery: ', delivery);

  return (
    <div className={styles.main}>
      {/* <blockquote>{delivery.city}</blockquote> */}
    </div>

    //     <section className={styles.maps__container}>
    //   <div className={styles.maps_container__input}>
    //     <select>
    //       {result.map((option) => (
    //         <option key={option.city} value={option.city}>{option.city}</option>
    //       ))}
    //     </select>
    //   </div>
    // </section>
  )
}
