
import { CREATE_BOOKING, GET_BOOKING, CREATE_FIELD, GET_FIELD, CREATE_REVIEW, GET_REVIEW, USER_LOGIN, USER_SIGNUP, FORM_CANCHA_SUCCESS, FORM_CANCHA_ERROR, GET_SPORTS, ORDER_BY_PRICE,FILTER, GET_FIELD_BY_ID, GET_CITIES, FILTER_CITIES, FILTER_HORARIO, GET_HORARIOS,FORM_BOOKING_SUCCESS} from "../types/form_types";

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
export function postBooking(booking) {
  return async function (dispatch) {
    const token = sessionStorage.getItem('token')
    try {
      await axios.post('http://localhost:3001/booking', booking,{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch({
        type: FORM_BOOKING_SUCCESS,
        payload: booking
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };}

export function formCancha(data) {
  return async function (dispatch) {
    //se obtiene el token del localStorage y se usa para enviar por cabecera para pasar filtro del middleware Auth
    const token = sessionStorage.getItem('token')
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
      const field = result.data[0];
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

export const filter= (order) => {
  return {
    type: FILTER,
    payload: order,
  };
};

export const filterHorario= (order) => {
  return {
    type: FILTER_HORARIO,
    payload: order,
  };
};

export function getHorarios() {
  const horarios = [
    "Mañana",
    "Tarde",
    "Noche",
  ];
  return {
    type: GET_HORARIOS,
    payload: horarios,
  };
}

export function getCities() {
  const cities = [
    "Buenos Aires",
    "Córdoba",
    "Rosario",
    "Mendoza",
    "Tucumán",
    "Santa Fe",
    "San Miguel de Tucumán",
    "Mar del Plata",
  ];
  return {
    type: GET_CITIES,
    payload: cities.slice(0, 8),
  };
}

export const filterCities = (selectedCity) => {
  return {
    type: FILTER_CITIES,
    payload: selectedCity, // La ciudad seleccionada por el usuario
  };
};

