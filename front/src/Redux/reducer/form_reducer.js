import { FORM_CANCHA } from '../actions/form_actions';

const initialState = {
  canchaData: null,
};

const canchaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_CANCHA:
      return {
        ...state,
        canchaData: action.payload,
      };
    default:
      return state;
  }
};

export default canchaReducer;
