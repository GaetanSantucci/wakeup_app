'use client';
import { useState } from 'react';
import styles from '/public/styles/Reviews.module.scss';

const reviews = [
  {
    id: 0,
    name: 'Oriane M.',
    comments: 'Une équipe très arrangeante, agréable et disponible ! J’ai commandé deux brunchs duo sucré/salé, ultra complets, garnis et d’une qualité exceptionnelle !!! De 25 à 90 ans, l’avis est unanime 😍 Ils mettent en avant tous les producteurs locaux, jusqu’aux pailles des Dômes faites en seigle ! Des fruits de saison sucrés, des viennoiseries fraîches et un large choix en salé ! Je recommande à 100% Merci à vous et à très bientôt !',
    date: '02-2022',
    stars: 3
  }, {
    id: 1,
    name: 'Johanna R.',
    comments: 'Que dire de plus si ce n´est parfait 👌 Le froid est venu frapper à notre porte quand soudain Wake up est arrivé ! De la chaleur et des douceurs au petit déjeuner préparées avec sincérité et qualité. C´était une surprise pour un anniversaire qui débuta dans l´originalité, la simplicité le tout fait maison, de saison et avec raison. Je recommencerai sans hésiter !👏',
    date: '01-2023',
    stars: 5
  }, {
    id: 2,
    name: 'Rachel B.',
    comments: 'Parfait! Des produits frais et fait maison et un joli packagin pour offrir ou se faire plaisir !^^',
    date: '12-2022',
    stars: 5
  }
]


export default function Reviews() {
  const [selectedElement, setSelectedElement] = useState();

  const handleButtonClick = (index) => {
    setSelectedElement(index);
  }

  function displayStars(rating) {
    const stars = Math.round(rating);
    let starDisplay = '';
    for (let i = 0; i < 5; i++) {
      if (i < stars) starDisplay += '⭐️';
    }
    return starDisplay;
  }



  return (
    <>
      <h3>Nos avis clients</h3>
      <div className={styles.reviews__container}>
        {
          reviews.map((r, i) => {
            return (
              <div key={r.name} className={styles.reviews__container__card}>
                <div>{displayStars(r.stars)}</div>
                <div onClick={() => handleButtonClick(i)}>
                  <p className={selectedElement === r.id ? `${styles.more__line}` : null}><span style={{ fontSize: '2rem' }}>&#8223;</span>{r.comments}</p>
                  {(r.comments.length >= 95 && (selectedElement !== r.id)) ? <span style={{ color: '#000000', textDecoration: 'underline', fontSize: '0.8rem' }}>plus...</span> : null}
                </div>
                <div className={styles.reviews__container__card__info}>
                  <span>{r.name}</span><span>{r.date}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}