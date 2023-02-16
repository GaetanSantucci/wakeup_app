'use client';
import { useState } from 'react';
// import { useEffect, useState } from 'react';
import styles from '/public/styles/Contact.module.scss';



export default function Contact() {

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false)
  const Modal = () => {
    return (
      <div>Email envoyé avec succès !</div>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Get data from the form.
    let data = {
      lastname: lastname,
      firstname: firstname,
      email: email,
      phone: phone,
      message: message
    }

    console.log('data: ', data);
    const JSONdata = JSON.stringify(data)

    const endpoint = 'http://localhost:7777/api/v1/contact'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)

    const result = await response.json()
    // display modal  
    if (result) {
      setModal(true)
      setLastname('')
      setFirstname('')
      setEmail('')
      setPhone('')
      setMessage('')
    }
  }

  return (
    <>
      <h2>N&apos;hésitez pas à nous contacter</h2>
      <form className={`${styles.contact_form} ${styles.row}`} onSubmit={handleSubmit}>
        <div className={`${styles.form_field} ${styles.col} ${styles.x_50}`}>
          <input id='lastname' className={lastname.length > 0 ? `${styles.not_empty} ${styles.input_text} ${styles.js_input}` : `${styles.input_text} ${styles.js_input}`}
            type='text'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required />
          <label className={styles.label} htmlFor='lastname'>Nom</label>
        </div>
        <div className={`${styles.form_field} ${styles.col} ${styles.x_50}`}>
          <input id='firstname' className={firstname.length > 0 ? `${styles.not_empty} ${styles.input_text} ${styles.js_input}` : `${styles.input_text} ${styles.js_input}`}
            type='text'
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required />
          <label className={styles.label} htmlFor='firstname'>Prénom</label>
        </div>
        <div className={`${styles.form_field} ${styles.col} ${styles.x_50}`}>
          <input id='email' className={email.length > 0 ? `${styles.not_empty} ${styles.input_text} ${styles.js_input}` : `${styles.input_text} ${styles.js_input}`}
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          <label className={styles.label} htmlFor='email'>Email</label>
        </div>
        <div className={`${styles.form_field} ${styles.col} ${styles.x_50}`}>
          <input id='phone' className={phone.length > 0 ? `${styles.not_empty} ${styles.input_text} ${styles.js_input}` : `${styles.input_text} ${styles.js_input}`}
            type='tel'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required />
          <label className={styles.label} htmlFor='phone'>Téléphone</label>
        </div>

        <div className={`${styles.form_field} ${styles.col} ${styles.x_100} ${styles.align_center}`}>
          <input id='message' className={message.length > 0 ? `${styles.not_empty} ${styles.input_text} ${styles.js_input}` : `${styles.input_text} ${styles.js_input}`}
            type='text'
            value={message}
            title='Le message doit être composé de lettres, chiffres et les caractères suivants !,.%()'
            onChange={(e) => setMessage(e.target.value)}
            required />
          <label className={styles.label} htmlFor='message'>Message</label>
        </div>
        <div className={`${styles.form_field} ${styles.col} ${styles.x_100}`}>
          <button className={styles.button} type='submit'>Envoyer</button>
        </div>
      </form>
      {modal ? <Modal /> : null}
    </>
  )
}
