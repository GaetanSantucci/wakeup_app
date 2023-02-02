'use client';

import styles from 'app/page.module.scss';

import { ScrollUp } from '@/components';

import { useState } from 'react';

import { getArea } from '/libs/getDeliveryArea';
import { use } from 'react';

import map from '/public/images/zone_livraison.png';
import Image from 'next/image';

const areaFetch = getArea();

export default function ClientFetching() {
  // use a button to toggle loading of components to make sure they're loaded client-side
  const data = use(areaFetch);
  console.log('data: ', data);
  
  const [inputValue, setInputValue] = useState('');
  const [isAvailable, setIsAvailable] = useState();
  const [notInOurZone, setNotInOurZone] = useState(false);
  
  const handleChangeCity = (e) => {
    setInputValue(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = data.filter(o =>
      o.city.toLowerCase().includes(inputValue.toLowerCase()));
      console.log('result: ', result);
      if(result.length !== 0) {
        setInputValue('')
        setIsAvailable(result[0]);
        setNotInOurZone(false);

        return result
      }else {
        setIsAvailable()
        setInputValue('')
        setNotInOurZone(true);
      }
    }

    return (
        <div className={styles.main}>
          <ScrollUp />
          <div className={styles.delivery__container}>
            <h2>Zone de livraison</h2>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder='entrez votre ville' value={inputValue} onChange={handleChangeCity} />
              </form>

              {isAvailable && <p>Vous êtes livrable sur {isAvailable.city} pour des frais de livraison s'élevant à  {isAvailable.price} €</p>}
              {notInOurZone &&
                <>
                  <h2>Désolé, vous ne vous situez pas dans notre zone de livraison mais nous pouvons vous proposer un point de rendez-vous sur une des communes suivantes</h2>
                  <select>
                    {data.map((option) => (
                      <option key={option.city} value={option.city}>{option.city}</option>
                    ))}
                  </select>
                </>}
                <div className={styles.delivery__container__image}>
                  <Image src={map} alt='carte de la zone de livraison' style={{ width: '100%', height: '100%'}}/>
                </div>
                <div className={styles.delivery__container__information}>
                  <div className={styles.delivery__container__information__area}>
                    <div style={{backgroundColor: '#d9ffe2', width: '40px', height: '20px'}}>
                      <ul>
                        { 
                          data.map((option) => {
                            console.log('option: ', option);
                            if(option.price === '3.50') return <li>{option.city}</li>
                          })
                        }
                      </ul>
                    </div>
                    <div style={{backgroundColor: '#fff9ce', width: '40px', height: '20px'}}>

                    </div>
                  </div>
                </div>
          </div>
        </div>
    );
}
