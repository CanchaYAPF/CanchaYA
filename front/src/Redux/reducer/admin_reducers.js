import { GET_USERS} from '../types/form_types';
  
  const initialState = {
   getAllUsers: [],

  };
  
  export default function formReducer(state = initialState, action) {
   switch (action.type) {
     case GET_USERS:
      
       return {
         ...state,
         getAllUsers: action.payload
       };

     default:
       return state;
   }
  }