
import { CREATE_BOOKING, GET_BOOKING, CREATE_FIELD, CLEAR_FAVS, GET_FIELD, CREATE_REVIEW, GET_REVIEW, 
  USER_LOGIN, USER_SIGNUP, FORM_CANCHA_SUCCESS, FORM_CANCHA_ERROR, GET_SPORTS,
   ORDER_BY_PRICE,FILTER, GET_FIELD_BY_ID, GET_CITIES, FILTER_CITIES,
    FILTER_HORARIO, GET_HORARIOS,EDIT_FIELD,ADD_FAV,DELETE_FAV, FORM_BOOKING_SUCCESS, RESET_CITY_FILTER,RESET_HORARIO_FILTER,RESET_SPORT_FILTER, FILTER_PRICE_RANGE, RESET_PRICE_RANGE_FILTER} from "../types/form_types";

    

import axios from "axios";


export function createBooking(data) {
  return { type: CREATE_BOOKING, data };
}

export function getBookingSuccess(data) {
  return { type: GET_BOOKING, data };
}

// Función asincrónica para realizar la solicitud y despachar la acción
export function getAllBookings() {
  return async (dispatch) => {
    const token = sessionStorage.getItem('token');

    try {
      const response = await axios.get('https://canchasyaback.onrender.com/booking', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const bookings = response.data;
        dispatch(getBookingSuccess(bookings));
      } else {
        console.error('Error al obtener las reservas');
      }
    } catch (error) {
      console.error('Error al obtener las reservas:', error);
    }
  };
}



export const clearFavs = () => {
  return {
    type: CLEAR_FAVS,
  };
};

export function createField(data) {
  return { type: CREATE_FIELD, data };
}

export function getField() {
return async function(dispatch){

  try{

    const result = await axios.get(`https://canchasyaback.onrender.com/field/`);
    const fields = result.data

return dispatch({type: GET_FIELD, payload: fields});
}
catch (error) {
    alert("error fields")
}}}

export const editField = (id, field) => async (dispatch) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await axios.put(`https://canchasyaback.onrender.com/field/${id}`, field, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    dispatch({
      type: EDIT_FIELD,
      payload: response.data
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export function getSports() {
return async function(dispatch){

  try{

    const result = await axios.get(`https://canchasyaback.onrender.com/Sports/`);
    const sports = result.data

return dispatch({type: GET_SPORTS, payload: sports});
}
catch (error) {
    alert("error sports")
}}}




export function  createReview(data) {

  return async function(dispatch){
    try{
      
      const result = await axios.post(`https://canchasyaback.onrender.com/reviews/`, data)
  
      
  
  
  
      return result
      
  
  // return dispatch({type: GET_SPORTS, payload: sports});
  }
  catch (error) {
      alert("error sports")
  }
  
    
  }}

export function getReviews(idField) {
return async function (dispatch){

  const res = await axios.get(`https://canchasyaback.onrender.com/reviews/${idField}`)
const alReducer = res.data

console.log(alReducer)
return dispatch({
  type: GET_REVIEW,
  payload: alReducer
});

}

}

export function userLogin(data) {
  return async function (dispatch) {
    const res = await axios.post(`https://canchasyaback.onrender.com/user/login`, data);
    const user = res.data;
    return dispatch({
      type: USER_LOGIN,
      payload: user
    });
  }
}

export function userSignup(data) {
  console.log("data actions",data)
  return async function (dispatch) {
    const res = await axios.post(`https://canchasyaback.onrender.com/user/signup`, data);
    const register = res.data;
    return dispatch({
      type: USER_SIGNUP,
      payload: register
    });
  }
}
export function postBooking(booking) {
  return async function (dispatch) {
    
    const tokenJwt = sessionStorage.getItem(`token`)
    const googleToken= sessionStorage.getItem('googleToken')
    const token =  tokenJwt ?  tokenJwt : googleToken


    try {
      await axios.post('https://canchasyaback.onrender.com/booking', booking,{
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
    const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : sessionStorage.getItem('googleToken')
    try {
      await axios.post('https://canchasyaback.onrender.com/field', data,{
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





export function addFav(fav) {
  return async function (dispatch) {
    const tokenJwt = sessionStorage.getItem(`token`)
  const googleToken= sessionStorage.getItem('googleToken')
  const token =  tokenJwt ?  tokenJwt : googleToken
    try {
      await axios.post(
        `https://canchasyaback.onrender.com/favorite/`,fav, {
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
  
        
  
          }
       } );


      const favs = await axios.get(`https://canchasyaback.onrender.com/favorite/${token}`,
      )
      const alReducer = favs.data

      return dispatch({
        type: ADD_FAV,
        payload: alReducer,
      });
    } catch (error) {
      console.log(error);
    }
  };
}




export function removeFav(fav) {
  return async function (dispatch) {
    const tokenJwt = sessionStorage.getItem(`token`)
  const googleToken= sessionStorage.getItem('googleToken')
  const token =  tokenJwt?  tokenJwt : googleToken
    try {
      await axios.post(
        `https://canchasyaback.onrender.com/favorite/del/`,fav,{
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`

      

        }
     } );
      const favs = await axios.get(`https://canchasyaback.onrender.com/favorite/${token}`,
      )
      const alReducer = favs.data

      return dispatch({
        type: ADD_FAV,
        payload: alReducer,
      });
    } catch (error) {
      console.log(error);
    }
  };
}




export function getFavById(token) {
  return async function(dispatch){
    let token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : sessionStorage.getItem('googleToken')
    
    try{
      const favs = await axios.get(`https://canchasyaback.onrender.com/favorite/${token}`)
      const alReducer = favs.data
      
      return dispatch({type: ADD_FAV, payload: alReducer});
    }
    catch (error) {
      alert("error en getFavById")
    }
  }
}


export function getFieldById(id) {
  return async function(dispatch){
    try{
      const result = await axios.get(`https://canchasyaback.onrender.com/field/${id}`);
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
    payload: order === "Ascendente" ? "asc" : "desc",
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

export const resetSportFilter = () => {
  return {
    type: RESET_SPORT_FILTER,
  };
};

export const resetCityFilter = () => {
  return {
    type: RESET_CITY_FILTER,
  };
};

export const resetHorarioFilter = () => {
  return {
    type: RESET_HORARIO_FILTER,
  };
};

export const filterCities = (selectedCity) => {
  return {
    type: FILTER_CITIES,
    payload: selectedCity, // La ciudad seleccionada por el usuario
  };
};

export const filterPriceRange = (min, max) => {
  return {
    type: FILTER_PRICE_RANGE,
    payload: { min, max },
  };
};

export const resetPriceRangeFilter = () => {
  return {
    type: RESET_PRICE_RANGE_FILTER,
  };
};
