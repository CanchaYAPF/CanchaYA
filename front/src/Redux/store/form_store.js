import { createStore } from 'redux';
import formReducer from '../reducer/form_reducer';

const store = createStore(formReducer);

export default store;