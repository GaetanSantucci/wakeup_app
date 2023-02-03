import '/public/styles/reset.scss';
import './globals.scss';
import styles from './page.module.scss';

import { Header, Footer } from '/components';
import { ScrollToTop } from '@/components';


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
      <Footer />
      </body>
    </html>
  )
}




