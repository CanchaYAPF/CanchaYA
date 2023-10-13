import React from 'react';
import './App.css'; 
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar'; 

const App = () => {
  return (
    <div className="container"> 
    <Router> 
      <Home /> 
    </Router>
    </div>
  );
};

export default App;