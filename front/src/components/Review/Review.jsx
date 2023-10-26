import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Review.module.css"
import {Link} from "react-router-dom"
import {createReview} from "../../Redux/actions/form_actions"

const FormReview = () => {



//estado local para cada input
  const [state, setState] = useState({
    rate:0,
    description:"",
    // FieldId,
    // UserId,
    
    
    
  })
//estado para los errores de cada input
  const [error, setError] = useState({
    rate:"cannot be null",
    description:"cannot be null",
    
})



  //fucion que valida en cada onChange
  const validate = (stateAux, name)=>{
    if(name==="rate"){
      if(stateAux.rate==="") setError({...error, rate:"incomplete rate"})
      else setError({...error, rate:""})
    }

    if(name==="description"){
      if(stateAux.description==="") setError({...error, description:"incomplete description."})
      else setError({...error, description:""})
    }


  }
//controlador de submit
  const disableFunction = ()=>{
    let disabledAux = true;
    for(let err in error){  
      if(error[err]==="") disabledAux = false;
      else{
        disabledAux = true;
        break;
      }
    }
    return disabledAux;
  }

 //en cada cambio actualiza el estado e invoca validate
  const handleChange = (event) =>{

        setState({
        ...state,
        [event.target.name]: event.target.value
      })
    

    validate({
      ...state,
      [event.target.name]: event.target.value
    }, event.target.name)
  }


  const handleSubmit = (event) =>{
    event.preventDefault()
    dispatch(createReview(state))
  }


  return (

<div className='bookingContainer'>

    <div className={"containerbooking"}>
      
      <form onSubmit={handleSubmit} className='form-cont-form'  >
        
        
        <h2>Review</h2>
        <label>Rate: </label>
        
        

        <select onChange={handleChange} name='rate'>
        <option value={1} key={1}> {  1  } </option>
        <option value={2} key={2}> {  2  } </option>
        <option value={3} key={3}> {  3  } </option>
        <option value={4} key={4}> {  4  } </option>
        <option value={5} key={5}> {  5  } </option>

        </select>
        <label className='form-error'>{error.rate}</label>




        <label>Description: </label>
        <input name='description' onChange={handleChange} type="text" />
        <label className='form-error'>{error.description}</label>
        

        <input disabled={disableFunction()} type="submit" />
      </form>
    </div>
    </div>
  )
}

export default FormReview