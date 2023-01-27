import styles from './page.module.scss';
import { Spinner } from '@/components'

export default function Loading(){
  return (
    <main className={styles.main}>
      <Spinner />
    </main>
  )
}