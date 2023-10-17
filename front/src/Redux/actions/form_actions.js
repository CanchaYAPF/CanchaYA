
import { CREATE_BOOKING, GET_BOOKING, CREATE_FIELD, GET_FIELD, CREATE_REVIEW, GET_REVIEW, USER_LOGIN, USER_SIGNUP, FORM_CANCHA_SUCCESS, FORM_CANCHA_ERROR, GET_SPORTS, ORDER_BY_PRICE, GET_FIELD_BY_ID } from "../types/form_types";

import axios from "axios";

export function createBooking(data) {
  return { type: CREATE_BOOKING, data };
}

export function getBooking(data) {
  return { type: GET_BOOKING, data };
}

export function createField(data) {
  return { type: CREATE_FIELD, data };
}

export function getField() {
return async function(dispatch){

  try{

    const result = await axios.get(`http://localhost:3001/field/`);
    const fields = result.data

return dispatch({type: GET_FIELD, payload: fields});
}
catch (error) {
    alert("error fields")
}}}


export function getSports() {
return async function(dispatch){

  try{

    const result = await axios.get(`http://localhost:3001/Sports/`);
    const sports = result.data

return dispatch({type: GET_SPORTS, payload: sports});
}
catch (error) {
    alert("error sports")
}}}




export function createReview(data) {
  return { type: CREATE_REVIEW, data };
}

export function getReview(data) {
  return { type: GET_REVIEW, data };
}

export function userLogin(data) {
  return async function (dispatch) {
    const res = await axios.post(`http://localhost:3001/user/login`, data);
    const user = res.data;
    return dispatch({
      type: USER_LOGIN,
      payload: user
    });
  }
}

export function userSignup(data) {
  return async function (dispatch) {
    const res = await axios.post(`http://localhost:3001/user/signup`, data);
    const register = res.data;
    return dispatch({
      type: USER_SIGNUP,
      payload: register
    });
  }
}

export function formCancha(data) {
  
  return async function (dispatch) {
    //se obtiene el token del localStorage y se usa para enviar por cabecera para pasar filtro del middleware Auth
    const token = sessionStorage.getItem('tokenLoginResponse')
    try {
      await axios.post('http://localhost:3001/field', data,{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch({
        type: FORM_CANCHA_SUCCESS,
        payload: data
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
export function getFieldById(id) {
  return async function(dispatch){
    try{
      const result = await axios.get(`http://localhost:3001/field/${id}`);
      const field = result.data;
      return dispatch({type: GET_FIELD_BY_ID, payload: field});
    }
    catch (error) {
      alert("error")
    }
  }
}
export const orderByPrice = (order) => {
  return {
    type: ORDER_BY_PRICE,
    payload: order,
  };
};