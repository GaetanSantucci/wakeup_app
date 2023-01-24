import styles from '/app/page.module.scss'
import './contact.scss';



export default function Contact() {
  return (

    // <form classNameName={styles.form__contact} >


    //   <h2>Une demande ?</h2>
    //   <div classNameName={styles.form__contact__input}>
    //     <div classNameName={styles.form__contact__input__name}>
    //       <div classNameName={styles.label}>
    //         <label for="lastname">Name</label>
    //         <input type='text' classNameName={styles.form__contact__input__lastname}
    //           // onChange={(e) => console.log(e.target.value)}
    //           id='lastname'
    //           name='lastname'
    //           required />
    //       </div>
    //       <div classNameName={styles.label}>
    //         <label for="firstname">Prenom</label>
    //         <input type='text' classNameName={styles.form__contact__input__firstname}
    //           // onChange={(e) => console.log(e.target.value)}
    //           id='firstname'
    //           name='firstname'
    //           required />
    //       </div>
    //     </div>
    //     <div classNameName={styles.form__contact__input__join}>
    //       <div classNameName={styles.label}>
    //         <label for="email">Email</label>
    //         <input type='email' classNameName={styles.form__contact__input__email}
    //           // onChange={(e) => console.log(e.target.value)}
    //           id='email'
    //           name='email'
    //           required />
    //       </div>
    //       <div classNameName={styles.label}>
    //         <label for="phone">Telephone</label>
    //         <input type='tel' classNameName={styles.form__contact__input__tel}
    //           // onChange={(e) => console.log(e.target.value)}
    //           id='phone'
    //           name='phone'
    //           pattern='[0-9]{10}'
    //           required />
    //       </div>
    //     </div>
    //     <div classNameName={styles.label}>
    //       <label for="message">Message</label>
    //       <input type='text' classNameName={styles.form__contact__input__message}
    //         // onChange={(e) => console.log(e.target.value)}
    //         id='message'
    //         name='message'
    //         maxLength="8"
    //         required />
    //     </div>
    //     <button classNameName={styles.button} >Envoyer</button>
    //   </div>
    // </form>

    <section className={styles.main}>
      <h1 className={styles.main__title}>N'hésitez pas à nous contacter</h1>
      <form className="contact-form row">
        <div className="form-field col x-50">
          <input id="lastname" className="input-text js-input" type="text" required />
          <label className="label" for="lastname">Nom</label>
        </div>
        <div className="form-field col x-50">
          <input id="firstname" className="input-text js-input" type="text" required />
          <label className="label" for="firstname">Prénom</label>
        </div>
        <div className="form-field col x-50">
          <input id="email" className="input-text js-input" type="email" required />
          <label className="label" for="email">E-mail</label>
        </div>
        <div className="form-field col x-50">
          <input id="tel" className="input-text js-input" type="tel" required />
          <label className="label" for="tel">Téléphone</label>
        </div>
        <div className="form-field col x-100">
          <input id="message" className="input-text js-input" type="text" required />
          <label className="label" for="message">Message</label>
        </div>
        <div className="form-field col x-100 align-center">
          <input className={styles.button} type="submit" value="Envoyer" />
        </div>
      </form>
    </section>
  )
}