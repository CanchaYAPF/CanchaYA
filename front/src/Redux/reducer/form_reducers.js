import { CREATE_BOOKING, GET_BOOKING, CREATE_FIELD, GET_FIELD, CREATE_REVIEW, GET_REVIEW, USER_LOGIN, USER_SIGNUP, FORM_CANCHA_SUCCESS, FORM_CANCHA_ERROR } from '../types/form_types';

const initialState = {
  bookingData: {},
  fieldData: {},
  reviewData: {},
  userData: {},
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOKING:
      return {
        ...state,
        bookingData: action.data
      };
    case GET_BOOKING:
      return {
        ...state,
        bookingData: action.data
      };
    case CREATE_FIELD:
      return {
        ...state,
        fieldData: action.data
      };
    case GET_FIELD:
      return {
        ...state,
        fieldData: action.data
      };
    case CREATE_REVIEW:
      return {
        ...state,
        reviewData: action.data
      };
    case GET_REVIEW:
      return {
        ...state,
        reviewData: action.data
      };
    case USER_LOGIN:
      return {
        ...state,
        userData: action.payload 
      };
    case USER_SIGNUP:
      return {
        ...state,
        userData: action.payload 
      };
   case FORM_CANCHA_SUCCESS:
  return {
    ...state,
    formData: action.payload
  };
    case FORM_CANCHA_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};