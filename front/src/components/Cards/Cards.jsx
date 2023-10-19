import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';

function Cards({ fields }) {
  const arrFields = fields
  return (
    <div className={styles.container}>
      {arrFields?.map((field, index) => (<Card key={index} field={field}/>))}
    </div>
  );
}

export default Cards;

