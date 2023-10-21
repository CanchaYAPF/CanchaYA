import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store/form_store.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="643395136180-j6pn9slv1rsdsrkq88d1aa1s60i39eob.apps.googleusercontent.com">
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
