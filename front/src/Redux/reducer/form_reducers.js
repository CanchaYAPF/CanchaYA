
import { CREATE_BOOKING, GET_BOOKING, CREATE_FIELD, GET_FIELD, CREATE_REVIEW, GET_REVIEW,
   USER_LOGIN, USER_SIGNUP, FORM_CANCHA_SUCCESS, FORM_CANCHA_ERROR, GET_SPORTS , GET_FIELD_BY_ID,FILTER, ORDER_BY_PRICE } from '../types/form_types';


const initialState = {
  bookingData: {},
  fieldData: [],
  currentField: {} ,
  reviewData: {},
  userData: {},
  sportData: [],
  allFieldsBackUp: [],
  filteredFields: [],
  filters: false,
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
        fieldData: [...action.payload],
        allFieldsBackUp: action.payload
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

      case GET_FIELD_BY_ID:
        return {
          ...state,
          currentField: action.payload 
        };
   

    case GET_SPORTS:
      return {
        ...state,
        sportData: [...action.payload]
      };
    case FILTER:

      let filterSport = [...state.allFieldsBackUp].filter(f => f.sport==action.payload)
      return {...state, fieldData:[...filterSport],
        filteredFields: filterSport, filters:true,

      }
      case ORDER_BY_PRICE:
      const orderByPrice = state.fieldData.slice();
      const isDescending = action.payload === "Descendente";

      orderByPrice.sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;

        if (isDescending) {
          return priceB - priceA;  
        } else {
          return priceA - priceB;  
        }
      });

      return {
        ...state,
        fieldData: orderByPrice, 
      };


    default:
      return state;
  }
}

