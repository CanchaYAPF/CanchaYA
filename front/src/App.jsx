import { Route, Routes, Navigate } from "react-router-dom"
import {Home, Login, SignUp, Form, Details, Profile,NavBar} from "./components/index" 
import './App.css'; 

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='home' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/:id' element={<Details />} />
        <Route path='/profile' element={<Profile/>} /> 
      </Routes>
    </div>
  );
};

export default App;