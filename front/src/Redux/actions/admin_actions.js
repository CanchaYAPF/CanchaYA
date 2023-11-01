import { GET_BOOKING, GET_USERS,NOT_ALLOW, USER_ROLES,CLEAR_USER_ROLE, REVIEW_ADMIN } from "../types/form_types";
import axios from 'axios'

export const getUsers = ()=> async dispatch => {
    const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : sessionStorage.getItem('googleToken')
    try {
      const {data} = await axios.get('http://localhost:3001/admin', {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch({
        type:  GET_USERS,
        payload: data,
      });
    } catch (error) {
      if (error.response && error.response.status === 403) {
        dispatch({ 
          type: NOT_ALLOW, 
          error: error.response.data.msg });
      }
    }
  }

  export const getBookings = ()=> async dispatch => {
    const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : sessionStorage.getItem('googleToken')
    try {
      const {data} = await axios.get('http://localhost:3001/admin/roles', {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch({
        type:  GET_BOOKING,
        payload: data,
      });
    } catch (error) {
      if (error.response && error.response.status === 403) {
        dispatch({ 
          type: NOT_ALLOW, 
          error: error.response.data.msg });
      }
    }
  }

  export const getUserRole = ()=>async dispatch =>{
    try {
      const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : sessionStorage.getItem('googleToken');
      const {data} = await axios.get('http://localhost:3001/admin/roles', {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      dispatch({
        type:USER_ROLES,
        payload:data
      })
    } catch (error) {
      throw Error(error.message);
    }
  }

  export const clearUserRole = () => ({
    type: CLEAR_USER_ROLE,
  });

  export const getReviewsAdmin = ()=> async dispatch => {
    const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : sessionStorage.getItem('googleToken')
    try {
      const {data} = await axios.get('http://localhost:3001/admin/review', {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch({
        type:  REVIEW_ADMIN,
        payload: data,
      });
    } catch (error) {
      if (error.response && error.response.status === 403) {
        dispatch({ 
          type: NOT_ALLOW, 
          error: error.response.data.msg });
      }
    }
  }


  // export const desactiveField = (id )=> async dispatch => {
  //   const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : sessionStorage.getItem('googleToken')
  //   try {
  //     const {data} = await axios.get(`http://localhost:3001/admin/field/${id}`, {
  //       headers:{
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
  //     dispatch({
  //       type:  DESACTIVE_FIELD,
  //       payload: data,
  //     });
  //   } catch (error) {
  //     if (error.response && error.response.status === 403) {
  //       dispatch({ 
  //         type: NOT_ALLOW, 
  //         error: error.response.data.msg });
  //     }
  //   }
  
  // }