import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Home, Login, SignUp, Form, Details, Profile, Favorites, Booking, NavBar } from "./components/index";
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
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='home' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/:id' element={<Details />} />
          <Route path='/profile' element={<Profile/>} /> 
          <Route path='/booking' element={<Booking/>} /> 
        </Routes>
      </div>
    </SearchContext.Provider>
  );
};

export default App;