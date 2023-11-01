<<<<<<< HEAD
import { CREATE_BOOKING, GET_BOOKING, CREATE_FIELD, GET_FIELD, CREATE_REVIEW, GET_REVIEW,
  USER_LOGIN, USER_SIGNUP, GET_SPORTS , 
  GET_FIELD_BY_ID,FILTER, ORDER_BY_PRICE, GET_CITIES,
   FILTER_CITIES,FILTER_HORARIO,GET_HORARIOS, EDIT_FIELD, ADD_FAV, DELETE_FAV , RESET_CITY_FILTER, RESET_HORARIO_FILTER, RESET_SPORT_FILTER, RESET_PRICE_RANGE_FILTER, FILTER_PRICE_RANGE,GET_USERS, NOT_ALLOW} from '../types/form_types';
=======

import { CREATE_BOOKING, 
        GET_BOOKING, 
        CREATE_FIELD, 
        GET_FIELD, 
        CREATE_REVIEW,
        GET_REVIEW,
  USER_LOGIN,
        USER_SIGNUP, 
        GET_SPORTS , 
  GET_FIELD_BY_ID,
        FILTER, 
        ORDER_BY_PRICE, 
        GET_CITIES,
   FILTER_CITIES,
        FILTER_HORARIO,
        GET_HORARIOS, 
        EDIT_FIELD, 
        ADD_FAV, 
        DELETE_FAV, 
        RESET_CITY_FILTER, 
        RESET_HORARIO_FILTER, 
        RESET_SPORT_FILTER, 
        RESET_PRICE_RANGE_FILTER, 
        FILTER_PRICE_RANGE,
        GET_USERS, 
        NOT_ALLOW} from '../types/form_types';

