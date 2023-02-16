'use client';
import Image from 'next/image';
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "/public/styles/Bootstrap.module.scss";


const BootstrapCarousel = ({ products }) => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {products.map((item) => {
        const price = item.price.toString().replace('.', ',');
        return (
          <Carousel.Item key={item.name} className={styles.itemP} interval={4000}>
            <Image src={item.image} alt="slides" width={300} height={400} />
            <Carousel.Caption className={styles.caption}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price} €</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      }
      )}
    </Carousel>
  );
}

export default BootstrapCarousel;