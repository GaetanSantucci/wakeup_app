import Image from 'next/image';
import logo from '/public/logo/logowakeuppng.png';


const Logo = () => {
  return <Image src={logo} className='logo__image' width={250} alt='Wake up clermont-ferrand Logo' />
}

export default Logo