const initialState = {
 bookingData: [],
 fieldData: [],
 currentField: {} ,
 reviewData: [],
 userData: [],
 sportData: [],
 allFieldsBackUp: [],
 filteredFields: [],
 filters: false,
 citiesData: [],
 horariosData: [],
 myFavorites:[],
 myFavoritesReady:[],
 appliedFilters: {
   sport: "",
   city: "",
   horario: "",
   priceRange: { min: '', max: '' },
 },
 getAllUsers: [],
 error:"",
 getAllFieldsAdmin:[]
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
     case EDIT_FIELD:
  return {
    ...state,
    fieldData: state.fieldData.map(field => field.id === action.payload.id ? action.payload : field)
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
       allFieldsBackUp: action.payload,
       filteredFields: action.payload,
     };
   case CREATE_REVIEW:
     return {
       ...state,
       reviewData: action.data
     };
   case GET_REVIEW:
     return {
      ...state,
      reviewData: [...action.payload],
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
   case RESET_SPORT_FILTER:
     return {
       ...state,
       fieldData: [...state.allFieldsBackUp],
       filteredFields: [...state.allFieldsBackUp],
       filters: false,
       appliedFilters: {
         ...state.appliedFilters,
         sport: "",
       },
     };
   case RESET_CITY_FILTER:
     return {
       ...state,
       fieldData: [...state.allFieldsBackUp],
       filteredFields: [...state.allFieldsBackUp],
       filters: false,
       appliedFilters: {
         ...state.appliedFilters,
         city: "",
       },
     };
   case RESET_HORARIO_FILTER:
     return {
       ...state,
       fieldData: [...state.allFieldsBackUp],
       filteredFields: [...state.allFieldsBackUp],
       filters: false,
       appliedFilters: {
         ...state.appliedFilters,
         horario: "",
       },
     };
   case GET_SPORTS:
     return {
       ...state,
       sportData: [...action.payload]
     };
   case FILTER:
     const newSportFilters = {
       ...state.appliedFilters,
       sport: action.payload,
     };
     let sportFilteredFields = [...state.allFieldsBackUp];
     if (newSportFilters.sport) {
       sportFilteredFields = sportFilteredFields.filter(f => f.sports.includes(newSportFilters.sport));
     }
     if (newSportFilters.city) {
       sportFilteredFields = sportFilteredFields.filter(f => f.city === newSportFilters.city);
     }
     if (newSportFilters.horario) {
       sportFilteredFields = sportFilteredFields.filter(f => f.shift?.includes(newSportFilters.horario));
     }
     return {
       ...state, 
       fieldData: sportFilteredFields,
       filteredFields: sportFilteredFields, 
       filters: true,
       appliedFilters: newSportFilters,
     };
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
   case GET_CITIES:
     return { 
       ...state,
       citiesData: [...action.payload]
     };
   case GET_HORARIOS:
     return { 
       ...state,
       horariosData: [...action.payload]
     };
     case FILTER_PRICE_RANGE:
  const filteredFields = state.allFieldsBackUp.filter(field => field.price >= action.payload.min && field.price <= action.payload.max);
  return {
    ...state,
    fieldData: filteredFields.length > 0 ? filteredFields : state.allFieldsBackUp,
  };
import {
  CREATE_BOOKING,
  GET_BOOKING,
  CREATE_FIELD,
  GET_FIELD,
  CREATE_REVIEW,
  GET_REVIEW,
  USER_LOGIN,
  USER_SIGNUP,
  GET_SPORTS,
  GET_FIELD_BY_ID,
  FILTER,
  ORDER_BY_PRICE,
  GET_CITIES,
  FILTER_CITIES,
  FILTER_HORARIO,
  GET_HORARIOS,
  ADD_FAV,
  DELETE_FAV,
  RESET_CITY_FILTER,
  RESET_HORARIO_FILTER,
  RESET_SPORT_FILTER,
  RESET_PRICE_RANGE_FILTER,
  FILTER_PRICE_RANGE,
  GET_USERS,
  NOT_ALLOW,
} from "../types/form_types";
>>>>>>> 856526fcdeff1abf3657e105c374db979ac4ad80

const initialState = {
 bookingData: [],
 fieldData: [],
 currentField: {} ,
 reviewData: [],
 userData: [],
 sportData: [],
 allFieldsBackUp: [],
 filteredFields: [],
 filters: false,
 citiesData: [],
 horariosData: [],
 myFavorites:[],
 myFavoritesReady:[],
 appliedFilters: {
   sport: "",
   city: "",
   horario: "",
   priceRange: { min: '', max: '' },
 },
 getAllUsers: [],
 error:"",
 getAllFieldsAdmin:[]
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
     case EDIT_FIELD:
  return {
    ...state,
    fieldData: state.fieldData.map(field => field.id === action.payload.id ? action.payload : field)
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
       allFieldsBackUp: action.payload,
       filteredFields: action.payload,
     };
   case CREATE_REVIEW:
     return {
       ...state,
       reviewData: action.data
     };
   case GET_REVIEW:
     return {
      ...state,
      reviewData: [...action.payload],
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
   case RESET_SPORT_FILTER:
     return {
       ...state,
       fieldData: [...state.allFieldsBackUp],
       filteredFields: [...state.allFieldsBackUp],
       filters: false,
       appliedFilters: {
         ...state.appliedFilters,
         sport: "",
       },
     };
   case RESET_CITY_FILTER:
     return {
       ...state,
       fieldData: [...state.allFieldsBackUp],
       filteredFields: [...state.allFieldsBackUp],
       filters: false,
       appliedFilters: {
         ...state.appliedFilters,
         city: "",
       },
     };
   case RESET_HORARIO_FILTER:
     return {
       ...state,
       fieldData: [...state.allFieldsBackUp],
       filteredFields: [...state.allFieldsBackUp],
       filters: false,
       appliedFilters: {
         ...state.appliedFilters,
         horario: "",
       },
     };
   case GET_SPORTS:
     return {
       ...state,
       sportData: [...action.payload]
     };
   case FILTER:
     const newSportFilters = {
       ...state.appliedFilters,
       sport: action.payload,
     };
     let sportFilteredFields = [...state.allFieldsBackUp];
     if (newSportFilters.sport) {
       sportFilteredFields = sportFilteredFields.filter(f => f.sports.includes(newSportFilters.sport));
     }
     if (newSportFilters.city) {
       sportFilteredFields = sportFilteredFields.filter(f => f.city === newSportFilters.city);
     }
     if (newSportFilters.horario) {
       sportFilteredFields = sportFilteredFields.filter(f => f.shift?.includes(newSportFilters.horario));
     }
     return {
       ...state, 
       fieldData: sportFilteredFields,
       filteredFields: sportFilteredFields, 
       filters: true,
       appliedFilters: newSportFilters,
     };
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
   case GET_CITIES:
     return { 
       ...state,
       citiesData: [...action.payload]
     };
   case GET_HORARIOS:
     return { 
       ...state,
       horariosData: [...action.payload]
     };
     case FILTER_PRICE_RANGE:
  const filteredFields = state.allFieldsBackUp.filter(field => field.price >= action.payload.min && field.price <= action.payload.max);
  return {
    ...state,
    fieldData: filteredFields.length > 0 ? filteredFields : state.allFieldsBackUp,
  };

<<<<<<< HEAD
case RESET_PRICE_RANGE_FILTER:
  return {
    ...state,
    fields: state.allFields,
  };
=======

    case RESET_PRICE_RANGE_FILTER:
      return {
        ...state,
        fields: state.allFields,
      };
>>>>>>> 856526fcdeff1abf3657e105c374db979ac4ad80

   case FILTER_CITIES: 
     const newCityFilters = {
       ...state.appliedFilters,
       city: action.payload,
     };
     let cityFilteredFields = [...state.allFieldsBackUp];
     if (newCityFilters.sport) {
       cityFilteredFields = cityFilteredFields.filter(f => f.sports.includes(newCityFilters.sport));
     }
     if (newCityFilters.city) {
       cityFilteredFields = cityFilteredFields.filter(f => f.city === newCityFilters.city);
     }
     if (newCityFilters.horario) {
       cityFilteredFields = cityFilteredFields.filter(f => f.shift?.includes(newCityFilters.horario));
     }
     return {
       ...state,
       fieldData: cityFilteredFields,
       filteredFields: cityFilteredFields,
       filters: true,
       appliedFilters: newCityFilters,
     };
   case FILTER_HORARIO: 
     const newHorarioFilters = {
       ...state.appliedFilters,
       horario: action.payload,
     };
     let horarioFilteredFields = [...state.allFieldsBackUp];
     if (newHorarioFilters.sport) {
       horarioFilteredFields = horarioFilteredFields.filter(f => f.sports.includes(newHorarioFilters.sport));
     }
      if (newHorarioFilters.city) {
       horarioFilteredFields = horarioFilteredFields.filter(f => f.city === newHorarioFilters.city);
     }
     if (newHorarioFilters.horario) {
       horarioFilteredFields = horarioFilteredFields.filter(f => f.shift?.includes(newHorarioFilters.horario));
     }
     return {
       ...state,
       fieldData: horarioFilteredFields,
       filteredFields: horarioFilteredFields,
       filters: true,
       appliedFilters: newHorarioFilters,
     };
   case ADD_FAV: 
     return {
       ...state,
       myFavorites: action.payload,
     };
     case GET_USERS:
      
     return {
       ...state,
       getAllUsers: action.payload,
       error:""
     };
     case NOT_ALLOW:

     return{
      ...state,
      error:action.error
     }
   default:
     return state;
 }
}