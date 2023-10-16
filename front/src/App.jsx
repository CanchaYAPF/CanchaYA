import { Route, Routes, Navigate } from "react-router-dom"
import Login from "./components/Auth/Login/Login"
import SignUp from "./components/Auth/SignUp/SignUp"
import Home from "./components/Home/Home"
import Form from "./components/Form/Form"
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='home' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/form' element={<Form />} />

      </Routes>
    </div>
  );
};

export default App;