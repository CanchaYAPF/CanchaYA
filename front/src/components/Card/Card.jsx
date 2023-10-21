import {Link} from "react-router-dom"
import style from "./card.module.css";
import {addFav} from '../../Redux/actions/form_actions';
import {  useDispatch } from 'react-redux';
import React, {  useState } from 'react';


function Card({field}) {

  const token = sessionStorage.getItem(`token`)


  const id = field.id

  const char= {
    
    token: token,
    idsFields: field.id
  }

  

const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  
  
  const handleFavorite = function () {
    if (isFav) {
      setIsFav(false);
      // despachar remove
      removeFav(id);
    } else {
      setIsFav(true);
      // despachar addFav
      dispatch(addFav(char));
    }
  };






  

    return (




      
      <div className="cardContainer">



      <div className={style.close}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        
      </div>




        <Link to ={`/${id}`} >
        <div className={style.container2}>
          
          <h1>Name: {field.name}</h1>
          <h2>City: {field.city}</h2>
          <h3>Price: {field.price}</h3>
          <div className={style.imagen}>
            <img src={field.image}  alt="Charging..." />
          </div>
        
          </div>
          


        </Link>
        </div>
      
    );
  }
  
  export default Card