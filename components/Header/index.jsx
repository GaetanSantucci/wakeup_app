import './header.scss';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <Navbar />
    </header>
  )
}

export default Header; 