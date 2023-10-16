import React from 'react'
import { useState, useEffect } from 'react'
import { userLogin } from '../../../Redux/actions/form_actions'
import { useDispatch } from "react-redux"
import { Link,useNavigate } from 'react-router-dom'


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [usernameLogin, setUserLogin] = useState({
    mail: "",
    password: ""
  })

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(userLogin(usernameLogin))
      const token = response.payload.token
      sessionStorage.setItem('token', token);
      navigate("/home")
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  }
  const handleEmailChange = (e) => {
    setUserLogin({
      ...usernameLogin,
      mail: e.target.value,
    })
  }
  
  const handlePasswordChange = (e) => {
    setUserLogin({
      ...usernameLogin,
      password: e.target.value
    })
  }
  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <input placeholder="e-mail" onChange={handleEmailChange} value={usernameLogin.mail} />
        </div>
        <div>
          <input placeholder="contraseña" onChange={handlePasswordChange} value={usernameLogin.password} type='password'/>
        </div>
        <button type="submit">Iniciar Sesion</button>
        <Link to="/signup">
          <button>Registrarme</button>
        </Link>
      </form>
    </div>
  )
}

export default Login