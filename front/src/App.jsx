import { Route, Routes, Navigate } from "react-router-dom"
import {Home, Login, SignUp, Form} from "./components/index"
import './App.css'; 

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='home' element={<Home />} />
        <Route path='/form' element={<Form />} />

      </Routes>
    </div>
  );
};

export default App;