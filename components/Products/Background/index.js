import Image from 'next/image';
import backgroundImage from '/public/images/marbre_portrait.jpg'


const backgroundStyle = {
  zIndex: -1,

}
export default function Background() {
  return (
    <>
      <Image src={backgroundImage} alt='fond marbre' fill style={backgroundStyle} />
    </>
  )
}