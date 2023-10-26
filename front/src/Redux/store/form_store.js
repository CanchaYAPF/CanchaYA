import { createStore, applyMiddleware, compose, combineReducers  } from "redux";
import thunkMiddleware from "redux-thunk";
import formReducer from '../reducer/form_reducers';
import adminReducer from '../reducer/admin_reducers'

const rootReducer = combineReducers({
    form: formReducer,
    admin: adminReducer
  });
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))

);

export default store;