import { GET_USERS,NOT_ALLOW, DESACTIVE_FIELD } from "../types/form_types";
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