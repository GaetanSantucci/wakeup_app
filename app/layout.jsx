import '/public/styles/reset.scss';
import './globals.scss'
import { Header, Footer } from '/components';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}




