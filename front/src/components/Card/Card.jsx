import {Link} from 'react-router-dom';
import React from 'react';
import style from './Card.module.css'

const Card = ({field}) =>{
    return(
        <Link to={`/detail/${field.id}`}>
        <div className={style.container}>
           <h1>{field.name} </h1>
           <h2>Sport: {field.sport}</h2>
           <h3>Rating: {field.rating}</h3>
           <h3>City: {field.city}</h3>
           <h3>Address: {field.address}</h3>
          <div className={style.imagen}>
            <img src={field.image}  alt="Charging..." />
          </div>
        </div>        
        </Link>
    )
};

export default Card;