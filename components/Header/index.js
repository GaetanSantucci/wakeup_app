import styles from '/public/styles/Header.module.scss';
import Logo from './Logo/Logo.js';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header; 