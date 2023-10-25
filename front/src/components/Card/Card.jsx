import {Link} from "react-router-dom"
import style from "./card.module.css";
import {addFav, removeFav} from '../../Redux/actions/form_actions';
import {  useDispatch } from 'react-redux';
import React, {  useState } from 'react';
import { connect } from "react-redux";
import { useEffect } from "react";

function Card({field,myFavorites, removeFav, addFav, esFav}) {
  const token = sessionStorage.getItem(`token`)
  const id = field.id
  const char = {
    token: token,
    idsFields: field.id
  }

  const dispatch = useDispatch();
  const [isFav, setIsFav] = esFav? useState(true):useState(false)
  
  const handleFavorite = function () {
    if (isFav) {
      setIsFav(false);
      // despachar remove
      removeFav(char);
    } else {
      setIsFav(true);
      // despachar addFav
      dispatch(addFav(char));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

    return (
      <div className={style.container2}>
      <div className={style.close}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </div>
        <Link to ={`/${id}`} >
        <div className={style.container}>
          <h3 className={style.h3}>Name: {field.name}</h3>
          <h3>City: {field.city}</h3>
          <h3>Price: {field.price}</h3>
          <h3>Sports: {field.sports}</h3>
          <div className={style.imagen}>
            <img src={field.image}  alt="Charging..." />
          </div>
          </div>
        </Link>
        </div>
    );
  }

  function mapState(state) {
    return {
      myFavorites: state.myFavorites,
    };
  }
  
  function mapDispatch(dispatch) {
    return {
      addFav: function (char) {
        dispatch(addFav(char));
      },
      removeFav: function (id) {
        dispatch(removeFav(id));
      },
    };
  }

  export default connect(mapState, mapDispatch)(Card);