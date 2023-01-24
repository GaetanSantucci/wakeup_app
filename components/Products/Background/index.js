import Image from 'next/image';
import backgroundImage from '/public/images/marbre.png'
import styles from '/app/page.module.scss';

export default function Background() {
  return (
    <div className={styles.background__plate} >
      <Image src={backgroundImage} alt='fond marbre' fill />
    </div>
  )
}