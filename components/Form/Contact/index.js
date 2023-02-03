// import styles from '/app/page.module.scss'
// import './contact.scss';
import styles from '/public/styles/Contact.module.scss';



export default function Contact() {
  return (
    <>
      <form className={`${styles.contact_form} ${styles.row}`}>
        <div className={`${styles.form_field} ${styles.col} ${styles.x_50}`}>
          <input id="lastname" className={`${styles.input_text} ${styles.js_input}`} type="text" required />
          <label className={styles.label} htmlFor="lastname">Nom</label>
        </div>
        <div className={`${styles.form_field} ${styles.col} ${styles.x_50}`}>
          <input id="firstname" className={`${styles.input_text} ${styles.js_input}`} type="text" required />
          <label className={styles.label} htmlFor="firstname">Prénom</label>
        </div>
        <div className={`${styles.form_field} ${styles.col} ${styles.x_50}`}>
          <input id="email" className={`${styles.input_text} ${styles.js_input}`} type="email" required />
          <label className={styles.label} htmlFor="email">Email</label>
        </div>
        <div className={`${styles.form_field} ${styles.col} ${styles.x_50}`}>
          <input id="phone" className={`${styles.input_text} ${styles.js_input}`} type="tel" required />
          <label className={styles.label} htmlFor="phone">Téléphone</label>
        </div>

        <div className={`${styles.form_field} ${styles.col} ${styles.x_100} ${styles.align_center}`}>
          <input id="message" className={`${styles.input_text} ${styles.js_input}`} type="text" required />
          <label className={styles.label} htmlFor="message">Message</label>
        </div>
        <div className={`${styles.form_field} ${styles.col} ${styles.x_100} ${styles.align_center}`}>

          <input className={styles.submit_btn} type="submit" value="Envoyer" />
        </div>
      </form>
    </>
  )
}