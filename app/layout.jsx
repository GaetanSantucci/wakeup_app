import '/public/styles/reset.scss';
import '/public/styles/globals.scss';

import styles from '/public/styles/Homepage.module.scss';

import { ButtonToScrollTop, Header, Footer, ScrollToTop } from '/components';

import { Providers } from './provider'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <ScrollToTop />
          <Header />
            <main className={styles.main}>
              {children}
            </main>
          <ButtonToScrollTop />
        <Footer />
      </Providers>
      </body>
    </html>
  )
}




