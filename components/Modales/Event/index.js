import styles from '/public/styles/EventModal.module.scss';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';

export default function EventModale() {
  return (
    <div className={styles.container}>
      <CancelSharpIcon />
      Hello la modale Event
    </div>
  )
}