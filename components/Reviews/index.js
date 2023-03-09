'use client';
import React, { use, useState } from 'react';
import styles from '/public/styles/Reviews.module.scss';

//method to fetch data reviews
import { getReviewData } from '/libs/getReviewList.js';

const reviewsFetch = getReviewData()



export default function Reviews() {

  const reviews = use(reviewsFetch)

  const [selectedElement, setSelectedElement] = useState(1);

  const handleButtonClick = (id) => {
    setSelectedElement(id);
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
              <div key={r.author} className={styles.reviews__container__card}>
                <div>{displayStars(r.star)}</div>
                <div onClick={() => handleButtonClick(r.id)}>
                  <p className={selectedElement === r.id ? `${styles.more__line}` : null}><span style={{ fontSize: '2rem' }}>&#8223;</span>{r.description}</p>
                  {(r.description.length >= 95 && (selectedElement !== r.id)) ? <span style={{ color: '#000000', textDecoration: 'underline', fontSize: '0.8rem' }}>plus...</span> : null}
                </div>
                <div className={styles.reviews__container__card__info}>
                  <span>{r.author}</span><span>{r.date}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

