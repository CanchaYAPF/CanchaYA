import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';

function Cards({ allFields }) {
  const uniqueFields = allFields
  .filter((field, index, self) => 
    index === self.findIndex((f) => (
      f.id === field.id
    ))
  )
  .slice(0, 16);
  return (
    <div className={styles.container}>
      {allFields.slice(0, 16).map((field) => (
        <Card key={field.id} field={field} className={styles.card} />
      ))}
    </div>
  );
}

export default Cards;

