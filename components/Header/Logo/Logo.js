import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo/logowakeuppng.png';


const Logo = () => {
  return (
    <Link href='/'>
      <Image src={logo} className='logo__image' width={300} alt='Wake up clermont-ferrand Logo' />
    </Link>
  )

}

export default Logo