import '/public/styles/reset.scss';
import '/public/styles/globals.scss';

import styles from '/public/styles/Homepage.module.scss';

import { ButtonToScrollTop, Header, Footer, ScrollToTop } from '/components';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ScrollToTop />
        <Header />
      <main className={styles.main}>
      {children}
      </main>
      <ButtonToScrollTop />
      <Footer />
      </body>
    </html>
  )
}




