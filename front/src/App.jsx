/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Login, SignUp, Form, Details, Profile, Favorites, Booking, NavBar, Review,Reviews, Admin,Forgotpw, Resetpw  } from "./components/index";
import './App.css'; 
import SearchContext from './SearchContext';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/review/:id' element={<Review />} />
          <Route path='/prueba' element={<Reviews />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/:id' element={<Details />} />
          <Route path='/profile' element={<Profile/>} /> 
          <Route path='/booking' element={<Booking/>} /> 
          <Route path='/Administracion' element={<Admin/>} /> 
          <Route path="/forgot-password" element={<Forgotpw />} />
          <Route path='/reset-password' element={<Resetpw />} />
        </Routes>
      </div>
    </SearchContext.Provider>
  );
};

export default App;

