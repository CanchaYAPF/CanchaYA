import React from "react";
import { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import {getFavById, getField} from '../../Redux/actions/form_actions';
import Card from "../Card/Card";



export default function Favorites() {

  const token = sessionStorage.getItem(`token`)

  const allFields = useSelector((state) => state.fieldData);

  const  myFavorites = useSelector(state => state.myFavorites);
  const dispatch = useDispatch();
 


const toCard = []
myFavorites.map((rel)=>{

const push = allFields.filter(f =>f.id === rel.idsFields )

toCard.push(push)

})
console.log(toCard)



  useEffect(() => {
    dispatch(getField());
    dispatch(getFavById())
    
   if (token === null) navigate("/login")
  }, []);
   
  
  return (
    <div >
      
      {toCard.map((fav) => {
       const field =fav[0]
        return <Card key={field.id} field={field} />;
      })}
    </div>
  );
}

