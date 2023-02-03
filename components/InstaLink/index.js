import Link from 'next/link';

const styleInsta = {
  position: 'fixed',
  top: '43%',
  left: '0',
  transformTranslate: 'translate(-50%, -50%)',
  padding: '0.6rem',
  userSelect: 'none',
  backgroundColor: 'black',
  writingMode: 'vertical-rl',
  textOrientation: 'upright',
  color: 'white'
}

export default function InstaLink() {
  return (
    <div style={styleInsta}>
      <Link href='https://www.instagram.com/wakeup.clf/?hl=en' target='blank'>
        Instagram
      </Link>
    </div>
  )
}