import styles from '@/app/page.module.scss';

import { getDeliveryArea } from '@/utils/getDeliveryArea';


export default async function Maps({ deliveryArea }) {

  const result = await getDeliveryArea();

  return (
    <section className={styles.maps__container}>
      <div className={styles.maps_container__input}>
        <select>
          {result.map((option) => (
            <option key={option.city} value={option.city}>{option.city}</option>
          ))}
        </select>
      </div>
    </section>
  )
}
