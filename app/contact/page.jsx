
import styles from '/public/styles/Homepage.module.scss';

import { Contact } from '@/components/Form';
import { Input, ScrollToTop } from '@/components';

export default function contact() {
  return (
    <>
      <h2>N&apos;hésitez pas à nous contacter</h2>
      <ScrollToTop />
      <Contact />
      {/* <form className={`${styles.contact_form} ${styles.row}`}>
      <Input id={"lasttname"} type={"text"} labelName={"Nom"}/>
      <Input id={"firstname"} type={"text"} labelName={"Prénom"}/>
      <Input id={"email"} type={"email"} labelName={"Email"}/>
      <Input id={"phone"} type={"tel"} labelName={"Téléphone"}/>
      <Input id={"message"} type={"textarea"} labelName={"Message"}/>
      </form> */}
    </>
  )
}