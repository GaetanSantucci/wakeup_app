import styles from '/public/styles/Additionnal.module.scss';

// import orange from '/public/images/orange.jpeg';
// import prosecco from '/public/images/prosecco.jpeg';
import Image from 'next/image';

const Additionnal = ({ products }) => {

  return (
    <div className={styles.additionnal__container}>

      {
        products.map(elem => {
          console.log('elem: ', elem);
          const price = elem.price.toString().replace('.', ',');
          return (
            <div key={elem.name} className={styles.additionnal__container__card}>
              <div className={styles.additionnal__container__card__image}>
                <Image src={elem.image} width={250} height={230} alt={elem.name} />
              </div>
              <div className={styles.additionnal__container__card__details}>
                <h3>{elem.name}</h3>
                <p>{elem.description}</p>
                <span>{price} €</span>
              </div>
            </div>

          )
        })
      }
    </div>
  )
}

export default Additionnal;