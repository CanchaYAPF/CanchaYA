import React from "react";
import { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import {getFavById} from '../../Redux/actions/form_actions';
import Card from "../Card/Card";



export default function Favorites({ onClose }) {

  const token = sessionStorage.getItem(`token`)



  const  myFavorites = useSelector(state => state.myFavorites);
  const dispatch = useDispatch();
 


  useEffect(() => {
    
    dispatch(getFavById())
    
   if (token === null) navigate("/login")
  }, []);
   
  
  return (
    <div >
      
      {myFavorites?.map((fav) => {
       const field =fav[0]
        return <Card key={field.id} field={field} />;
      })}
    </div>
  );
}

