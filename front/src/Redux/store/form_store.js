import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import formReducer from '../reducer/form_reducers';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    formReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))

);

export default store;