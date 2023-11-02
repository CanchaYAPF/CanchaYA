import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getFavById, clearFavs} from '../../Redux/actions/form_actions';


function Cards({ allFields }) {


  const  myFavorites = useSelector(state => state.myFavorites);
  const dispatch = useDispatch();


  useEffect(() => {
    
    dispatch(getFavById())
    return () => {
      //al desmontar limpia el estado de detalle
        dispatch(clearFavs());
      };
   
  }, []);





  const arrFields = allFields
  
  return (
    <div className={styles.container}>
{arrFields?.map((field, index) => (<Card key={index} field={field} myFavorites={myFavorites} />))}
    </div>
  );
}

export default Cards;

