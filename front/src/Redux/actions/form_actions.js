import { CREATE_BOOKING, GET_BOOKING, CREATE_FIELD, GET_FIELD, CREATE_REVIEW, GET_REVIEW, USER_LOGIN, USER_SIGNUP, FORM_CANCHA_SUCCESS, FORM_CANCHA_ERROR } from "../types/form_types";
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

export function getField(data) {
  return { type: GET_FIELD, data };
}

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
  console.log("data",data)
  return async function (dispatch) {
    try {
      await axios.post('http://localhost:3001/field', data);
      dispatch({
        type: FORM_CANCHA_SUCCESS,
        payload: data
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}