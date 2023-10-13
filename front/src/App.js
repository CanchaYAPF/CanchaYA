import React from 'react';
import { Route, Router } from "react-router-dom"
import { Home, SignUp, Login } from "./components/index"
import './App.css';
const App = () => {
  return (
    <div className="container">
      <Router>
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
        <Route path='home' element={<Home />} />
      </Router>
    </div>
  );
};

export default App;
