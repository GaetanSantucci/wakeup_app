import styles from '/app/page.module.scss';

import { ScrollUp } from '@/components';

import {  getProductsData } from '@/utils/getProducts';

export default async function Post({ params }) {

  const product = await getProductsData()
  console.log('params: ', params.id )

  // const text = product[1].description.split('\n')
  // console.log('text: ', text);

  

//   var input = "Hey is some text some text?\r\n\r\nYou are some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text some text\r\n\r\nMy name is some text some text some text some text some text some text some text some text some text some text some text some text some text some text";
// var paragraphs = input.split(/(?:\r?\n)+/);
// console.log(paragraphs);

  // const product = await getProductById(params.id);
  return (
    <div className={styles.main}>
      <ScrollUp />
      {
        product.map(elem => {
          if(elem.id === +params.id) {
            const text = elem.description.split('\n')
            return (
              <>
                <div>{elem.name}</div>
                <div>{elem.price}</div>
              <ul>
                {
                text.map(p => <li key={p.index}>- {p}</li>)
                }
                </ul>
              </>
            )
       }
      })

      }
    </div>
      
    
   
  );
}

