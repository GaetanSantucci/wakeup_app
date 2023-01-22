'use client';
import Image from 'next/image';
import { useInstagramFeed } from 'use-instagram-feed';

const Posts = () => {



  let photos = useInstagramFeed({
    userId: "46929616844",
    thumbnailWidth: 640,
    photoCount: 12,
  })

  return (
    <div>
      {photos &&
        photos.map(({ id, caption, src, width, height, url }) => (
          <a key={id} href={url}>
            <Image src={src} alt={caption} width={width} height={height} />
          </a>
        ))}
    </div>
  )
}

export default Posts; 