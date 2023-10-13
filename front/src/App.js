import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom"
import { Home, SignUp, Login } from "./components/index"
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='home' element={<Home />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;