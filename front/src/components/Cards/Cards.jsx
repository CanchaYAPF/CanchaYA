import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';

function Cards({ allFields }) {
  const arrFields = allFields
  console.log(arrFields);
  return (
    <div className={styles.container}>
{arrFields?.map((field, index) => (<Card key={index} field={field} />))}
    </div>
  );
}

export default Cards;

